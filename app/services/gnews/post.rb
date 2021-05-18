module Gnews
  class Post
    attr_accessor :title, :content, :image

    def initialize(title: nil, content: nil, image: nil)
      @title = title
      @content = content
      @image = image
    end
  end
end
