class Admin::DashboardController < ApplicationController
	before_action :authenticate_user!

	def index
		@posts = Post.all
		#get meta tags SEO
    set_meta_tags nofollow: true
	end
end
