require 'rails_helper'

describe Gnews::Client do
  let(:query) { 'watches' }
  context '#call' do
    before :each do
      VCR.use_cassette('gnews_success_query2') do
        subject.call(q: query)
      end
    end

    it 'should bring the news related with Colombia' do
      expect(subject.response).to be_a Hash
    end
  end

  context 'unset GNEWS url' do
    before :each do
      allow(subject).to receive(:config).and_return({})
    end

    it 'raises an Unauthorized error' do
      expect do
        subject.call(q: query)
      end.to raise_error(Gnews::Client::ConfigError)
    end
  end

  context 'Nil Gnews token' do
    before :each do
      allow(subject).to receive(:config).and_return({
        GNEWS_SEARCH_URL: Rails.application.credentials.config[:GNEWS_SEARCH_URL],
        GNEWS_TOKEN: nil
      })
    end

    it 'raises an Unauthorized error' do
      VCR.use_cassette('gnew_unauthorized_request') do
        expect do
          subject.call(q: query)
        end.to raise_error(Gnews::Client::RequestError,
                           /Get Request: 401 Unauthorized/)
      end
    end
  end
end
