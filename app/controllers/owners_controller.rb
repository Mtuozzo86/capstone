class OwnersController < ApplicationController
  def index
    owners = Owner.all
    render json: owners
  end
end
