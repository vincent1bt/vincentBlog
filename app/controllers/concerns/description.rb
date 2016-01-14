module Description
	extend ActiveSupport::Concern
	def all_categories(text)
	  text = "#{text}"
	  categories = Category.all
	  categories.each do |category|
		  text += "#{category.name}, "
	  end
	  return text
	end

  def count_posts(categories)
    @ar = {}
    categories.each do |category|
      @ar[category.name] = category.posts.count
    end
    return @ar
  end
end