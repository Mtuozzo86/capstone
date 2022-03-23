class BusinessController < ApplicationController

  
  def business
    owner = Owner.find_by(business: params[:business])
    if owner
    render json: owner
    else
    render json: {error: "No page found"}, status: :not_found
    end
    
  end


  

end
