require 'route_translator'
RouteTranslator.config do |config|
	config.force_locale = true
  config.generate_unlocalized_routes = true
	config.disable_fallback = true
  config.available_locales = ["es"]
end
