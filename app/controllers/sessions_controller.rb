class SessionsController < ApplicationController
  def destroy
    session.delete :user_id
    # head :no_content
    render json: { message: "You have logged out" }
  end

  def show
    user = Owner.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create
    user = Owner.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end
end
