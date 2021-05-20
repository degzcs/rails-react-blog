Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'posts/index/', to: 'posts#index'
      post 'posts/create', to: 'posts#create'
      get 'posts/show/:id', to: 'posts#show'
      delete 'posts/destroy', to: 'posts#destroy'
    end
  end
  get '/' => 'homepage#index'
  get '/posts' => 'homepage#index'
  root 'homepage#index'
end
