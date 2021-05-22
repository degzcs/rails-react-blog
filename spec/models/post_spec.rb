require 'rails_helper'

describe Post, type: :model do

  context '#set_slug'do
    let(:post) do
      Post.new(title: title,
                 content: content,
                 description: description)
    end
    let(:title) { 'new, &title' }
    let(:content) { 'this is the content' }
    let(:description) { 'this a shor description' }

    xit 'should set the slug attribute' do
      expect(post.slug).to eq 'new-title'
    end
  end
end
