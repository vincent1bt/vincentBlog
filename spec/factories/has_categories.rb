FactoryGirl.define do
  factory :has_category do
    association :category, factory: :category
    association :post, factory: :post
  end
end
