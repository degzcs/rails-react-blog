module Gnews
  class Post < ActiveModelSerializers::Model
    attr_accessor :title, :content, :image, :description, :slug

    def set_slug
      @slug ||= title.downcase.strip.gsub(' ', '-').gsub(/[^0-9a-z- ]/i, '')
    end
  end
end
