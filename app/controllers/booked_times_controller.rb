class BookedTimesController < ApplicationController
  def index
    times = BookedTime.all
    render json: times
  end
end
