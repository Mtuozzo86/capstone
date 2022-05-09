class AddTimeFrameColumnToBookedTimes < ActiveRecord::Migration[6.1]
  def change
    add_column :booked_times, :reserved, :string
    add_column :booked_times, :appointment_id, :integer
  end
end
