class ItemsController < ApplicationController
def index
end
def create
   @items = Item.new(params[:items])

   # @items = Item.where(item: params[:item_name]).first
   # p params, @items

    if @items.save 
      redirect_to '/feed'
    end
  end

private
  def item_params
    params.require(:items).permit(:item_name)
  
    end

end




# <!-- method="/feed" action="POST" -->


# try items.find item_name next