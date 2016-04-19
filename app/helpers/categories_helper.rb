module CategoriesHelper
  def count_posts(category)
    category.posts.count
  end
end
