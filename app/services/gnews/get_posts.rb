module Gnews
  class GetPosts
    attr_reader :posts

    def initialize
      @client = Gnews::Client.new
    end

    def call(query:)
      client.call(q: query)
      @posts = format_response(client.response)
    end

    private

    attr_reader :client

    def format_response(res)
      res['articles'].map do |post|
        new_post = Gnews::Post.new
        post.keys.each do |key|
          new_post.send("#{key}=", post[key]) if new_post.respond_to?(key)
        end
        new_post
      end
    end
  end
end
