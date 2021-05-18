require 'rails_helper'

describe Gnews::Client do
  context '#call' do
    before :each do
      VCR.use_cassette('gnews_success_query') do
        subject.call(q: 'Colombia')
      end
    end

    it 'should bring the news related with Colombia' do
      expect(subject.response).to be_a Hash
    end
  end

  context 'Unset GNEWS_TOKEN variable' do
    before :each do
      Rails.application.credentials.config[:GNEWS_TOKEN] = nil
    end

    it 'raises an Unauthorized error' do
      VCR.use_cassette('gnew_unauthorized_request') do
        expect do
          subject.call(q: 'Colombia')
        end.to raise_error(Gnews::Client::RequestError, /Get Request: 401 Unauthorized/)
      end
    end
  end
end
