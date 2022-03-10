class Owner < ApplicationRecord
  has_many :owner_addresses
  has_secure_password

  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    length: { maximum: 105 },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
end
