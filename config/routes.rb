Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get  'posts/index', to: 'posts#index'
      post 'posts/create', to: 'posts#create'
      put  'posts/update/:slug', to: 'posts#update'
      get  'posts/show/:slug', to: 'posts#show'
      delete 'posts/destroy/:slug', to: 'posts#destroy'
    end
  end
  get '/' => 'single_page#index'
  get '/blog' => 'single_page#index'
  get '/blog/:id' => 'single_page#index'
  get '/blog/new-post' => 'single_page#index'
  get '/blog/update-post/:slug' => 'single_page#index'
  root 'single_page#index'
end
