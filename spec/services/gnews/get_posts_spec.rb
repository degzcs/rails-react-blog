require 'rails_helper'

describe Gnews::GetPosts do

  context 'Parse Response' do
    let(:query) { 'watches' }
    before :each do
      VCR.use_cassette('gnews_success_query2') do
        Gnews::Client.new.call(q: query)
      end
    end

    it 'should create Gnews::Post object from the response' do
      posts = subject.call(query: query)
      expect(posts.count).to eq 10
      posts.each do |post|
        expect(post.title).not_to be_blank
        expect(post.content).not_to be_blank
        expect(post.image).not_to be_blank
      end
    end
  end
end
