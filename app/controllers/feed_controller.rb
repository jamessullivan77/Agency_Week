class FeedController < ApplicationController
  before_action :authenticate_user!
def index
  @items = Item.all
  @users = User.all
  # @user = User.find params(:current_user_id)
  @homelesspeople = Homelesspeople.all
  # @items_name = Item(params[:items_name])

end
def show
   # @items = Item.find(params[:items])

end

end


  
