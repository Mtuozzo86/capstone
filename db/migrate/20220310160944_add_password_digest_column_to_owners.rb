class AddPasswordDigestColumnToOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :password_digest, :string
  end
end
