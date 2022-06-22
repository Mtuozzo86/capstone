class Appointment < ApplicationRecord
  belongs_to :owner
  has_many :time_slots
end
