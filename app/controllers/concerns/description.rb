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

  def meta_pagination(num, url)
    if !num.nil? and num > 1
      set_meta_tags prev: "#{url}?page=#{num - 1}"
      set_meta_tags next: "#{url}?page=#{num + 1}"
    else
      set_meta_tags next: "#{url}?page=2"
    end
  end
end
