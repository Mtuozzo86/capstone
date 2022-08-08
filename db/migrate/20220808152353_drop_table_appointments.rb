class DropTableAppointments < ActiveRecord::Migration[6.1]
  def change
    drop_table :appointments
  end
end
