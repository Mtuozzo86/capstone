class Review < ApplicationRecord
  belongs_to :owner
  belongs_to :client

  validates :body, presence: { message: "must be given please" }
  validates :client_id, presence: { message: "name please" }
  validates_associated :client, presence: true
  validate :client_review_name

  def client_review_name
    if self.client === nil
      errors.add(:base, "Please leave your name") if self.client.blank?
    end
  end
end
