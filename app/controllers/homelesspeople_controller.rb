class HomelesspeopleController < ApplicationController
  # before_action only: [:index, :create]
  before_action :authenticate_user!
  # respond_to :html, :js, :erb
  def index
  @users = User.all
  end
  def new
    @homeless = Homelesspeople.new
  end
  
  def create
    p params
    @homeless = Homelesspeople.create(
         user_id: current_user.id,
         lat: params[:x],
         long: params[:y]
       )
     respond_to do |format|
       format.json { render json: @homeless }
     end
     # redirect_to :root
   end
end
