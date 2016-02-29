module ApplicationHelper
	def title(page_title)
		page_title.empty? ? "Vicente Rodríguez Blog: Tutoriales de programación y más." : page_title
	end

  def description(desc)
    default = "Tutoriales, trucos y más sobre programación en español."
    desc.nil? ? default : desc
  end

  def url(url)
    default = "http://res.cloudinary.com/vincent1bt/image/upload/v1452704935/mac_lsiaue.jpg"
    url.nil? ? default : url
  end
end
