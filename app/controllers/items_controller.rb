class ItemsController < ApplicationController
def index
end
def create
  @item = Item.find_by(item_name: params[:item][:item_name])
  # if we didn't find the item, let's create it 
  unless @item
    @item = Item.create(
      item_name: params[:item][:item_name]
    )
  end
  # now we're guaranteed of having a valid item (unless the db
  # blew up, in which case we have bigger problems)
  @homeless = Homelessperson.find(params[:homeless_id])

  if @homeless 
    # in theory, this should add the item to the homeless
    # people items list
    @homeless.items << @item
  end
   # @items = Item.where(item: params[:item_name]).first
   # p params, @items

  if @homeless.id && @item && @item.id 
      redirect_to '/feed'
  else 
    flash[:error] = "Big Problems"
    redirect_to '/'
  end
end

private
  def item_params
    params.require(:items).permit(:item_name)
  
    end

end




# <!-- method="/feed" action="POST" -->


# try items.find item_name next