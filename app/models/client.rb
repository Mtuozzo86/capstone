class Client < ApplicationRecord
  has_many :reviews
  has_many :owners, through: :reviews
end
