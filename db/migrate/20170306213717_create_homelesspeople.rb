class CreateHomelesspeople < ActiveRecord::Migration[5.0]
  def change
    create_table :homelesspeople do |t|
    	t.integer :street_number
    	t.string :steet_name
    	# t.integer :homeless_id
    	t.integer :user_id
    	t.float :lat
    	t.float :long
    	t.string :institute_id


  	t.timestamps
    end 
  end
end



