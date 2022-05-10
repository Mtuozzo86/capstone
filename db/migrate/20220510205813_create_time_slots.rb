class CreateTimeSlots < ActiveRecord::Migration[6.1]
  def change
    create_table :time_slots do |t|
t.string :time
t.integer :appointment_id
      t.timestamps
    end
  end
end
