# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( hl.js )
Rails.application.config.assets.precompile += %w( post.js )
Rails.application.config.assets.precompile += %w( postsNew.js )
Rails.application.config.assets.precompile += %w( react.js )
Rails.application.config.assets.precompile += %w( sitewide.js )

Rails.application.config.assets.precompile += %w( main.sass )
Rails.application.config.assets.precompile += %w( post.sass )
Rails.application.config.assets.precompile += %w( dashboard.sass )
