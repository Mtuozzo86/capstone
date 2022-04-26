class ChangeOccupationInOwners < ActiveRecord::Migration[6.1]
  def change
    change_column :owners, :occupation, :string, null: false
  end
end
