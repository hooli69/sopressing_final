class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # custom 404
  unless Rails.application.config.consider_all_requests_local
    rescue_from ActiveRecord::RecordNotFound,
                ActionController::RoutingError,
                ActionController::UnknownController,
                Exception,
                ActionController::MethodNotAllowed do |excption|

      # Put loggers here, if desired.

      redirect_to root_path
    end
  end
end