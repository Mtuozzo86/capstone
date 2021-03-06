class ReviewsController < ApplicationController
  def create_review
    client = Client.create(name: params[:name])
    owner = Owner.find(params[:id])
    review = Review.create(body: params[:body], client_id: client.id, owner_id: owner.id, rating: params[:rating])
    if review.valid?
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    reviews = Review.all
    render json: reviews
  end

  def list
    owner = Owner.find_by(id: params[:id])
    render json: owner.reviews.order(created_at: :desc)
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    head :no_content
  end

  def show
    review = Review.find_by(id: params[:id])
    render json: review
  end

  def update
    review = Review.find_by(id: params[:id])
    review.update(response: params[:reply])
    render json: review
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end
end
