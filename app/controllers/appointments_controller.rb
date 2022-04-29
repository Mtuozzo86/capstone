class AppointmentsController < ApplicationController
  def index
    days = Appointment.all
    render json: days, except: [:created_at, :updated_at]
  end
  def create
    date = Appointment.create()
  end

  private 
  def date_params
    
  end
end
