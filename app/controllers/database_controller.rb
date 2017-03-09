class DatabaseController < ApplicationController
def index
@users = User.all
# @users = User.new 
# @users = User.create 
@homelesspeople = Homelesspeople.all
# @homelesspeople = Homelesspeople.new
# @homelesspeople = Homelesspeople.create

  end 
end
