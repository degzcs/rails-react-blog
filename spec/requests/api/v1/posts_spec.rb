require 'rails_helper'

describe "Api::V1::Posts", type: :request do
  let(:title) { 'this is a title' }
  let(:content) { 'article content' }
  let(:description) { 'this is a cool description' }
  let(:image) { nil }
  let(:attrs) do
    {
      title: title,
      content: content,
      description: description,
      image: image
    }
    end

  describe "GET /index" do
    it "returns http success" do
      VCR.use_cassette('gnews_success_query2') do
        get "/api/v1/posts/index"
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "POST /create" do
    let(:image) { fixture_file_upload(Rails.root.join('spec', 'fixtures', 'images', '1.jpg'), 'image/jpg') }
    it "returns http success" do
      expect {
        post "/api/v1/posts/create", params: attrs
      }.to change(ActiveStorage::Attachment, :count).by(1)
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT /update" do
    let(:post) { Post.create(attrs) }
    let(:image) { fixture_file_upload(Rails.root.join('spec', 'fixtures', 'images', '2.jpg'), 'image/jpg') }
    it "returns http success" do
      expect {
        put"/api/v1/posts/update/#{post.slug}", params: attrs
      }.to change(ActiveStorage::Attachment, :count).by(1)
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show (local post)" do
    let(:post) { Post.create(attrs) }

    it "returns http success" do
      VCR.use_cassette('gnews_success_query2') do
        get "/api/v1/posts/show/#{post.slug}"
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "GET /show (remote post)" do
    let(:slug) { 'gymnast-nastia-liukin-watches-her-hair-grow-in-rainfall-shower' }
    it "returns http success" do
      VCR.use_cassette('gnews_success_query2') do
        get "/api/v1/posts/show/#{slug}"
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      delete "/api/v1/posts/destroy"
      expect(response).to have_http_status(:success)
    end
  end
end

