module ApplicationHelper
	def title(page_title)
		page_title.empty? ? "Vicente Rodríguez Blog: Tutoriales de programación y más" : page_title
	end
end
