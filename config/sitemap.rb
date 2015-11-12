host "vincentblog.me"

sitemap :site do
  url root_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url sobre_url
end

sitemap_for Post
sitemap_for Category

ping_with "http://#{host}/sitemap.xml" if Rails.env=='production'