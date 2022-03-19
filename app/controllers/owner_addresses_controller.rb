class OwnerAddressesController < ApplicationController

    def index
        addresses = OwnerAddress.all
        render json: addresses
    end
end
