class DropBusinesses < ActiveRecord::Migration[6.1]
  def change
    drop_table :businesses
  end
end
