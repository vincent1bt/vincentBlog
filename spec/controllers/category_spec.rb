require 'rails_helper'

RSpec.describe CategoriesController, type: :controller do
  let(:new_post) {
    create(:post)
  }

  describe "POST #create" do
    context "with valid params " do

      let(:valid_category) {
        {
          name: "ruby",
          post: new_post
        }
      }

      before do
        subject.send(:log_in, new_post.user)
      end

      it "create a new category" do
        expect{
          post :create, { category: valid_category }
        }.to change(Category, :count).by(1)
      end
    end

    context "with invalid params" do

    end
  end
end
