class AddColumnOccupationToOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :occupation, :string
  end
end
