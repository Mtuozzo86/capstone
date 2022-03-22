class BusinessController < ApplicationController
  def show
    owner = Owner.find_by(business: params[:business])
    render json: owner
  end
end
