class MeetingsController < ApplicationController
    def index
        meetings = Meeting.all
        render json: meetings
    end

    def show
        meeting = Meeting.find(params[:id])
        render json: meeting
    end

    def create
        meeting = Meeting.create!(meeting_params)
        render json: meeting
    end

    def destroy
        meeting = Meeting.find(params[:id])
        meeting.destroy
        head :no_content
    end

    private 
    def meeting_params
        params.require(:meeting).permit(:title, :time_meeting, :start_date, :end_date, :start_time, :end_time)
    end

end
