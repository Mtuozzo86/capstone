# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding"
mike = Owner.create(first_name: "Michael", last_name: "Tuozzo", email: "Chainsaw62@aol.com", password: "rooster")
homer = Owner.create(first_name: "Homer", last_name: "Simpson", email: "homer@aol.com", password: "rooster", business: "Cutco", biography: "I'll just make up my own news!")
#
10.times do
  Client.create(name: Faker::Name.name)
end

10.times do
  Review.create(rating: rand(1..5), body: Faker::Lorem.sentence(word_count: rand(5..20)), owner_id: rand(1..2), client_id: rand(1..10))
end

puts "There are `#{Owner.count}` owners"
puts "There is a total of `#{Review.count}` reviews"
puts "There are `#{Client.count}` clients"
