class HomelesspeopleController < ApplicationController
  # before_action only: [:index, :create]
  before_action :authenticate_user!
  # respond_to :html, :js, :erb
  def index
  @users = User.all
  @items = Item.new 
  

  end
  def new
    @homeless = Homelessperson.new
  end
  
  def create
    p params
    @homeless = Homelessperson.create(
         user_id: current_user.id,
         lat: params[:x],
         long: params[:y]
       )
    
     respond_to do |format|
       format.json { render json: @homeless }

   @items = Item.where(item_name: params[:item_name])


     end
  end

  def list 
    
  render :json => Homelessperson.all

  end 
end


    