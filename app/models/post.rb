class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged
  validates :title, presence: true
  validates :body, presence: true
  belongs_to :user

  has_many :has_categories, dependent: :destroy
  has_many :categories, through: :has_categories

  after_create :save_categories

  def categories=(value)
    @categories = value
  end

  private
    def save_categories
      if @categories
        @categories.each do |category_id|
          HasCategory.create(category_id: category_id, post_id: self.id)
        end
      end
    end
end
