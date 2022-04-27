class ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: reviews
  end

  def list
    owner = Owner.find_by(id: params[:id])
    render json: owner.reviews.order(rating: :desc)
  end
end
