class MeetingsController < ApplicationController
    def index
        meetings = Meeting.all
        render json: meetings
    end
end
