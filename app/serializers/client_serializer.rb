class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :reviews
end
