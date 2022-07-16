class Owner < ApplicationRecord
  has_many :owner_addresses
  has_many :appointments
  has_many :reviews, dependent: :destroy
  has_many :clients, through: :reviews
  has_one_attached :image
  has_secure_password

  validates :email, uniqueness: { case_sensitive: false },
                    length: { maximum: 105 },
                    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :first_name, presence: true
  validates :last_name, presence: true

  def self.business(name)
    Owner.where("lower(business) Like ?", name.downcase)
  end

  def remove_website_and_business
    if self.business = ""
      self.website = ""
    end
  end

  before_create do |owner|
    owner.business = ""
    owner.website = ""
    owner.occupation = ""
  end
end
