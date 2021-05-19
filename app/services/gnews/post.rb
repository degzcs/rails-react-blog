module Gnews
  class Post
    attr_accessor :title, :content, :image, :description

    def initialize(title: nil, content: nil, image: nil, description: nil)
      @title = title
      @content = content
      @image = image
      @description = description
    end
  end
end
