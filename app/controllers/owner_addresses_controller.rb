class OwnerAddressesController < ApplicationController
  def index
    @addresses = OwnerAddress.all
    render json: addresses
  end

  # def create
  #   owner = Owner.find_by(id: session[:user_id])
  #   owner.owner_addresses.create(params.require(:address).permit(:street, :city, :state, :zip))
  #   render json: owner
  # end

  def create
    owner = Owner.find_by(id: session[:user_id])
    address = OwnerAddress.create(params.require(:address).permit(:street, :city, :state, :zip))
    owner.owner_addresses << address
    render json: address

  end
end
