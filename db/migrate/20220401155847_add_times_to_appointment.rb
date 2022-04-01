class AddTimesToAppointment < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :date, :string
  end
end
