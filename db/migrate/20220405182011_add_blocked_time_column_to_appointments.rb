class AddBlockedTimeColumnToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :booked_time, :string
  end
end