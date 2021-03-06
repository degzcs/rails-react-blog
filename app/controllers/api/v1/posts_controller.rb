require 'will_paginate/array'
class Api::V1::PostsController < ApplicationController
  def index
    local_posts = Post.all.order(created_at: :desc).paginate(page: params[:page], per_page: 2)
    posts = local_posts.to_a
    posts << ::Gnews::GetPosts.new.call(query: 'watches').to_a.flatten.paginate(page: params[:page], per_page: 2)

    render json: posts.flatten
  end

  def create
    post = Post.create(post_params)
    if post
      render json: post
    else
      render json: post.errors
    end
  end

  def update
    if post.update(post_params)
      render json: post
    else
      render json: post.errors
    end
  end

  def show
    if post
      render json: post
    else
      render json: post.errors
    end
  end

  def destroy
    post&.destroy
    render json: { message: 'Post destroyed!' }
  end

  private

  def post_params
    params.permit(:title, :content, :description, :image)
  end

  def post
    local_post || remote_post
  end

  def local_post
    @local_post ||= Post.find_by(slug: params[:slug])
  end

  def remote_post
    @remote_post ||= ::Gnews::GetPosts.new.call(query: 'watches').select do |post|
      post.slug == params[:slug]
    end.first
  end
end
