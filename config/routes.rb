Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'posts/index'
      post 'posts/create'
      get 'posts/:id', to: 'posts#show'
      delete 'posts/destroy', to: 'posts#destroy'
    end
  end
  get '/*path' => 'homepage#index'
  root 'homepage#index'
end
