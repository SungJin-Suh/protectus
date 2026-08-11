// Seed the database with sample criminals and protection products.
// Usage: node scripts/seed.js
// Reads the same connection settings as server.js. Leaves the users collection untouched.
require(`dotenv`).config();
const mongoose = require(`mongoose`);

const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;
const mongo_host = process.env.MONGODB_HOST;
const mongo_db = process.env.MONGODB_DATABASE;

const { Decimal128 } = mongoose.Schema.Types;

// Schemas mirrored from server.js.
const criminalSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    address: String,
    dob: String,
    gender: String,
    image: String,
    physicalDescriptions: Array(String),
    convictions: Array({ crime: String, date: String, sentence: String }),
});

const robotSchema = new mongoose.Schema({
    model: String,
    manufacturer: String,
    price: Decimal128,
    location: String,
    type: String,
});

const droneSchema = new mongoose.Schema({
    model: String,
    manufacturer: String,
    price: Decimal128,
    location: String,
    type: String,
});

const cyberSchema = new mongoose.Schema({
    type: String,
    price: Decimal128,
    features: Array({ service: String, description: String }),
});

const CriminalProfile = mongoose.model("criminalProfile", criminalSchema);
const Robots = mongoose.model("robotprofiles", robotSchema);
const Drones = mongoose.model("droneprofiles", droneSchema);
const CyberSecurities = mongoose.model("cybersecurityprofiles", cyberSchema);

