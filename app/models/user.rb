class User < ActiveRecord::Base
  validates :username, uniqueness: { case_sensitive:false }, presence: true, 
            length: { minimum: 3, maximum: 25 }
  VALID_EMAIL_REGEX= /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, uniqueness: { case_sensitive: false}, presence: true,
  format: { with: VALID_EMAIL_REGEX }
end