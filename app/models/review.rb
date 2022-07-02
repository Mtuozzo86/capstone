class Review < ApplicationRecord
  belongs_to :owner
  belongs_to :client

  validates :body, presence: true, message: "Can't be empty"
  # validates_associated :client
  # validate :client_review

  # def client_review
  #   if self.client === nil
  #     errors.add(:base, "Please leave your name") if self.client.blank?
  #   end
  # end
end
