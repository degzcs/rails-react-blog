Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get  'posts/index', to: 'posts#index'
      post 'posts/create', to: 'posts#create'
      put  'posts/update', to: 'posts#update'
      get  'posts/show/:slug', to: 'posts#show'
      delete 'posts/destroy', to: 'posts#destroy'
    end
  end
  get '/' => 'homepage#index'
  get '/blog' => 'homepage#index'
  get '/blog/:id' => 'homepage#index'
  get '/blog/new-post' => 'homepage#index'
  get '/blog/update-post/:slug' => 'homepage#index'
  root 'homepage#index'
end
