class User < ActiveRecord::Base
  before_save { email.downcase }
  validates :username, presence: true, length: { maximum:25 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true,
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  validates :password, presence: true, length: { minimum: 8 }
  has_secure_password
end
