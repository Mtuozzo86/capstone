class AddReviewsToClients < ActiveRecord::Migration[6.1]
  def change
    add_column :clients, :reviews, :string
  end
end