// Crime values must match the option values in views/templates/filter.ejs.
const criminals = [
    {
        firstName: "Ashe", middleName: "", lastName: "Avarosan",
        address: "555 W Hastings St, Vancouver, BC", dob: "1991-02-14", gender: "Female",
        image: "/Ashe.webp",
        physicalDescriptions: ["White hair", "Blue eyes", "Tall build"],
        convictions: [{ crime: "robbery", date: "2022-03-11", sentence: "8 years" }],
    },
    {
        firstName: "Braum", middleName: "", lastName: "Freljord",
        address: "800 Robson St, Vancouver, BC", dob: "1984-11-30", gender: "Male",
        image: "/Braum.webp",
        physicalDescriptions: ["Heavy build", "Thick moustache", "Scar on left forearm"],
        convictions: [{ crime: "aggravated assault", date: "2021-07-19", sentence: "5 years" }],
    },
    {
        firstName: "Draven", middleName: "", lastName: "Noxus",
        address: "1055 Canada Pl, Vancouver, BC", dob: "1989-05-02", gender: "Male",
        image: "/Draven.webp",
        physicalDescriptions: ["Shaved head", "Tattooed arms", "Athletic build"],
        convictions: [
            { crime: "murder", date: "2020-09-08", sentence: "25 years" },
            { crime: "aggravated assault", date: "2019-01-22", sentence: "6 years" },
        ],
    },
    {
        firstName: "Ezreal", middleName: "", lastName: "Piltover",
        address: "750 Hornby St, Vancouver, BC", dob: "1998-06-21", gender: "Male",
        image: "/Ezreal.webp",
        physicalDescriptions: ["Blond hair", "Slim build", "Wears a gauntlet"],
        convictions: [{ crime: "robbery", date: "2023-04-05", sentence: "4 years" }],
    },
    {
        firstName: "Hwei", middleName: "", lastName: "Ionia",
        address: "350 W Georgia St, Vancouver, BC", dob: "1993-10-17", gender: "Male",
        image: "/Hwei.webp",
        physicalDescriptions: ["Ink-stained hands", "Long dark hair", "Quiet demeanour"],
        convictions: [{ crime: "vandalism", date: "2023-08-14", sentence: "2 years" }],
    },
    {
        firstName: "Khada", middleName: "", lastName: "Jhin",
        address: "601 W Cordova St, Vancouver, BC", dob: "1980-01-09", gender: "Male",
        image: "/Jhin.webp",
        physicalDescriptions: ["Masked face", "Slender build", "Meticulous appearance"],
        convictions: [
            { crime: "murder", date: "2018-12-01", sentence: "30 years" },
            { crime: "vandalism", date: "2017-05-30", sentence: "3 years" },
        ],
    },
    {
        firstName: "Jinx", middleName: "Powder", lastName: "Zaun",
        address: "1128 W Georgia St, Vancouver, BC", dob: "1999-04-01", gender: "Female",
        image: "/Jinx.webp",
        physicalDescriptions: ["Blue braided hair", "Tattoos on arms", "Slim build"],
        convictions: [
            { crime: "vandalism", date: "2022-11-05", sentence: "6 years" },
            { crime: "robbery", date: "2021-02-18", sentence: "9 years" },
        ],
    },
    {
        firstName: "Kaisa", middleName: "", lastName: "Voidborn",
        address: "2705 E Hastings St, Vancouver, BC", dob: "1996-08-25", gender: "Female",
        image: "/KaiSa.webp",
        physicalDescriptions: ["Purple bodysuit", "Athletic build", "Violet eyes"],
        convictions: [{ crime: "aggravated assault", date: "2022-06-12", sentence: "7 years" }],
    },
    {
        firstName: "Karma", middleName: "", lastName: "Darha",
        address: "1100 Chestnut St, Vancouver, BC", dob: "1986-03-07", gender: "Female",
        image: "/Karma.webp",
        physicalDescriptions: ["Green robes", "Braided hair", "Calm expression"],
        convictions: [{ crime: "identity theft", date: "2023-01-27", sentence: "3 years" }],
    },
    {
        firstName: "Luxanna", middleName: "", lastName: "Crownguard",
        address: "4600 Cambie St, Vancouver, BC", dob: "1997-12-12", gender: "Female",
        image: "/Luxanna.webp",
        physicalDescriptions: ["Blond hair", "Blue eyes", "Slim build"],
        convictions: [{ crime: "identity theft", date: "2022-09-30", sentence: "4 years" }],
    },
    {
        firstName: "Milio", middleName: "", lastName: "Ixtal",
        address: "3663 Crowley Dr, Vancouver, BC", dob: "2000-07-03", gender: "Male",
        image: "/Milio.webp",
        physicalDescriptions: ["Short stature", "Curly hair", "Freckles"],
        convictions: [{ crime: "vandalism", date: "2023-10-08", sentence: "2 years" }],
    },
    {
        firstName: "Mundo", middleName: "", lastName: "Zaun",
        address: "100 W 49th Ave, Vancouver, BC", dob: "1978-02-28", gender: "Male",
        image: "/Mundo.webp",
        physicalDescriptions: ["Purple skin tone", "Very heavy build", "Multiple scars"],
        convictions: [
            { crime: "murder", date: "2016-04-16", sentence: "28 years" },
            { crime: "drug trafficking", date: "2015-08-02", sentence: "12 years" },
        ],
    },
    {
        firstName: "Olaf", middleName: "", lastName: "Lokfar",
        address: "1895 Venables St, Vancouver, BC", dob: "1983-09-19", gender: "Male",
        image: "/Olaf.webp",
        physicalDescriptions: ["Red beard", "Heavy build", "Scar across chest"],
        convictions: [{ crime: "aggravated assault", date: "2021-11-23", sentence: "10 years" }],
    },
    {
        firstName: "Pyke", middleName: "", lastName: "Bilgewater",
        address: "2901 E Hastings St, Vancouver, BC", dob: "1985-06-06", gender: "Male",
        image: "/Pyke.webp",
        physicalDescriptions: ["Pale complexion", "Deep chest scar", "Tall build"],
        convictions: [
            { crime: "murder", date: "2019-10-31", sentence: "26 years" },
            { crime: "robbery", date: "2018-03-14", sentence: "7 years" },
        ],
    },
    {
        firstName: "Samira", middleName: "", lastName: "Noxus",
        address: "1650 W 2nd Ave, Vancouver, BC", dob: "1994-01-15", gender: "Female",
        image: "/Samira.webp",
        physicalDescriptions: ["Dark curly hair", "Scar on right cheek", "Athletic build"],
        convictions: [{ crime: "robbery", date: "2023-02-09", sentence: "11 years" }],
    },
    {
        firstName: "Sarah", middleName: "", lastName: "Fortune",
        address: "200 Burrard St, Vancouver, BC", dob: "1990-10-04", gender: "Female",
        image: "/Sarah.webp",
        physicalDescriptions: ["Red hair", "Green eyes", "Medium build"],
        convictions: [{ crime: "robbery", date: "2022-05-21", sentence: "9 years" }],
    },
    {
        firstName: "Seraphine", middleName: "", lastName: "Piltover",
        address: "999 Canada Pl, Vancouver, BC", dob: "2000-11-11", gender: "Female",
        image: "/Seraphine.webp",
        physicalDescriptions: ["Pink hair", "Slim build", "Wears headphones"],
        convictions: [{ crime: "cyberattack", date: "2023-06-18", sentence: "3 years" }],
    },
    {
        firstName: "Sett", middleName: "", lastName: "Ionia",
        address: "1575 Alberni St, Vancouver, BC", dob: "1992-04-26", gender: "Male",
        image: "/Sett.webp",
        physicalDescriptions: ["Very heavy build", "Red and black hair", "Pointed ears"],
        convictions: [
            { crime: "aggravated assault", date: "2021-09-03", sentence: "14 years" },
            { crime: "drug trafficking", date: "2020-01-11", sentence: "8 years" },
        ],
    },
    {
        firstName: "Shaco", middleName: "", lastName: "Runeterra",
        address: "1180 Denman St, Vancouver, BC", dob: "1981-10-31", gender: "Male",
        image: "/Shaco.webp",
        physicalDescriptions: ["Jester costume", "Pale face paint", "Slim build"],
        convictions: [
            { crime: "murder", date: "2017-10-31", sentence: "29 years" },
            { crime: "vandalism", date: "2016-06-13", sentence: "4 years" },
        ],
    },
    {
        firstName: "Shauna", middleName: "", lastName: "Vayne",
        address: "2010 Alma St, Vancouver, BC", dob: "1988-08-08", gender: "Female",
        image: "/Shauna.webp",
        physicalDescriptions: ["Short dark hair", "Athletic build", "Wears tinted visor"],
        convictions: [{ crime: "aggravated assault", date: "2022-01-30", sentence: "6 years" }],
    },
    {
        firstName: "Silco", middleName: "", lastName: "Zaun",
        address: "3350 Dunbar St, Vancouver, BC", dob: "1975-05-16", gender: "Male",
        image: "/Silco.webp",
        physicalDescriptions: ["Scarred left eye", "Slim build", "Grey streaked hair"],
        convictions: [
            { crime: "drug trafficking", date: "2019-07-07", sentence: "22 years" },
            { crime: "murder", date: "2018-11-19", sentence: "24 years" },
        ],
    },
    {
        firstName: "Sivir", middleName: "", lastName: "Shurima",
        address: "5900 Granville St, Vancouver, BC", dob: "1991-09-23", gender: "Female",
        image: "/Sivir.webp",
        physicalDescriptions: ["Dark brown hair", "Athletic build", "Gold jewellery"],
        convictions: [{ crime: "robbery", date: "2023-03-27", sentence: "10 years" }],
    },
    {
        firstName: "Talon", middleName: "", lastName: "Du Couteau",
        address: "4255 Arbutus St, Vancouver, BC", dob: "1990-12-05", gender: "Male",
        image: "/Talon.webp",
        physicalDescriptions: ["Hooded cloak", "Slim build", "Scar on jaw"],
        convictions: [
            { crime: "murder", date: "2020-02-29", sentence: "27 years" },
            { crime: "robbery", date: "2019-05-10", sentence: "6 years" },
        ],
    },
    {
        firstName: "Taric", middleName: "", lastName: "Targon",
        address: "1477 W Broadway, Vancouver, BC", dob: "1987-07-14", gender: "Male",
        image: "/Taric.webp",
        physicalDescriptions: ["Tall build", "Dark hair", "Wears large gemstones"],
        convictions: [{ crime: "vandalism", date: "2022-08-20", sentence: "2 years" }],
    },
    {
        firstName: "Tobias", middleName: "", lastName: "Foxtrot",
        address: "2280 W 4th Ave, Vancouver, BC", dob: "1986-01-20", gender: "Male",
        image: "/Tobias.webp",
        physicalDescriptions: ["Wide brimmed hat", "Goatee", "Medium build"],
        convictions: [
            { crime: "identity theft", date: "2022-04-14", sentence: "5 years" },
            { crime: "robbery", date: "2021-06-25", sentence: "7 years" },
        ],
    },
    {
        firstName: "Udyr", middleName: "", lastName: "Freljord",
        address: "1055 W Georgia St, Vancouver, BC", dob: "1979-03-13", gender: "Male",
        image: "/Udyr.webp",
        physicalDescriptions: ["Long unkempt hair", "Heavy build", "Bear claw markings"],
        convictions: [{ crime: "aggravated assault", date: "2020-10-02", sentence: "13 years" }],
    },
    {
        firstName: "Varus", middleName: "", lastName: "Ionia",
        address: "700 Main St, Vancouver, BC", dob: "1982-11-27", gender: "Male",
        image: "/Varus.webp",
        physicalDescriptions: ["Purple markings", "Tall build", "Long dark hair"],
        convictions: [{ crime: "murder", date: "2019-04-09", sentence: "23 years" }],
    },
    {
        firstName: "Violet", middleName: "", lastName: "Piltover",
        address: "1 Kingsway, Vancouver, BC", dob: "1995-03-18", gender: "Female",
        image: "/Vi.webp",
        physicalDescriptions: ["Pink hair", "Knuckle tattoos", "Athletic build"],
        convictions: [
            { crime: "aggravated assault", date: "2022-07-16", sentence: "5 years" },
            { crime: "vandalism", date: "2021-03-08", sentence: "2 years" },
        ],
    },
    {
        firstName: "Viktor", middleName: "", lastName: "Zaun",
        address: "2150 Commercial Dr, Vancouver, BC", dob: "1977-06-30", gender: "Male",
        image: "/Viktor.webp",
        physicalDescriptions: ["Metal prosthetics", "Hunched posture", "Glowing left eye"],
        convictions: [
            { crime: "cyberattack", date: "2021-12-24", sentence: "16 years" },
            { crime: "identity theft", date: "2020-05-05", sentence: "6 years" },
        ],
    },
    {
        firstName: "Yasuo", middleName: "", lastName: "Ionia",
        address: "3505 Kingsway, Vancouver, BC", dob: "1989-02-11", gender: "Male",
        image: "/Yasuo.webp",
        physicalDescriptions: ["Long dark ponytail", "Lean build", "Carries a blade"],
        convictions: [{ crime: "murder", date: "2018-08-21", sentence: "21 years" }],
    },
    {
        firstName: "Zeri", middleName: "", lastName: "Zaun",
        address: "6200 University Blvd, Vancouver, BC", dob: "2001-05-29", gender: "Female",
        image: "/Zeri.webp",
        physicalDescriptions: ["Teal hair", "Small build", "Electrical burn scars"],
        convictions: [{ crime: "vandalism", date: "2023-09-12", sentence: "3 years" }],
    },
    {
        firstName: "Seogin", middleName: "", lastName: "Hong",
        address: "5950 University Blvd, Vancouver, BC", dob: "1999-01-25", gender: "Male",
        image: "/seogin.png",
        physicalDescriptions: ["Black hair", "Medium build", "Wears glasses"],
        convictions: [{ crime: "cyberattack", date: "2023-11-02", sentence: "4 years" }],
    },
    {
        firstName: "Shawn", middleName: "", lastName: "Rim",
        address: "2199 W 41st Ave, Vancouver, BC", dob: "1998-09-14", gender: "Male",
        image: "/Shawn.jpeg",
        physicalDescriptions: ["Black hair", "Slim build", "Left handed"],
        convictions: [{ crime: "identity theft", date: "2023-05-19", sentence: "3 years" }],
    },
    {
        firstName: "David", middleName: "Sungjin", lastName: "Suh",
        address: "1290 Hornby St, Vancouver, BC", dob: "1997-11-08", gender: "Male",
        image: "/David.jpeg",
        physicalDescriptions: ["Black hair", "Medium build", "Calm demeanour"],
        convictions: [{ crime: "cyberattack", date: "2023-07-23", sentence: "5 years" }],
    },
    {
        firstName: "Daniel", middleName: "Myung Kyu", lastName: "Kim",
        address: "888 Nelson St, Vancouver, BC", dob: "1998-04-17", gender: "Male",
        image: "/Daniel.jpeg",
        physicalDescriptions: ["Short black hair", "Tall build", "Wears a watch"],
        convictions: [{ crime: "vandalism", date: "2023-12-06", sentence: "2 years" }],
    },
    {
        firstName: "Yeali", middleName: "Jamie", lastName: "Kim",
        address: "1300 Granville St, Vancouver, BC", dob: "2000-02-22", gender: "Female",
        image: "/Yeali.jpg",
        physicalDescriptions: ["Long black hair", "Slim build", "Brown eyes"],
        convictions: [{ crime: "identity theft", date: "2023-04-30", sentence: "3 years" }],
    },
];

