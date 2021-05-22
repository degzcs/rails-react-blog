class Post < ApplicationRecord
  has_one_attached :image, dependent: :destroy
  validates_presence_of :title, :content
  validates_uniqueness_of :title

  before_validation :set_slug

  private

  def set_slug
    slug = title.downcase.strip.gsub(' ', '-').gsub(/[^0-9a-z- ]/i, '')
  end
end
