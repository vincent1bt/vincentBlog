module InlineHelper
  def read_file_contents(stylesheet)
    if %w(test development).include?(Rails.env.to_s)
      # if we're running the full asset pipeline,
      # just grab the body of the final output
      stylesheet.source
    else
      # in a production-like environment, read the
      # fingerprinted and compiled file
      File.read(File.join(Rails.root, 'public', 'assets', stylesheet.digest_path))
    end
  end

  def inline_file(asset_path)
    file = Rails.application.assets.find_asset(asset_path)
    file.nil? ? '' : read_file_contents(file)
  end

  def inline_js(asset_path)
    "<script>#{inline_file asset_path}</script>"
  end

  def inline_css(asset_path)
    "<style>#{inline_file asset_path}</style>"
  end
end
