class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit]

  def index
    @posts = Post.all
  end

  def edit
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(posts_params)
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

  private
    def posts_params
    	params.require(:post).permit(:title, :body)
    end

    def find_post
    	@post = Post.find(params[:id])
    end
end
