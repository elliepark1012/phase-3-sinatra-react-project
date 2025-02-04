puts "🌱 Seeding spices..."

# Seed your database here

Category.create(name: "Dancing", update_at: Faker::Date.in_date_period(month: 2), subscribe: 39)
Category.create(name: "Yoga & Filates", update_at: Faker::Date.in_date_period(month: 2), subscribe: 30)
Category.create(name: "Sports", update_at: Faker::Date.in_date_period(month: 2), subscribe: 11)
Category.create(name: "Running", update_at: Faker::Date.in_date_period(month: 2), subscribe: 209)
Category.create(name: "Technology", update_at: Faker::Date.in_date_period(month: 2), subscribe: 31)
Category.create(name: "Socializing", update_at: Faker::Date.in_date_period(month: 2), subscribe: 48)
Category.create(name: "Music", update_at: Faker::Date.in_date_period(month: 2), subscribe: 67)

Activity.create(name: "Argentine Tango", 
            location: "Ukrainian East Village Restaurant",
            about: "In this fun meetup, you can take a beginning tango class and learn the basics of this fun dance, and you can also eat delicious Ukrainian food, have some wine or other alcohol, watch tango dancers all night at your own table, or any combination of those things! This event is super friendly and relaxed. You can just watch, or just take a class, or just eat and drink, or all of those things.",
            image_url: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/48457/DIG010147_1._SX360_QL80_TTD_.jpg",
            participants: 2,
            category_id: 1) 

Activity.create(name: "The Art of Sensual Pole Dancing",
            location: "Femme Body Fitness",
            about: "Hip circles, head roll and hair flip your way around the pole. This class teaches you how to hold the pole and dance around it like a pro! Heels preferred!",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 1)

Activity.create(name: "Everyday Yoga Flow",
            location: "Parkside Avenue & Ocean Avenue, The Seed Yoga",
            about: "Some days are for self care so separate sometime and come join me for a yummy afternoon yoga class.",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 2)

Activity.create(name: "Outdoor Yoga in Battery Park",
            location: "The Battery Park",
            about: "We believe that self-care is a foundation for human peace, clear and adequate decisions, and well-being. This summer we have regular yoga classes in Battery Park, New York City, Special Yoga Classes.",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 2)

Activity.create(name: "Ping Pong Open Play West 37th",
            location: "PingPod",
            about: "Open Play will start on a first-come-first-serve (no pun) basis for each table and then rotate singles and doubles matches (if desired) around the Pod. There will be plenty of playing time for everybody and players of similar levels are matched up!",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 3)

Activity.create(name: "Winter Soccer",
            location: "Central Park",
            about: "We never stop playing Soccer in Winter",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 3)
            
Activity.create(name: "Fun Run",
            location: "Fleet Feet Hoboken",
            about: "All paces welcome.",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 4)

Activity.create(name: "Not So Serious Work-out and Run",
            location: "6th Avenue & Central Park South",
            about: "We typically go around and do a quick introduction before each run. Feel free to come before 7:30 to chat with our regular runners. ",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 4)

Activity.create(name: "Technology and Real Estate Marketing Implementation: Ask The Expert",
            location: "Online event",
            about: "Jerome Lewis is hosting a weekly event focused on answering questions about a range of topics related to marketing, technology, lead generation, real estate, and business growth.",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 5)

Activity.create(name: "Devs On Wix Hosts: The React Meetup",
            location: "Wix Playground",
            about: "We've collaborated with leading developer groups in New York City, including Google Developer Group, Real World React, and React Robins, to bring you an evening of top-notch content.",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 5)

Activity.create(name: "Chill Drinks",
            location: "Dumbo",
            about: "South Brooklyn Ladies",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 6)

Activity.create(name: "Vegan Drinks at Beyond Sushi",
            location: "Beyond Sushi",
            about: "Come mingle, have a drink, and enjoy 100% vegan sushi, dumplings and more.",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 6)

Activity.create(name: "Music Maker Networking",
            location: "The Three Monkeys",
            about: "We've had house producers, rappers, singers and songwriters in attendance. We’re looking forward to seeing who comes through this time around!",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            category_id: 7)

Activity.create(name: "Let's Play Jazz",
            location: "Michiko Rehearsal Studios",
            image_url: "https://wallpapercave.com/wp/yXmbxhx.jpg",
            participants: 2,
            about: "Join us for jazz!",
            category_id: 7)

puts "✅ Done seeding!"
