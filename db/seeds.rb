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
Client.create(name: "Finn")
Review.create(rating: 2, body: "nice", owner_id: 1, client_id: 1, name: "finn")
puts "we got `#{Owner.count}` owners"
puts "we got `#{Review.count}` reviews"
puts "we got `#{Client.count}` clients"
