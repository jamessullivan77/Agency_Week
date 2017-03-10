class ItemsController < ApplicationController
def create
   @items = Item.new 
    if @items.save 
      redirect_to '/feed'
    end
  end

private
  def item_params
    params.require(:user).permit(:item_name)
    redirect_to '/feed'
    end

end



