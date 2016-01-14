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
      end
    else
    	flash[:alert] = "error creando categoria"
    	render :new
    end
  end

  def index
    @categories = Category.all
    # @category = Category.count('id', :distinct => true)
    count_posts(@categories)
    text = "Tenemos categorías sobre: "
    set_meta_tags description: all_categories(text)
    respond_to do |format|
        format.html 
        format.json { render json: @categories }
    end
  end

  def show
    #get meta tags SEO
    set_meta_tags canonical: "http://vincentblog.me/posts"
  end

  def destroy
    @category.destroy
    #redirect_to admin_dashboard_index_path
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
