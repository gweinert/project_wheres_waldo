class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :character_name
      t.integer :x_position
      t.integer :y_position
      t.timestamps null: false
    end
  end
end
