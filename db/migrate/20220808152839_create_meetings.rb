class CreateMeetings < ActiveRecord::Migration[6.1]
  def change
    create_table :meetings do |t|
      t.string :title
      t.datetime :start_date
      t.datetime :end_date
      t.time :start_time
      t.time :end_time
      t.string :time_meeting

      t.timestamps
    end
  end
end
