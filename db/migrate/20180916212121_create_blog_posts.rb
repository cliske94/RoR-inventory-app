class CreateBlogPosts < ActiveRecord::Migration
  def change
    create_table :blog_posts do |t|
      t.string :name
      t.text :content
      t.datetime :date

      t.timestamps null: false
    end
  end
end
