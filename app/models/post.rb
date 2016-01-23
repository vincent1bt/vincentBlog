class Post < ActiveRecord::Base
  extend FriendlyId
  include PgSearch

  friendly_id :title, use: :slugged
  validates :title, presence: true
  validates :body, presence: true
  belongs_to :user

  validates :description, presence: true
  validates :description, length: { minimum: 100 }

  has_many :has_categories, dependent: :destroy
  has_many :categories, through: :has_categories

  after_create :save_categories

  pg_search_scope :search_full_text,
    against: {
      title: 'A',
      description: 'B'
    }, using: {
      tsearch: { prefix: true }
    }

  def categories=(value)
    @categories = value
  end

  # def self.search_by(params = {})
  #   if params[:search].present?
  #     posts = Post.search(params[:search])
  #   end
  #   posts
  # end

  private
    def save_categories
      if @categories
        @categories.each do |category_id|
          HasCategory.create(category_id: category_id, post_id: self.id)
        end
      end
    end
end
