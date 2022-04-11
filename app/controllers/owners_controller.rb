class OwnersController < ApplicationController
  def show
    owner = Owner.find_by(id: params[:id])
    render json: owner
  end

  def update
    # byebug
    owner = Owner.find_by(id: params[:id])
    owner.update(profile_params)
    render json: owner
  end

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
    params.require(:owner).permit(:email, :password, :password_confirmation, :first_name, :last_name)
  end

  def profile_params
    params.permit(:biography, :business, :image)
  end

  def record_not_found
    render plain: "Nothing found", status: 404
  end
end
