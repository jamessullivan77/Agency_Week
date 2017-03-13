class UsersController < ApplicationController
	def index
		@users = User.all
		# @user = current_user
	end
	def create
		@users = User.new(user_params)
		 @user = User.create( user_params )
	end
	def new
		@users = User.all
		@users = User.new(user_params)
	end
	# def show
 #  		@user = User.find_by_permalink(params[:permalink])
	# end
	# def edit

	# end
	private

# Use strong_parameters for attribute whitelisting
# Be sure to update your create() and update() controller methods.

def user_params
  params.require(:user).permit(:avatar)
end
end
