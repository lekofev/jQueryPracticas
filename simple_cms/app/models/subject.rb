class Subject < ActiveRecord::Base

	#has_one :page
	has_many :pages
	#ahora en plural

	scope :visible, -> {where(:visible => true)}
	scope :invisible, -> {where(:visible => false)}
	scope :search, lambda{|query| where(["name LIKE ?","%#{query}%"])}
	scope :search, lambda{|first, last| where(:first_name=>first, :last_name=>last)}
end
