class ChangeOwnersPhoneColumnToBigInt < ActiveRecord::Migration[6.1]
  def change
    change_column :owners, :phone, :bigint
  end
end
