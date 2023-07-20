json.bench do
    json.id @bench.id
    json.title @bench.title
    json.description @bench.description
    json.price @ench.price
    json.seating @bench.seating
    json.lat @bench.lat
    json.lng @bench.lng
    json.created_at @bench.created_at
    json.updated_at @bench.updated_at
end