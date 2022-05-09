class CreateBookedTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :booked_times do |t|

      t.timestamps
    end
  end
end
