class Owner < ApplicationRecord
  has_many :owner_addresses
  has_secure_password

  validates :email, presence: true, uniqueness: true
end
