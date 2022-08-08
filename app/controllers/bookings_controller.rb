class BookingsController < ApplicationController
    
    def index
    bookings = Booking.all
    render json: bookings
    end

    def show
        booking = Booking.find(params[:id])
        render json: booking
    end

    def create

    end

    private

    def booking_params
        params.require(:booking).permit(:title, :time_meeting, :start_date, :end_date, :start_time, :end_time)
    end
end
