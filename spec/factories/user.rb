FactoryGirl.define do
  factory :user do
    username "juan3bt"
    email { Faker::Internet.email }
    password "0123456789"
    password_confirmation "0123456789"
  end
end
