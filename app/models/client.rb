class Client < ApplicationRecord
  has_many :reviews
  has_many :owners, through: :reviews

  validates :name, presence: true
end
