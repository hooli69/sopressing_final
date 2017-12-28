class HomeController < ApplicationController

	def index
		if defined? @distance || defined? @items || defined? @basket_price || defined? @pressing_sorted
			@distance = []
			@items = []
			@basket_price = []
			@pressing_sorted = []
			@@locations = []
			@@search = []
			@@popo = []
		else
			redirect_to :home_index
		end

		if params[:search].present?
			if params[:search].empty?
				redirect_to :home_index
			else
				locations = Pressing.near(params[:search],0.5, {order: ""})
				@@locations = locations.pluck(:id, :name, :address, :phone, :latitude, :longitude)
				@@search = Geocoder.coordinates(params[:search])
				redirect_to :home_select
			end
		else
			
		end
		

	end

	def select
	end

	def calculate
		@@popo = params[:data_infos]
		redirect_to :home_result
	end

	def result
		@distance = @@search
		@items = Item.pluck(:id, :price, :pressing_id)
		result = SortPressing.new(@@popo, @items, @@locations).perform
		@basket_price = result[0]
		@pressing_sorted = result[1].reject(&:blank?)	

	end

end