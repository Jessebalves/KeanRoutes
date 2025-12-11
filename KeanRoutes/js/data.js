const locations = {
    building: {
        administration_building: {
            id: "admin_building",
            name: "Administration Building",
            address: "Administration Building, Union, NJ, USA",
            description: "Offers assistance with registration, financial questions + tuition.",
            lat: 40.679686,
            lng: -74.236328
        },
        admissions_office: {
            id: "admissions_office",
            name: "Admissions Office",
            address: "Office of Admissions, Union, NJ, USA",
            description: "1000 Morris Ave Ste 1, Union, NJ 07083",
            lat: 40.68139,
            lng: -74.23515
        },
        barlett_hall: {
            id: "barlett_hall",
            name: "Barlett Hall",
            address: "Bartlett Hall, Morris Avenue, Union, NJ, USA",
            description: "Upperclassmen Residence Halls 1000 Morris Avenue",
            lat: 40.67604798368305,
            lng: -74.23433317546859
        },
        bruce_hall: {
            id: "bruce_hall",
            name: "Bruce Hall",
            address: "Bruce Hall, Morris Avenue, Union, NJ, USA",
            description: "Classrooms + scientific labs biology and medical.",
            lat: 40.680361861088684,
            lng: -74.2349718889611
        },
        carole_hynes_field_house: {
            id: "carole_hynes",
            name: "Carole Hynes Field House",
            address: "",
            description: "Restrooms + weight room, concessions food",
            lat: null,
            lng: null
        },
        cas: {
            id: "cas",
            name: "Center for Academic Success",
            address: "Center for Academic Success, Morris Avenue, Kean University, Union, NJ, USA",
            description: "Classrooms mostly for history, english, writing etc.",
            lat: 40.678590671998926,
            lng: -74.23424364177416
        },
        cougar_hall: {
            id: "cougar_hall",
            name: "Cougar Hall",
            address: "Cougar Hall, Morris Avenue, Union, NJ, USA",
            description: "Residence dorms, cafe, great room lounge, game room, business center.",
            lat: 40.679129482142685,
            lng: -74.23674731411046
        },
        dangola_gym: {
            id: "dang_gym",
            name: "D'Angola Gymnasium",
            address: "D'Angola Gymnasium, Morris Avenue, Union, NJ, USA",
            description: "Fitness center with machines, free weights, cardio equipment, and pool.",
            lat: 40.679837050815905,
            lng: -74.23820720798314
        },
        downs_hall: {
            id: "downs_hall",
            name: "Downs Hall",
            address: "Downs Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Meeting rooms, health services, counseling services, police HQ.",
            lat: 40.67683466227177,
            lng: -74.2325082141251
        },
        glab: {
            id: "glab",
            name: "Green Lane Academic Building (GLAB)",
            address: "Green Lane Academic Building [GLAB], Morris Avenue, Union, NJ, USA",
            description: "Classrooms, faculty offices, full-service bookstore/library.",
            lat: 40.68281691337338, 
            lng: -74.23627260485527
        },
        harwood_arena: {
            id: "harwood_arena",
            name: "Harwood Arena",
            address: "Harwood Arena, Morris Ave, Union, NJ, USA",
            description: "Administrative offices for sports + three basketball courts.",
            lat: 40.680648675917624,
            lng: -74.2373657418363
        },
        dghh: {
            id: "dghh",
            name: "Dorothy Grant Hennings Hall",
            address: "Kean University, Hennings Hall, Kean University, 1000 Morris Ave, Union, NJ 07083",
            description: "Classrooms connected to Hutchinson Hall and George Hennings Hall.",
            lat: 40.68011145419468, 
            lng: -74.23396057935489
        },
        tech_building: {
            id: "tech_building",
            name: "Technology Building",
            address: "Office of Computer and Information Services, Kean University, 1000 Morris Ave, Union, NJ 07083",
            description: "Classrooms, faculty offices, Child Care and Development Center.",
            lat: 40.679447623113525, 
            lng: -74.23479207335788
        },
        wilkins_theatre: {
            id: "wilkins_theatre",
            name: "Wilkins Theatre",
            address: "Wilkins Theatre, Morris Avenue, Union, NJ, USA",
            description: "956-seat theatre for performances and events.",
            lat: 40.67869734828321,
            lng: -74.23226095533936
        },
        nancy_thompson_library: {
            id: "nancy_thompson_library",
            name: "Nancy Thompson Library",
            address: "Nancy Thompson Library, Morris Avenue, Union, NJ, USA",
            description: "Library building with Starbucks.",
            lat: 40.67823631484569,
            lng: -74.23348592412808
        },
        hutchinson_hall: {
            id: "hutchinson_hall",
            name: "Hutchinson Hall",
            address: "Hutchinson Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Political science, culture sciences, design studios.",
            lat: 40.67960243240396,
            lng: -74.23360070502521
        },
        hynes_hall: {
            id: "hynes_hall",
            name: "Hynes Hall",
            address: "Hynes Hall, Morris Avenue, Union, NJ, USA",
            description: "Meeting rooms, classrooms, presentation spaces.",
            lat: 40.68281532457947, 
            lng: -74.23240958168665
        },
        miron_student_center: {
            id: "miron_student_center",
            name: "Miron Student Center",
            address: "Miron Student Center, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Food court, game room, convenience store.",
            lat: 40.67763386088302,
            lng: -74.23496760633356
        },
        whiteman_hall: {
            id: "whiteman_hall",
            name: "Whiteman Hall",
            address: "Whiteman Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Freshmen dormitories + mailroom.",
            lat: 40.676409901714464,
            lng: -74.23316361728445
        },
        freshman_residence_hall: {
            id: "freshman_residence_hall",
            name: "Freshman Residence Hall",
            address: "Freshman Residence Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Freshmen dormitories.",
            lat: 40.67651588217737,
            lng: -74.23468304875892
        },
        upperclassman_residence_hall: {
            id: "upperclassman_residence_hall",
            name: "Upperclassman Residence Hall",
            address: "Upperclass Residence Hall, Kean University, Morris Avenue, Elizabeth, NJ, USA",
            description: "Upperclassmen dorms and Kean Kitchen buffet.",
            lat: 40.67645893673954,
            lng: -74.23535203824729
        },
        dougall_hall: {
            id: "dougall_hall",
            name: "Dougall Hall",
            address: "Dougall Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Freshmen dorms + Cougar Cardio Room.",
            lat: 40.676372192583344,
            lng: -74.23373771204363
        },
        burch_hall: {
            id: "burch_hall",
            name: "Burch Hall",
            address: "Burch Hall, Morris Avenue, Union, NJ, USA",
            description: "Dormitories.",
            lat: 40.675862178443765,
            lng: -74.23363251856394
        },
        rogers_hall: {
            id: "rogers_hall",
            name: "Rogers Hall",
            address: "Rogers Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Dormitories.",
            lat: 40.67520548923301,
            lng: -74.23404857150076
        },
        george_hennings_hall: {
            id: "george_hennings_hall",
            name: "George Hennings Hall",
            address: "Science Building, 1000 Morris Ave, Union, NJ 07083",
            description: "Classrooms, faculty offices, computer labs.",
            lat: 40.68042447479942, 
            lng: -74.23445896475162
        },
        north_ave_building: {
            id: "north_ave_building",
            name: "North Avenue Academic Building (NAAB)",
            address: "North Avenue Academic Building [NAAB], Morris Avenue, Union, NJ, USA",
            description: "Classrooms, faculty offices, computer labs.",
            lat: 40.67656486542418,
            lng: -74.22865162956666
        },
        stem_building: {
            id: "stem_building",
            name: "STEM Building",
            address: "Kean University STEM Building, Morris Avenue, Union, NJ, USA",
            description: "STEM courses.",
            lat: 40.67988772385432, 
            lng: -74.2310307328702
        },
        townsend_hall: {
            id: "townsend_hall",
            name: "Townsend Hall",
            address: "Townsend Hall, Kean University 1000, Morris Avenue, Union, NJ, USA",
            description: "Classrooms and lockers.",
            lat: 40.679879565933646,
            lng: -74.23561966760393
        },
        liberty_hall: {
            id: "liberty_hall",
            name: "Liberty Hall Academic Center",
            address: "Liberty Hall Academic Center, Morris Avenue, Union, NJ, USA",
            description: "Miscellaneous courses such as history.",
            lat: 40.679889948617436, 
            lng: -74.22770824305618
        },
        sozio_hall: {
            id: "sozio_hall",
            name: "Sozio Hall",
            address: "Sozio Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Dormitories.",
            lat: 40.67560969987679, 
            lng: -74.23469303577193
        },
        nathan_weiss: {
            id: "nathan_weiss",
            name: "Nathan Weiss Graduate College",
            address: "Nathan Weiss Graduate College, North Avenue, Kean University, Hillside, NJ, USA",
            description: "Graduate college building connected to Enlow Recital Hall.",
            lat: 40.67993158669318, 
            lng: -74.22422400167669
        }
    },
    parking: {
        bruce_hall_parking: {
            id: "bruce_hall_parking",
            name: "Bruce Hall Parking Lot",
            address: "Bruce Hall, Morris Avenue, Union, NJ, USA",
            description: "Parking closest to the Bruce Hall entrance and George Hennings Hall side entrance. Yellow line spaces are staff-only.",
            lat: 40.68097414152229, 
            lng: -74.23459369532694
        },
        cougar_hall_parking: {
            id: "cougar_hall_parking",
            name: "Cougar Hall Parking Lot",
            address: "Cougar Hall, Morris Avenue, Union, NJ, USA",
            description: "Staff-only parking lot behind Cougar Hall dorm.",
            lat: 40.67863301015854, 
            lng: -74.23759765012414
        },
        dang_gym_parking: {
            id: "dang_gym_parking_lot",
            name: "D'Angola Gym Parking Lot",
            address: "D’Angola Gym, Morris Avenue, Union, NJ, USA",
            description: "Staff parking next to D'Angola Gym. Small additional staff lot across the gym.",
            lat: 40.67937965557334, 
            lng: -74.23870946471163
        },
        glab_parking: {
            id: "glab_parking",
            name: "GLAB Parking Lot",
            address: "GLAB Parking, Union, NJ, USA",
            description: "Parking next to the Green Lane Academic Building for classes or bookstore visits.",
            lat: 40.68261048379545, 
            lng: -74.23702489410792
        },
        harwood_parking: {
            id: "harwood_parking",
            name: "Harwood Arena Parking Lot",
            address: "Harwood Arena, Morris Avenue, Union, NJ, USA",
            description: "Parking lot next to Harwood Arena.",
            lat: 40.68091419307597, 
            lng: -74.23693862473093
        },
        hennings_hall_parking: {
            id: "hennings_hall_parking",
            name: "Hennings Hall Parking Lot",
            address: "Hennings Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Parking in front of George Hennings Hall and Dorothy Grant Hennings Hall. Yellow lines = staff only.",
            lat: 40.68024298591954,  
            lng: -74.23323157989552
        },
        hynes_hall_parking: {
            id: "hynes_hall_parking",
            name: "Hynes Hall Parking Lot",
            address: "Hynes Hall, Morris Avenue, Union, NJ, USA",
            description: "Parking around Hynes Hall.",
            lat: 40.68259006266706, 
            lng: -74.2327172145474 
        },
        hynes_hall_overflow: {
            id: "hynes_hall_overflow_parking",
            name: "Hynes Hall Overflow Parking Lot",
            address: "40.68292649579573, -74.23028414603303",
            description: "Extra parking space near Hynes Hall.",
            lat: 40.68292649579573, 
            lng: -74.23028414603303
        },
        east_campus_parking: {
            id: "e_campus_parking",
            name: "East Campus Parking Lot",
            address: "40.680923997993226, -74.22464000136148",
            description: "Parking lot near Nathan Weiss Graduate College on East Campus.",
            lat: 40.680923997993226, 
            lng: -74.22464000136148
        },
        east_campus_overflow: {
            id: "e_campus_overflow_parking",
            name: "East Campus Overflow Parking Lot",
            address: "40.68173554380717, -74.22535164402048",
            description: "Extra parking space on East Campus.",
            lat: 40.68173554380717, 
            lng: -74.22535164402048
        },
        east_campus_upper: {
            id: "e_campus_upper_parking",
            name: "East Campus Upper Parking Lot",
            address: "Enlow Recital Hall, North Avenue, Hillside, NJ, USA",
            description: "Staff parking lot near Enlow Recital Hall.",
            lat: 40.68012897889286, 
            lng: -74.22330577537844
        },
        kean_hall_parking: {
            id: "kean_hall_parking",
            name: "Kean Hall Parking Lot",
            address: "Kean Hall Lot, Green Lane, Union, NJ, USA",
            description: "Parking near the Green Lane entrance and across from GLAB.",
            lat: 40.681734942081185,
            lng: -74.23593343985706
        },
        kean_parking_deck: {
            id: "kean_parking_deck",
            name: "Kean Parking Deck",
            address: "Kean Parking Garage, Union, NJ, USA",
            description: "Parking deck located to the right of Hynes Hall.",
            lat: 40.6823,
            lng: -74.2316
        },
        liberty_hall_parking: {
            id: "lmac_parking",
            name: "Liberty Hall Parking Lot",
            address: "Liberty Hall Academic Center, Morris Avenue, Union, NJ, USA",
            description: "Parking next to Liberty Hall Academic Center.",
            lat: 40.680205173840044, 
            lng: -74.2274378207145
        },
        stem_parking: {
            id: "stem_parking",
            name: "STEM Parking Lot",
            address: "Kean University STEM Building, Morris Avenue, Union, NJ, USA",
            description: "Parking in front of the STEM Building.",
            lat: 40.680559102623, 
            lng: -74.22942265532447
        },
        vaughn_eames_parking: {
            id: "vaughn_eames_parking",
            name: "Vaughn-Eames Parking Lot",
            address: "Vaughn-Eames Hall, Morris Avenue, Union, NJ, USA",
            description: "Parking near Vaughn-Eames Hall and NAAB. 24-hour parking beyond orange curb.",
            lat: 40.676271149159646, 
            lng: -74.2297874357604
        },
        visitor_parking: {
            id: "visitor_parking",
            name: "Visitor Parking Lot",
            address: "40.680583511444596, -74.23600479625375",
            description: "Parking lot for visitors without permits.",
            lat: 40.680583511444596, 
            lng: -74.23600479625375
        },
        wilkins_parking: {
            id: "wilkins_parking",
            name: "Wilkins Theatre Parking Lot",
            address: "Wilkins Theatre, Morris Avenue, Union, NJ, USA",
            description: "Staff parking between Hutchinson Hall and Wilkins Theatre.",
            lat: 40.679432219381845, 
            lng: -74.23227116133286
        }
    },
     food: {
        chipotle: {
            id: "chipotle",
            name: "Chipotle Mexican Grill",
            address: "Chipotle Mexican Grill, Morris Avenue, Union, NJ, USA",
            description: "Chipotle has Mexican food in a build-your-own-meal style: burritos, quesadillas, bowls.",
            lat: 40.697738,
            lng: -74.275562
        },
        coldstone: {
            id: "coldstone",
            name: "Cold Stone Creamery",
            address: "Cold Stone Creamery, Morris Avenue, Union, NJ, USA",
            description: "Ice cream, milkshakes, smoothies, frappes, cakes, and cookies.",
            lat: 40.67903086346734,
            lng: -74.2061140057043
        },
        kean_kitchen: {
            id: "kean_kitchen",
            name: "Kean Kitchen",
            address: "",
            description: "Kean's dining hall offering salads, fruits, grilled entrees, pasta, and full meals.",
            lat: null,
            lng: null
        },
        tropicana_diner: {
            id: "tropicana_diner",
            name: "Tropicana Diner and Bakery",
            address: "Tropicana Diner and Bakery, Morris Avenue, Elizabeth, NJ, USA",
            description: "Lunch, brunch, breakfast, dinner, bread, pastries.",
            lat: 40.6790872,
            lng: -74.2060929
        },
        mark_twain: {
            id: "mark_twain",
            name: "Mark Twain Diner & Restaurant",
            address: "Mark Twain Diner & Restaurant, Morris Avenue, Union, NJ, USA",
            description: "Dinner close to drive it comes with appatizers(fried calamari,moterzella sticks, etc.), burgers, pizza, pasta etc.",
            lat: 40.6922353,
            lng: -74.2541617
        },
        valenca: {
            id: "valenca",
            name: "Valença Restaurant",
            address: "Valenca Restaurant, Monroe Avenue, Elizabeth, NJ, USA",
            description: "Portuguese and Spanish cuisine including Suckling pig,Shrimp and garlic sauce, ribs chicken many ways etc.",
            lat: 40.677009,
            lng: -74.203409
        },
        smash_burger: {
            id: "smash_burger",
            name: "Smashburger",
            address: "Smashburger, Morris Avenue, Union, NJ, USA",
            description: "1000 Morris Ave, Union, NJ 07083.",
            lat: 40.6786124,
            lng: -74.2339609
        },
        taco_bell: {
            id: "taco_bell",
            name: "Taco Bell",
            address: "Taco Bell, U.S. 22, Hillside, NJ, USA",
            description: "Quesadillas, tacos, burritos, Baja blast and more.",
            lat: 40.69949044026829, 
            lng: -74.23842992181216
        },
        china_star: {
            id: "china_star",
            name: "China Star",
            address: "China Star, North Avenue, Union, NJ, USA",
            description: "General Tso's chicken, dumplings, spring rolls, crab rangoons, and more.",
            lat: 40.6737783,
            lng: -74.2301815
        },
        dairy_queen: {
            id: "dairy_queen",
            name: "Dairy Queen",
            address: "Dairy Queen Grill & Chill, Morris Avenue, Union, NJ, USA",
            description: "Ice cream and fast-food staples(chicken tenders,burgers, fries, etc.), milkshakes .",
            lat: 40.7147791,
            lng: -74.253184
        },
        dunkin: {
            id: "dunkin",
            name: "Dunkin'",
            address: "Dunkin', Morris Avenue, Union, NJ, USA",
            description: "Coffee, breakfast, sandwiches, breakfeast, donuts.",
            lat: 40.6891189,
            lng: -74.2458525
        },
        soul_factory: {
            id: "soul_factory",
            name: "Soul Food Factory",
            address: "Soul Food Factory, Morris Avenue, Union, NJ, USA",
            description: "Southern-style food. mac and cheese, fried chicken and cat fish, sea food",
            lat: 40.696346,
            lng: -74.268082
        }
    },
    chargingStations: {
        charging_station_hutchinson: {
            id: "charging_station1",
            name: "Charging Station (Hutchinson Hall)",
            address: "40.67983615806235, -74.23320055942229",
            description: "Six charging stations located in front of Hutchinson Hall on the Main Campus.",
            lat: 40.67983615806235, 
            lng: -74.23320055942229
        },
        charging_station_east_campus: {
            id: "charging_station2",
            name: "Charging Station (East Campus)",
            address: "40.680678577423365, -74.22373044817499",
            description: "Six charging stations located in the East Campus parking lot.",
            lat: 40.680678577423365, 
            lng: -74.22373044817499
        }
    },
    convenienceStores: {
        seven_eleven: {
            id: "711",
            name: "7-Eleven",
            address: "7-Eleven, Galloping Hill Road, Union, NJ, USA",
            description: "Pit stop for snacks and drinks.",
            lat: 40.67675220732043, 
            lng: -74.26723715518908
        },
        jabes_mini_market: {
            id: "jabes",
            name: "Jabes Mini Market & Deli",
            address: "Jabes Mini Market & Deli, Magie Avenue, Union, NJ, USA",
            description: "Neighborhood convenience store and deli.",
            lat: 40.67270262521706, 
            lng: -74.24851319201247
        },
        cvs_union: {
            id: "cvs1",
            name: "CVS Pharmacy (Union)",
            address: "CVS Pharmacy, 1105A Morris Ave, Union, NJ 07083, USA",
            description: "Closest pharmacy and retail store for essentials and medicines.",
            lat: 40.683347595112664, 
            lng: -74.23414360554344
        },
        cvs_elizabeth: {
            id: "cvs2",
            name: "CVS Pharmacy (Elizabeth)",
            address: "CVS, Westfield Avenue, Elizabeth, NJ, USA",
            description: "Pharmacy offering daily essentials, prescriptions, and photo services.",
            lat: 40.6656982959726, 
            lng: -74.2313009623854
        },
        quick_shop: {
            id: "quick_shop",
            name: "Quick Shop",
            address: "Quick Shop, North Avenue, Union, NJ, USA",
            description: "Small business convenience store.",
            lat: 40.6720910792888, 
            lng: -74.23136761352399
        },
        walgreens: {
            id: "walgreens",
            name: "Walgreens",
            address: "Walgreens, Newark Avenue, Elizabeth, NJ, USA",
            description: "Pharmacy offering prescriptions, immunizations, photo services, and essentials.",
            lat: 40.67728245715186,
            lng: -74.21266954121037
        }
    },
    gasStation: {
        delta: {
            id: "delta",
            name: "Delta Gas Station",
            address: "Delta, 981 Magie Ave, Union, NJ 07083, USA",
            description: "Gas station.",
            lat: 40.6732096927409, 
            lng: -74.24384304196735
        },
        enrite: {
            id: "enrite",
            name: "Enrite Gas Station",
            address: "Enrite, West Grand Street, Elizabeth, NJ, USA",
            description: "Gas station.",
            lat: 40.66589286923886, 
            lng: -74.22394265549585
        },
        exxon: {
            id: "exxon",
            name: "Exxon",
            address: "Exxon, Westfield Avenue, Elizabeth, NJ, USA",
            description: "Gas station + convenience store.",
            lat: 40.66531414410003, 
            lng: -74.23389356949284
        },
        ez_quick: {
            id: "ez_quick",
            name: "EZ Quick",
            address: "EZ QUICK, Morris Avenue, Elizabeth, NJ, USA",
            description: "Gas station.",
            lat: 40.67078008760494, 
            lng: -74.21973468862416
        },
        fuel_4: {
            id: "fuel",
            name: "Fuel 4 Gas & Diesel",
            address: "Fuel 4 Gas & Diesel, Morris Avenue, Union, NJ, USA",
            description: "Gas station.",
            lat: 40.68867823403995, 
            lng: -74.24611266091154
        },
        shell: {
            id: "shell",
            name: "Shell",
            address: "Shell, Newark Avenue, Elizabeth, NJ, USA",
            description: "Gas station + convenience store.",
            lat: 40.67648620478183, 
            lng: -74.21248678055021
        }
    },
    events: {
        basketball1: {
            id: "basketball1",
            name: "MBB vs Albright College",
            address: "Harwood Arena, Morris Ave, Union, NJ, USA",
            description: "Men's Basketball — December 16th, 2025 at 6:00 PM. Union, NJ.",
            lat: null,
            lng: null
        },
        speech_meeting: {
            id: "speech_meeting",
            name: "Speech Club Meeting",
            address: "Kean University East Campus, North Avenue, Hillside, NJ, USA",
            description: "Speech Club Meeting — December 16th, 2025 at 3:30 PM. East Campus 146.",
            lat: null,
            lng: null
        },
        general_body_meeting: {
            id: "body_meeting",
            name: "General Body Meeting",
            address: "Center for Academic Success, Morris Avenue, Kean University, Union, NJ, USA",
            description: "General Body Meeting — December 16th, 2025 at 3:30 PM. CAS 247.",
            lat: null,
            lng: null
        },
        residence_assistance: {
            id: "residence_assistance",
            name: "Resident Assistance Info Session",
            address: "",
            description: "Resident Assistance Information Session — December 16th, 2025 at 5:00 PM. Held online.",
            lat: null,
            lng: null
        },
        get_tested: {
            id: "get_tested",
            name: "Get Yourself Tested",
            address: "Downs Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Get Yourself Tested — December 17th, 2025 at 11:00 AM. Wellness Center - Downs Hall.",
            lat: null,
            lng: null
        },
        funk_meeting: {
            id: "funk",
            name: "FUNK General Body Meeting",
            address: "Miron Student Center, Kean University, Morris Avenue, Union, NJ, USA",
            description: "FUNK General Body Meeting — December 18th, 2025 at 7:30 PM. MSC 228.",
            lat: null,
            lng: null
        },
        legacy_broadway: {
            id: "legacy_broadway",
            name: "Jewish Legacy of Broadway Performance",
            address: "Enlow Recital Hall, North Avenue, Hillside, NJ, USA",
            description: "L'Chaim: A Toast to the Jewish Legacy of Broadway — December 20th, 2025 at 7:30 PM. Enlow Recital Hall.",
            lat: null,
            lng: null
        },
        breakfast_with_santa: {
            id: "breakfast_with_santa",
            name: "Breakfast with Santa",
            address: "Liberty Hall Museum, Morris Avenue, Union, NJ, USA",
            description: "Breakfast with Santa — December 21st, 2025 at 8:30 AM & 11:30 AM. Liberty Hall Museum. Volunteers needed.",
            lat: null,
            lng: null
        },
        basketball2: {
            id: "basketball2",
            name: "MBB vs Ithaca College",
            address: "Canavan Arena, Castle Point Terrace, Hoboken, NJ, USA",
            description: "Men's Basketball Tournament — January 2nd, 2025 at 6:00 PM. Hoboken, NJ.",
            lat: null,
            lng: null
        },
        basketball3: {
            id: "basketball3",
            name: "MBB vs Stevens College",
            address: "Canavan Arena, Castle Point Terrace, Hoboken, NJ, USA",
            description: "Men's Basketball Tournament — January 4th, 2025 at 4:00 PM. Hoboken, NJ.",
            lat: null,
            lng: null
        },
        basketball4: {
            id: "basketball4",
            name: "WBB vs William Paterson College",
            address: "Harwood Arena, Morris Ave, Union, NJ, USA",
            description: "Women's Basketball — January 7th, 2025 at 5:30 PM. Union, NJ.",
            lat: null,
            lng: null
        },
        basketball5: {
            id: "basketball5",
            name: "MBB vs William Paterson College",
            address: "Harwood Arena, Morris Ave, Union, NJ, USA",
            description: "Men's Basketball — January 7th, 2025 at 7:30 PM. Union, NJ.",
            lat: null,
            lng: null
        }
    }

};
