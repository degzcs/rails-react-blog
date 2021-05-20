class Api::V1::PostsController < ApplicationController
  def index
    local_posts = Post.all.order(created_at: :desc)
    posts = ActiveModelSerializers::SerializableResource.new(local_posts, {}).as_json
    posts << ::Gnews::GetPosts.new.call(query: 'watches').to_a

    render json: posts.flatten, each_serializer: nil
  end

  def create
    post = Post.create!(post_params)
    if post
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
    params.permit(:title, :content, :image)
  end

  def post
    @post ||= Post.find(params[:id])
  end
end
