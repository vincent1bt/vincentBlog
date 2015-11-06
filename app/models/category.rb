class Category < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name
  has_many :has_categories
  has_many :posts, through: :has_categories
end
