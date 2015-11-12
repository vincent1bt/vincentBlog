class Admin::SessionsController < ApplicationController
  def new
    #gem meta_tags SEO
    set_meta_tags noindex: true
  end

  def create
  	user = User.find_by(email: params[:session][:email].downcase)
  	if user && user.authenticate(params[:session][:password])
  		log_in(user)
  		flash[:notice] = "welcome"
  		redirect_to admin_dashboard_index_path
  	else
  		flash.now[:alert] = 'invalid'
  		render :new
  	end
  end

  def destroy
  	log_out
  	redirect_to root_path
  end
end
