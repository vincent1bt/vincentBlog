FactoryGirl.define do
  factory :post do
    title "Hola mundo"
    body "Este post es sobre javascript"
    description "qwertyuiopasdfghjkl;zxcvbnm1234567890"
    association :user, factory: :user
  end
end
