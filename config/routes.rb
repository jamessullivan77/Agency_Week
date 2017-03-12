Rails.application.routes.draw do
  devise_for :users
  devise_for :models
  resources :homelesspeople, defaults: {format: :json}
  resources :items
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
############################################
  #getting info on the map which is in 
  #homelesspeople#index.
############################################
  get '/map' => 'homelesspeople#index'
  #creating new Homeless people locations based
  #on Lat, Lng and displaying on the map.
  post '/map' => 'homelesspeople#create'

  get '/api/markers/list' => 'homelesspeople#list'

###################################################
#getting
###################################################
  get '/map' => 'items#new'

  get '/feed' => 'feed#index'

  post '/feed' => 'feed#index'
  
#########################################
#getting users and signing them in 
######################################### 
  get '/users' => 'users#index'
  
  get '/users/:id' => 'users#show'
  
  get '/contact' => 'static#index'

#########################################
#editing user porfile
######################################### 
   devise_scope :user do
   get '/profile', to: 'devise/registrations#edit'

###################################################
#displaying the saved users and their info to our 
#backend admin pages, one called database.
###################################################
  get '/database' => 'database#index'

  post '/database' => 'homelesspeople#create'

  post '/database' => 'users#create'

  post '/database' => 'users#sign_up'

end



 end

