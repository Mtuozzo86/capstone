class CreateOwnerAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :owner_addresses do |t|
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.integer :owner_id
      t.timestamps
    end
  end
end