// Guardian robots. Price slider in views/robots.ejs spans 0 - 10000.
const robots = [
    { model: "Guardian X1", manufacturer: "Hextech Industries", price: "1200", location: "Vancouver", type: "Patrol" },
    { model: "Guardian X3", manufacturer: "Hextech Industries", price: "2400", location: "Vancouver", type: "Patrol" },
    { model: "Sentinel Pro", manufacturer: "Piltover Robotics", price: "3600", location: "Burnaby", type: "Surveillance" },
    { model: "Sentinel Max", manufacturer: "Piltover Robotics", price: "5200", location: "Burnaby", type: "Surveillance" },
    { model: "Bulwark 700", manufacturer: "Demacia Defense", price: "6800", location: "Richmond", type: "Defense" },
    { model: "Bulwark 900", manufacturer: "Demacia Defense", price: "8400", location: "Richmond", type: "Defense" },
    { model: "Escort Lite", manufacturer: "Zaun Dynamics", price: "900", location: "Surrey", type: "Escort" },
    { model: "Escort Elite", manufacturer: "Zaun Dynamics", price: "4300", location: "Surrey", type: "Escort" },
];

// Security drones. Price slider in views/drones.ejs spans 0 - 5000.
const drones = [
    { model: "Skywatch S1", manufacturer: "Hextech Industries", price: "800", location: "Vancouver", type: "Surveillance" },
    { model: "Skywatch S4", manufacturer: "Hextech Industries", price: "1600", location: "Vancouver", type: "Surveillance" },
    { model: "Nightfall N2", manufacturer: "Zaun Dynamics", price: "2200", location: "Burnaby", type: "Night Patrol" },
    { model: "Nightfall N5", manufacturer: "Zaun Dynamics", price: "3100", location: "Burnaby", type: "Night Patrol" },
    { model: "Falcon F1", manufacturer: "Piltover Robotics", price: "1400", location: "Richmond", type: "Pursuit" },
    { model: "Falcon F7", manufacturer: "Piltover Robotics", price: "3900", location: "Richmond", type: "Pursuit" },
    { model: "Aegis A2", manufacturer: "Demacia Defense", price: "2700", location: "Surrey", type: "Escort" },
    { model: "Aegis A6", manufacturer: "Demacia Defense", price: "4600", location: "Surrey", type: "Escort" },
];

