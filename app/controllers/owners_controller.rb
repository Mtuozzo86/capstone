class OwnersController < ApplicationController
  def index
    owners = Owner.all
    render json: owners
  end

  def create
    owner = Owner.create(owner_params)
    render json: owner
  end

  private

  def owner_params
    params.require(:owner).permit(:name, :email, :phone, :website, :occupation)
  end
end
