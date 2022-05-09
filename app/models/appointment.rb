class Appointment < ApplicationRecord
  belongs_to :owner
  has_many :booked_times
end
