class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :created_at, :client
  belongs_to :client
  belongs_to :owner
end
