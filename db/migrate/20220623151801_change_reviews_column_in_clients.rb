class ChangeReviewsColumnInClients < ActiveRecord::Migration[6.1]
  def change
    rename_column :clients, :reviews, :review_body
  end
end
