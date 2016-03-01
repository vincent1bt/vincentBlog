require 'rails_helper'

RSpec.describe PostsController, type: :controller do

  let(:new_post) {
    create(:post)
  }

  let(:valid_post) {
    {
      title: "Hola mundo",
      body: "Este post es sobre javascript",
      description: "qwertyuiopasdfghjkl;zxcvbnm1234567890",
      user: new_post.user
    }
  }

  describe "GET #index" do
    it "return http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    before :each do
      get :show, { id: new_post.to_param }
    end

    it "get the correct post" do
      expect(assigns(:post)).to eq(new_post)
    end

    it "return http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      before do
        subject.send(:log_in, new_post.user)
      end

      it "creates a new post" do
        expect {
          post :create, { post: valid_post }
        }.to change(Post, :count).by(1)
      end

      it "redirect_to admin_dashboard_index_path" do
        post :create, { post: valid_post }
        expect(response).to redirect_to("/admin/dashboard")
      end
    end

    context "with invalid params" do
      let(:invalid_post) {
        { user_id: new_post.user.id }
      }

      before do
        subject.send(:log_in, new_post.user)
      end

      before :each do
        post :create, { post: invalid_post }
      end

      it "return status 400" do
        expect(response).to have_http_status(400)
      end

      it "re-renders the 'new' template" do
        expect(response).to render_template("new")
      end
    end
  end

  describe "PUT #update" do
    let(:update_post) {
      {
        title: "Nuevo titulo actualizado",
      }
    }
    context "whit valid params" do
      before do
        subject.send(:log_in, new_post.user)
      end

      before :each do
        put :update, { id: new_post.to_param, post: update_post }
      end

      it "return status 200" do
        expect(response).to redirect_to(post_path(new_post))
      end

      it "update the title of the post" do
        new_post.reload
        expect(new_post.title).to eq("Nuevo titulo actualizado")
      end
    end
  end
end
