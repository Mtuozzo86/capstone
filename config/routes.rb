Rails.application.routes.draw do
  get "/business/:website", to: "business#show"
  # patch '/owners/:id', to: "business#paramaterize"
  patch "owners/:id/remove", to: "owners#remove_image"
  resources :owners
  resources :owner_addresses
  resources :appointments
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # SESSIONS
  post "/login", to: "sessions#create"
  get "/me", to: "sessions#show"
  delete "/logout", to: "sessions#destroy"
end
