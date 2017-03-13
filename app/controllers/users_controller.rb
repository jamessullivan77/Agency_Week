class UsersController < ApplicationController
	def index
		@users = User.all
		# @user = current_user
	end
	def create
		@users = User.new(user_params)
	end
	def new
		@users = User.all
		@users = User.new(user_params)
	end

end
