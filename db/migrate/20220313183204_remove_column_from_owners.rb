class RemoveColumnFromOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :owners, :name, :string
  end
end
