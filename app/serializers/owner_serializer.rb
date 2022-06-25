class OwnerSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :first_name, :last_name, :image, :business, :occupation, :phone, :website, :email, :biography, :owner_addresses, :appointments
  has_many :reviews
  has_many :clients, through: :reviews

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  def image_url
    url_for(object.image)
  end
end
