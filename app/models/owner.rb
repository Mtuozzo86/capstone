class Owner < ApplicationRecord
  has_many :owner_addresses
  has_secure_password
end
