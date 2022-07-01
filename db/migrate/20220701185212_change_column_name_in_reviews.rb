class ChangeColumnNameInReviews < ActiveRecord::Migration[6.1]
  def change
    rename_column :reviews, :name, :response
  end
end
