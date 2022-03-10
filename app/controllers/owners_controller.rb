class OwnersController < ApplicationController
  def index
    owners = Owner.all
    render json: owners
  end

  def create
    owner = Owner.create(owner_params)
    if owner.valid?
      render json: owner
    else
      render json: { error: owner.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def owner_params
    params.require(:owner).permit(:email, :password, :password_confirmation)
  end
end
