class ItemController < ApplicationController
def create
  @items = Item.new 
  redirect_to '/feed'
end
end
