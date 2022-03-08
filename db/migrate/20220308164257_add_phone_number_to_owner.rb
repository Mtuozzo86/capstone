class AddPhoneNumberToOwner < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :phone, :integer
  end
end
