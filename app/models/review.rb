class Review < ApplicationRecord
  belongs_to :owner
  belongs_to :client

  validates :body, presence: true
  validates_associated :client
end
