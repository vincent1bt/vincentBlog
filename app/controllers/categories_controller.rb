class CategoriesController < ApplicationController
  before_action :find_category, only: [:show, :edit, :destroy]

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
  end


  private
    def category_params
    	params.require(:category).permit(:name)
    end

    def find_category
    	@category = Category.find(params[:id])
    end
end
