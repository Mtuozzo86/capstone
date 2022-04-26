class RemoveColumnOccupationFromOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :owners, :occupation, :string
  end
end
