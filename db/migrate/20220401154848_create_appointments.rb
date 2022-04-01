class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :customer
      t.integer :owner_id

      t.timestamps
    end
  end
end
