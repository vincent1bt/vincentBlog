# Learn more: http://github.com/javan/whenever
every :day, at: "6am" do
	rake "sitemap:generate"
end