class Bench < ApplicationRecord
    validates :title, :description, :lat, :lng, presence: true
    validates :price, presence: true, numericality: { in: 10..1000 }
    validates :seating, presence: true
end
