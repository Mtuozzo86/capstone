class AddBusinessColumnToOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :business, :string
  end
end
