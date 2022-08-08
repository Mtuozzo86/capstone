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
        booking = Booking.create!(booking_params)
        render json: booking
    end

    def destroy
        booking = Booking.find(params[:id])
        booking.destroy
        head :no_content
    end

    private

    def booking_params
        params.require(:booking).permit(:name, :date, :time, :email, :message)
    end
end
