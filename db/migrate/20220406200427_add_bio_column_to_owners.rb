class AddBioColumnToOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :biography, :text
  end
end
