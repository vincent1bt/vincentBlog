require 'rails_helper'

RSpec.describe "POST /posts" do
  let(:post_params) {
    post = attributes_for(:post)
  }

  before :each do
    post "/posts", post_params
  end

  it "create a post" do
    expect(response.status).to eq 302
  end

  it "change num" do
    expect{
      post "/posts", post_params
    }.to change(Post, :count).by(1)
  end
end
