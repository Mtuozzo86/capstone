class AppointmentsController < ApplicationController
  def index
    days = Appointment.all
    render json: days, except: [:created_at, :updated_at]
  end

  def create
    date = Appointment.create(date_params)
    render json: date
  end

  private

  def date_params
    params.require(:confirmationData).permit(:booked_time, :date, :customer, :owner_id)
  end
end
