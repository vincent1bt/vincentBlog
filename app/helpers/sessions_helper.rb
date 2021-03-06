module SessionsHelper
	def log_in(user)
		session[:user_id] = user.id
	end

	def current_user
		@current_user ||= User.find_by(id: session[:user_id])
	end

	def logged_in?
		!current_user.nil?
	end

	def log_out
		session.delete(:user_id)
		@current_user = nil
	end

	def authenticate_user!
		if logged_in?
			return true
		else
			redirect_to root_path, status: :unauthorized
			flash[:alert] = "necesitas inciar sesion"
		end
	end
end
