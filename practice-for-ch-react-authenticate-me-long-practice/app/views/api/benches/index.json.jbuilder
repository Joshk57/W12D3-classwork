json.set! :benches do
    @benches.each do |bench|
        bench.set! bench.id do
            json.id bench.id
            json.title bench.title
            json.description bench.description
            json.price bench.price
            json.seating bench.seating
            json.lat bench.lat
            json.lng bench.lng
            json.created_at bench.created_at
            json.updated_at bench.updated_at
        end
    end
end