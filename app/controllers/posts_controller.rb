class PostsController < ApplicationController
  include Description
  before_action :find_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @posts = Post.all
    cat = Category.all
    #gem meta_tags SEO
    set_meta_tags canonical: "http://vincentblog.me/posts"
    text = "Tutoriales, trucos y más sobre programación en español. todo sobre: "
    set_meta_tags description: all_categories(text)
  end

  def edit
    @categories = Category.all
    #gem meta_tags SEO
    set_meta_tags noindex: true
  end

  def update
    if @post.update(posts_params)
      redirect_to @post
    else
      flash[:alert] = "error al editar"
      render :edit
    end
  end

  def new
    @post = Post.new
    @categories = Category.all
    #gem meta_tags SEO
    set_meta_tags noindex: true
  end

  def create
    @post = @current_user.posts.new(posts_params)
    @post.categories = params[:categories]

    if @post.save
    	redirect_to admin_dashboard_index_path
    	flash[:notice] = "post creado"
    else
    	flash[:alert] = "error al crear post #{@post.errors.full_messages}"
      @categories = Category.all
    	render :new
    end
  end

  def show
    #gem meta_tags SEO
    set_meta_tags description: @post.description
  end

  def destroy
    @post.destroy
    redirect_to admin_dashboard_index_path
  end

  private
    def posts_params
    	params.require(:post).permit(:title, :body, :markup_body, :categories, :description)
    end

    def find_post
    	@post = Post.friendly.find(params[:id])
    end
end
