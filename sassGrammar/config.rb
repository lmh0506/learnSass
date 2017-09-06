require 'compass/import-once/activate'
# Require any additional compass plugins here.
environment = :development #:production
# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

# You can select your preferred output style here (can be overridden via the command line):
# 配置压缩风格
output_style = (environment == :development) ? :expanded : :compressed # or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# 是否使用绝对路径
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# 使用行注释
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
