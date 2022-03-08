class AddEmailToOwner < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :email, :string
    add_column :owners, :website, :string
  end
end
