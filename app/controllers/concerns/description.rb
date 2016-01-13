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
end