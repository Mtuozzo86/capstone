class Owner < ApplicationRecord
  has_many :owner_addresses
  has_many :appointments
  has_many :reviews
  has_secure_password

  validates :email, uniqueness: { case_sensitive: false },
                    length: { maximum: 105 },
                    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :first_name, presence: true
  validates :last_name, presence: true

  def self.business(name)
    Owner.where("lower(business) Like ?", name.downcase)
  end
end
