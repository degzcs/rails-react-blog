class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :image, :content, :description, :title, :slug

  def image
    return object.image if object.image.is_a?(String)
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