// Cybersecurity plans, ordered cheapest first so higher tiers read as additive.
const cybersecurities = [
    {
        type: "Basic Shield",
        price: "19.99",
        features: [
            { service: "Firewall", description: "Blocks unauthorized inbound traffic on your home network around the clock." },
            { service: "Antivirus", description: "Scans downloads and attachments for known malware signatures." },
        ],
    },
    {
        type: "Advanced Shield",
        price: "49.99",
        features: [
            { service: "Intrusion Detection", description: "Monitors network traffic for suspicious patterns and alerts you in real time." },
            { service: "Identity Monitoring", description: "Watches public breach databases for your email addresses and credentials." },
            { service: "VPN Access", description: "Encrypts your connection on public networks in over thirty locations." },
        ],
    },
    {
        type: "Total Shield",
        price: "99.99",
        features: [
            { service: "24/7 Response Team", description: "Security analysts investigate and contain incidents on your behalf." },
            { service: "Device Recovery", description: "Remote lock and wipe for lost or stolen devices linked to your account." },
            { service: "Family Coverage", description: "Extends every protection to up to six household members." },
        ],
    },
];

async function seed() {
    const mongo_uri =
        process.env.MONGODB_URI ||
        `mongodb+srv://${mongo_user}:${mongo_password}@${mongo_host}/${mongo_db}`;

    await mongoose.connect(mongo_uri);
    console.log("Connected to MongoDB");

    // Replace sample data only. The users collection is deliberately left alone.
    await CriminalProfile.deleteMany({});
    await Robots.deleteMany({});
    await Drones.deleteMany({});
    await CyberSecurities.deleteMany({});

    await CriminalProfile.insertMany(criminals);
    await Robots.insertMany(robots);
    await Drones.insertMany(drones);
    await CyberSecurities.insertMany(cybersecurities);

    console.log("criminalprofiles:      " + (await CriminalProfile.countDocuments()));
    console.log("robotprofiles:         " + (await Robots.countDocuments()));
    console.log("droneprofiles:         " + (await Drones.countDocuments()));
    console.log("cybersecurityprofiles: " + (await CyberSecurities.countDocuments()));

    await mongoose.disconnect();
}

seed().catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
});
