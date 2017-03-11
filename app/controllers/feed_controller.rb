class FeedController < ApplicationController
  before_action :authenticate_user!
def index
  @items = Item.all
  @users = User.all
end
end
