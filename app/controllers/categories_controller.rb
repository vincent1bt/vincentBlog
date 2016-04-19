class CategoriesController < ApplicationController
  include Description
  before_action :find_category, only: [:show, :edit, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def new
  	@category = Category.new
    #gem meta_tags SEO
    set_meta_tags noindex: true
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      respond_to do |format|
          format.json { render json: @category }
          format.html { redirect_to @category, status: :success }
      end
    else
    	flash[:alert] = "Error creando categoria #{@category.errors.full_messages}"
    	render :new
    end
  end

  def index
    @categories = Category.all
    #count_posts(@categories)
    text = "Tenemos categorías sobre: "
    set_meta_tags description: all_categories(text)

    respond_to do |format|
        format.html
        format.json
    end
  end

  def show
    #get meta tags SEO
    set_meta_tags canonical: "http://vincentblog.me/posts"
  end

  def destroy
    @category.destroy
    render json: { message: "Categoria eliminada" }, status: :ok
  end

  private
    def category_params
    	params.require(:category).permit(:name)
    end

    def find_category
    	@category = Category.friendly.find(params[:id])
    end
end
