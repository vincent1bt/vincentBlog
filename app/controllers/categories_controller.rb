class CategoriesController < ApplicationController
  before_action :find_category, only: [:show, :edit, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def new
  	@category = Category.new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
    	flash[:notice] = "categoria creada"
    	redirect_to categories_path
    else
    	flash[:alert] = "error creando categoria"
    	render :new
    end
  end

  def index
    @categories = Category.all
    respond_to do |format|
        format.html 
        format.json { render json: @categories }
    end
  end

  def show
  end

  def destroy
    @category.destroy
    redirect_to admin_dashboard_index_path
  end

  private
    def category_params
    	params.require(:category).permit(:name)
    end

    def find_category
    	@category = Category.friendly.find(params[:id])
    end
end
