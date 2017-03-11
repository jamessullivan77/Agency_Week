class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :homelesspeople



#   def to_param
#   permalink
#   end

# private

#   def create_permalink
#     self.permalink = current_user.email
#   end
# end

end
