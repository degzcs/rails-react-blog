class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :image, :content, :description, :title

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
