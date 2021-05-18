class HomepageController < ApplicationController
  def index
    @local_posts = Post.all
    @remote_posts = ::Gnews::GetPosts.new.call(query: 'watches')
  end
end
