class AddOwnerIdToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :owner_id, :integer
  end
end
