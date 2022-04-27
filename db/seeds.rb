# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding"
Owner.create(first_name: "Michael", last_name: "Tuozzo", email: "Chainsaw62@aol.com", password: "rooster")
Owner.create(first_name: "Homer", last_name: "Simpson", email: "homer@aol.com", password: "rooster")
Review.create(owner_id: 1, name: "Bill", body: "Here is my review...", rating: rand(0..5))
Review.create(owner_id: 1, name: "Luke", body: "My opinion is...", rating: rand(0..5))
Review.create(owner_id: 1, name: "Steve", body: "No real comment", rating: rand(0..5))
Review.create(owner_id: 1, name: "NoName", body: "Where am I?", rating: rand(0..5))
Review.create(owner_id: 1, name: "Jim", body: "I personally think...", rating: rand(0..5))
Review.create(owner_id: 2, name: "Moe", body: "Here is what I think...", rating: rand(0..5))
Review.create(owner_id: 1, name: "Ned", body: "I personally think that...", rating: rand(0..5))
Review.create(owner_id: 2, name: "Hank", body: "Maybe this is", rating: rand(0..5))
Review.create(owner_id: 2, name: "Bobby", body: "HMMMM", rating: rand(0..5))
