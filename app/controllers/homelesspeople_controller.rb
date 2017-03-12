class HomelesspeopleController < ApplicationController
  # before_action only: [:index, :create]
  before_action :authenticate_user!
  # respond_to :html, :js, :erb
  def index
  @users = User.all
  @items = Item.new 
 

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

       @items = Item.each(params[:item_name])
     end
  end

  def list 
    
  render :json => Homelesspeople.all

  end 
end
