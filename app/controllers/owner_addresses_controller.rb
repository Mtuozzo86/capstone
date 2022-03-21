class OwnerAddressesController < ApplicationController
  def index
    addresses = OwnerAddress.all
    render json: addresses
  end

  def create
    owner = Owner.find_by(id: session[:user_id])
    owner.owner_addresses.create(params.require(:address).permit(:street, :city, :state, :zip))
    render json: owner
  end
end
