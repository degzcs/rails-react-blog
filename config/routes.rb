Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'posts/index/', to: 'posts#index'
      post 'posts/create', to: 'posts#create'
      get 'posts/show/:slug', to: 'posts#show'
      delete 'posts/destroy', to: 'posts#destroy'
    end
  end
  get '/' => 'homepage#index'
  get '/blog' => 'homepage#index'
  get '/blog/:id' => 'homepage#index'
  root 'homepage#index'
end
