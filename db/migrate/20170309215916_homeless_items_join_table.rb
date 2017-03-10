class HomelessItemsJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_join_table :homelesspeople, :items do |t|
      # t.index [:homeless_id, :item_id]
      # t.index [:item_id, :homeless_id]
    end
  end
end
