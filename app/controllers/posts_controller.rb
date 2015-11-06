class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @posts = Post.all
  end

  def edit
    @categories = Category.all
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
  end

  def create
    @post = @current_user.posts.new(posts_params)
    @post.categories = params[:categories]
    if @post.save
    	redirect_to @post
    	flash[:notice] = "post creado"
    else
    	flash[:alert] = "error al crear post"
    	render :new
    end
  end

  def show
  end

  def destroy
    @post.destroy
    redirect_to admin_dashboard_index_path
  end

  private
    def posts_params
    	params.require(:post).permit(:title, :body, :markup_body, :categories)
    end

    def find_post
    	@post = Post.friendly.find(params[:id])
    end
end
