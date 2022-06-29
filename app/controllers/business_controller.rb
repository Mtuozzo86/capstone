class BusinessController < ApplicationController
  def show
    owner = Owner.find_by(website: params[:website])
    if owner
      render json: owner
    else
      render json: { error: "No page found" }, status: :not_found
    end
  end
end
