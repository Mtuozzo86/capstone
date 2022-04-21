class AppointmentsController < ApplicationController
  def index
    days = Appointment.all
    render json: days
  end
end
