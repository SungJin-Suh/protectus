<div align="center">
    <img width="50%" src="./public/logo.png" />
    <h1>ProtectUs</h1>
</div>


## 📖 Project Description

Crime rates have tripled over the past three decades since 2024. ProtectUs enables users to obtain crime and criminal information depending on their current location to keep our loved ones safe. We provide protection solutions for our clients to tackle these threats surrounding them.

🔗 **Live demo:** [protectus.onrender.com](https://protectus.onrender.com) sign up with any email to look around 😃.

## 💞 Names of Contributors

- Seogin Hong ([@seogin](https://github.com/seogin))
- Shawn Rim ([@Shawn-Rim](https://github.com/Shawn-Rim))
- David (Sungjin) Suh ([@SungJin-Suh](https://github.com/SungJin-Suh))
- Daniel Myung Kyu Kim ([@dkiimm](https://github.com/dkiimm))
- Jamie (Yeali) Kim ([@yeali-kim](https://github.com/yeali-kim))


## 💻 Technologies and Resources Used

List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.

- JavaScript, CSS
- [EJS v3.1.10](https://www.npmjs.com/package/ejs)
- [Tailwind v3.4.3](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/products/platform/atlas-database) connected by [Mongoose v8.3.4](https://mongoosejs.com/)
- [Node](https://nodejs.org/en)
- [Express v4.19.2](https://expressjs.com/)
- [express-session v1.18.0](https://www.npmjs.com/package/express-session)
- [dotenv v16.4.5](https://www.dotenv.org/)
- [Joi v17.13.1](https://joi.dev/)
- [bcrypt v5.1.1](https://github.com/kelektiv/node.bcrypt.js)
- [CORS v2.8.5](https://www.npmjs.com/package/cors)
- [Google Map API v1.16.6](https://developers.google.com/maps)
- [noUiSlider v15.7.2](https://www.npmjs.com/package/nouislider)
- [Splide](https://splidejs.com/)
- [method-override v3.0.0](https://www.npmjs.com/package/method-override)

**Server Variables:**

| Key                    | Usage                                         |
| ---------------------- | --------------------------------------------- |
| MONGODB_HOST           | The hostname of your MongoDB server.|
| MONGODB_USER           | The username used to authenticate with your MongoDB server.|
| MONGODB_PASSWORD       | The password used to authenticate with your MongoDB server.|
| MONGODB_DATABASE       | The name of the MongoDB database your application will connect to.|
| NODE_SESSION_SECRET    | The secret key used to sign the session ID cookie by the Express session middleware.|
| SALT_ROUNDS            | The number of rounds to use when hashing passwords with bcrypt.|
| GOOGLE_MAPS_API_KEY    | The API key used to authenticate with the Google Maps API.|


### Use of AI

#### 1. Did you use AI to help create your app? If so, how? Be specific.
Yes, we used GitHub Copilot and ChatGPT to help create our app. Specifically, we utilized these AI tools to debug errors and resolve logic issues in our code. They provided suggestions and code snippets that improved our development efficiency and helped us overcome technical challenges.

#### 2. Did you use AI to create data sets or clean data sets? If so, how? Be specific.
No, our AI tools were not used to create or clean data sets. The dataset management was handled manually and through our own scripts.

#### 3. Does your app use AI? If so, how? Be specific.
Currently, our app does not have any built-in AI functionality. However, in the future, we plan to integrate AI to recommend protection services to users based on their needs and usage patterns.

#### 4. Did you encounter any limitations? What were they, and how did you overcome them? Be specific.
Yes, we encountered several limitations while using AI tools. One major issue was that the AI did not always provide working code. To overcome this, we had to manually write and debug the code suggested by the AI. This process involved testing different approaches and refining the AI-generated code until it met our requirements.


### Image Resources Used

- [League of Legends Wiki](https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki)

## ⚙️ Complete setup/installion/usage

Here's how to get started once you've cloned the project:

- Download [Node](https://nodejs.org/en)
- Download [VS Code](https://code.visualstudio.com/)
- Set up MongoDB Atlas with corresponding database structure as per schema
- Set up Google Map API key
- npm i: Install all dependencies
- node server.js: Initiate server and connect to local host

### Completed Testing

- [Testing Log](https://docs.google.com/spreadsheets/d/17Mjc_EDb-M2MrIbCtokkriNpgNQFkDFWWNPqf6zoVag/edit?usp=sharing)

### Usage

- Sign up or log in
- If user refuses location sharing, default user location will be BCIT Downtown Campus
- User can click on markers to obtain more information on the criminal
- Criminals can be viewed on list view as well
- Clicking on ProtectUs buttons on criminal details will lead the user to Protection Services that they can order
- Order history is available on profiles page


- [Demonstration/Presentation Video](https://youtu.be/t0nDQmW4I10)


## 🪲 Known Bugs and Limitations

- Layout optimized for iPhone 14 Pro Max environment

## 🔮 Features for Future

- Integration with real-time criminal data APIs to provide up-to-date and localized crime information.
- AI-driven recommendations for protection services tailored to specific crime patterns and user location data.

## 📂 Contents of Project Folder

###     Top level of project folder:
 ```
├── .gitignore          # Git ignore file
├── .env                # Server environment variables (injected by dotenv)
├── package-lock.json   # Ensures consistent installations of dependencies across environments
├── package.json        # Defines the project's metadata, dependencies, scripts, and configuration
├── README.md           # Project overview, instructions, and documentation
├── tailwind.config.js  # Configuration file for customizing Tailwind CSS settings


```
### Subfolders and files:
```
├── .vscode                  # Folder for VS Code settings
│   └── settings.json        # Live server settings
│
├── public                   # Folder for images
│   ├── Ashe.webp
│   ├── Braum.webp
│   ├── Daniel.jpeg
│   ├── David.jpeg
│   ├── Draven.webp
│   ├── Ezreal.webp
│   ├── Hwei.webp
│   ├── Jhin.webp
│   ├── Jinx.webp
│   ├── Kaisa.webp
│   ├── Karma.webp
│   ├── logo.png
│   ├── logoWName.png
│   ├── Luxanna.webp
│   ├── Milio.webp
│   ├── Mundo.webp
│   ├── Olaf.webp
│   ├── Pyke.webp
│   ├── Samira.webp
│   ├── Sarah.webp
│   ├── seogin.png
│   ├── Seraphine.webp
│   ├── Sett.webp
│   ├── Shaco.webp
│   ├── Shauna.webp
│   ├── Shawn.jpeg
│   ├── Silco.webp
│   ├── Sivir.webp
│   ├── Talon.webp
│   ├── Taric.webp
│   ├── Tobias.webp
│   ├── Udyr.webp
│   ├── Varus.webp
│   ├── Vi.webp
│   ├── Viktor.webp
│   ├── Yasuo.webp
│   ├── Yeali.jpg
│   └── Zeri.webp
│
├── scripts                  # Folder for scripts
│   └── server.js            # Main server-side JavaScript file
│
└── views                    # Folder for view templates
    ├── templates            # EJS templates for rendering the frontend
    │    ├── filter.ejs                   # Template for filtering criminal data on map
    │    ├── footer.ejs                   # Footer section of the web pages
    │    ├── header.ejs                   # Header section with navigation
    │    ├── headerHamburgerOnly.ejs      # Header with hamburger menu only
    │    ├── orderHistory.ejs             # User's history of ordered protection solutions
    │    └── orderSummary.ejs             # Summary of a user's current order
    ├── cybersecurity.ejs            # Information and services for cybersecurity threats
    ├── drones.ejs                   # Information about security drone services
    ├── index.ejs                    # Home page showing login and signup
    ├── list.ejs                     # List view displaying criminal data
    ├── login.ejs                    # User login page
    ├── loginErrorPage.ejs           # Error page for login failures
    ├── map.ejs                      # Map view displaying criminal data
    ├── profile.ejs                  # User profile page
    ├── protection.ejs               # Details of available protection solution types
    ├── resetPassword.ejs            # Page for resetting user password
    ├── resetPasswordProfile.ejs     # Page for password reset from profile page
    ├── robots.ejs                   # Information about guardian robot services
    └── signup.ejs                   # User signup page
```
