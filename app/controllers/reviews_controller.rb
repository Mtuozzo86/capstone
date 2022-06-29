class ReviewsController < ApplicationController
  def create_review
    client = Client.create(name: params[:name])
    owner = Owner.find(params[:id])
    review = Review.create(body: params[:body], client_id: client.id, owner_id: owner.id, rating: params[:rating])

    render json: review
  end

  def index
    reviews = Review.all
    render json: reviews
  end

  def list
    owner = Owner.find_by(id: params[:id])
    render json: owner.reviews.order(rating: :desc)
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end
end
