class UsersController < ApplicationController
  before_action :find_user, only: [:edit, :show]

  def index
  end

  def edit
  end

  def show
  end

  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
  		redirect_to root_path
  		flash[:notice] = "Usuario creado"
  	else
  		flash[:alert] = 'Error al crear usuario'
  		render :new
  	end
  end

  private
    def user_params
    	params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

    def find_user
    	@user = User.find(params[:id])
    end
end
