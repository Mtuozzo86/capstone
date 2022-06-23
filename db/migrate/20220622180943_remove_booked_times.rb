class RemoveBookedTimes < ActiveRecord::Migration[6.1]
  def change
    drop_table :booked_times
  end
end
