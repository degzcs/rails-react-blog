module Gnews
  class Client
    attr_reader :response

    RequestError = Class.new(RuntimeError)

    def call(q:, lang: 'en')
      begin
        url = build_query_from(q, lang)
        raw_response = get(url)
        @response = success?(raw_response) ? parse(raw_response) : {}
      rescue => e
        raise RequestError, "Get Request: #{e.message}"
      end
    end

    private

    delegate :get, to:'::RestClient'

    def success?(raw_response)
      raw_response.code == 200
    end

    def parse(raw_response)
      JSON.parse(raw_response.body)
    end

    def build_query_from(q, lang)
      query = config[:GNEWS_SEARCH_URL]
      query << "?q=#{q}"
      query << "&token=#{config[:GNEWS_TOKEN]}"
      query << "&lang=#{lang}"
    end

    def config
      Rails.application.credentials.config
    end
  end
end
