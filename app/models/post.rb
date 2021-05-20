class Post < ApplicationRecord
  has_one_attached :image, dependent: :destroy
  validates_presence_of :title, :content
  validates_uniqueness_of :title
end
