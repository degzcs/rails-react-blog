require 'rails_helper'

describe Gnews::Post do
  context 'set fields' do
    let(:title) { 'news-title' }
    let(:content) { 'this is the content of the remote post' }
    let(:image) { 'http://image.jpg' }

    subject { Gnews::Post.new(title: title,
                              content: content,
                              image: image) }

    its(:title) { is_expected.to eq title }
    its(:content) { is_expected.to eq content }
    its(:image) { is_expected.to eq image }
  end
end
