<!-- For assistance using this README for your project, reach out to your instructinoal staff. -->

<!-- TODO: Highlight "J0263" and shift+command+L (for mac) or cntrl+shift+L (for windows) to select all instances of the example Github Username and type your Username in its place -->
<!-- TODO: Highlight "Movie-Review" and shift+command+L (for mac) or cntrl+shift+L (for windows) to select all instances of the example Github Repository name and type your repostitory name in its place -->

<div align="center">

  <!-- Add additional badges using the following format: -->
  <!-- ![Name](urlToShieldHere)(urlToGithubHere) -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributors](https://img.shields.io/github/contributors/J0263/Movie-Review.svg?style=plastic&logo=appveyor)](https://github.com/J0263/Movie-Review/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/J0263/Movie-Review.svg?style=plastic&logo=appveyor)](https://github.com/J0263/Movie-Review/network/members)
[![Stargazers](https://img.shields.io/github/stars/J0263/Movie-Review.svg?style=plastic&logo=appveyor)](https://github.com/J0263/Movie-Review/stargazers)
[![Issues](https://img.shields.io/github/issues/J0263/Movie-Review.svg?style=plastic&logo=appveyor)](https://github.com/J0263/Movie-Review/issues)

</div>

<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/J0263/Movie-Review">
  <!-- TODO: Correct this file path to a logo if you would like one; otherwise, delete this a href -->
    <!-- <img src="./public/images/" alt="Logo" width="80" height="80">
  </a> -->

<!-- TODO: Edit App name -->
  <h3 align="center">Reel Reviews</h3>

  <p align="center">
  <!-- TODO: Edit App description -->
    Browse the web for your favorite movies and leave a review for your fellow cinephiles! This app allows you to dig through the omdbapi database of films and create reviews that are then saved to your profile by logging in. Not sure what to watch? Our homepage displays the top movies of the year and shows the poster for each by calling upon the API. We hope you enjoy!   <br />
    <a href="https://github.com/J0263/Movie-Review"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- TODO: Edit deployment link -->
    <a href="https://github.com/J0263/Movie-Review">View Demo(Coming Soon)</a>
    ·
    <a href="https://github.com/J0263/Movie-Review/issues">Report Bug</a>
    ·
    <a href="https://github.com/J0263/Movie-Review/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- TODO: add your screenshots or demo videos here -->
<!-- Add screenshots using the following format: -->
<!-- ![Screenshot alt description](directPathOfScreenshots) -->
<!-- Add video demos using the following format: -->
<!-- ![Video alt description](directPathOfVideos) -->

This project was built using Node, Express, Handlebars, PostgreSQL, and Sequelize.

### Built With

<div align="center">

<!-- TODO: Add any additional badges as needed. For more info, visit: https://github.com/J0263/empty-resources/blob/main/assets/images/shields.md -->

[![Javascript](https://img.shields.io/badge/Language-JavaScript-ff0000?style=plastic&logo=JavaScript&logoWidth=10)](https://javascript.info/)
[![CSS](https://img.shields.io/badge/Language-CSS-ff8000?style=plastic&logo=CSS3&logoWidth=10)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Framework-Node.js-ffff00?style=plastic&logo=Node.js&logoWidth=10)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/Framework-Express-80ff00?style=plastic&logo=Express&logoWidth=10)](https://expressjs.com/)
[![npm](https://img.shields.io/badge/Tool-npm-00ff00?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/)
[![Bcrypt](https://img.shields.io/badge/Package-Bcrypt-00ffff?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/package/bcrypt)
[![VS Code](https://img.shields.io/badge/IDE-VSCode-0000ff?style=plastic&logo=VisualStudioCode&logoWidth=10)](https://code.visualstudio.com/docs)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-8000ff?style=plastic&logo=PostgreSQL&logoWidth=10)](https://www.postgresql.org/docs/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-007ACC?style=plastic&logo=typescript&logoWidth=10)](https://www.typescriptlang.org/)
[![Dotenv](https://img.shields.io/badge/Package-Dotenv-00b894?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/package/dotenv)
[![Express](https://img.shields.io/badge/Framework-Express-80ff00?style=plastic&logo=express&logoWidth=10)](https://expressjs.com/)
[![pg](https://img.shields.io/badge/Package-pg-0984e3?style=plastic&logo=postgresql&logoWidth=10)](https://www.npmjs.com/package/pg)
[![Sequelize](https://img.shields.io/badge/Package-Sequelize-6c5ce7?style=plastic&logo=sequelize&logoWidth=10)](https://sequelize.org/)
[![Nodemon](https://img.shields.io/badge/DevDependency-Nodemon-d63031?style=plastic&logo=nodemon&logoWidth=10)](https://www.npmjs.com/package/nodemon)
[![JWT](https://img.shields.io/badge/Package-JWT-000000?style=plastic&logo=jsonwebtokens&logoWidth=10)](https://jwt.io/)


</div>

<!-- GETTING STARTED -->

## Getting Started

Once completely built, this application will function as a deployed app on Render.

### Local Installation / Testing

1. Clone the rep

```
git clone https://github.com/J0263/Movie-Review.git
```

2. Install dependencies

```
npm i
```

3. Seed the database

```
npm run seed
```

4. Launch the app in development environment

```
npm run start
```

5. Visit app:

[Reel Reviews](https://reel-reviews.onrender.com/)

<!-- ROADMAP -->

## Roadmap

<!-- TODO: Plan out rough roadmap here -->

#### MVP

<!-- This is a nested check-box that displays a nice checked or unchecked list on your Github repo to show your visitor's a quick road map! -->

- [X] Front End

  - [X] User Auth
  - [X] User Profile Page
    - [X] Routing
    - [X] Styling
  - [X] Landing Page
    - [X] Routing
    - [X] Styling

- [X] Back End
  - [X] User Auth
  - [X] Models
  - [X] Seeds
  - [X] api Routing

#### Future Development

- [ ] Interactions/message boards with other users
- [ ] Page that displays the userbases top movies based on accumulated star rating 

See the [open issues](https://github.com/J0263/Movie-Review/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

<!-- LICENSE -->

## License

This project is licensed under the MIT license.

<!-- CONTACT -->

## Contact

<!-- TODO: Add your name, portfolio link, and email if you would like here -->

Brandon Lanes - brandonlanes@gmail.com

Jorge Bush - Jorge.bush12@gmail.com

Miiy'a Murphy - melonmiiya@gmail.com

Owen Gayle - owengayle19@gmail.com

Project Links:

[Github Repository](https://github.com/J0263/Movie-Review)

<!-- TODO: add your deployment link here -->

[Deployment](https://reel-reviews.onrender.com/)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

<!-- TODO: Add any acknowledgements you would like here -->

Example MVC folder structure provided by 2U Instructional staff [Mary Elenius](https://maryelenius.com/)

The wonderful TA's and Dan Mueller for all their assistance.

Bootcamp Tutors (Alistair, Andres)

AI - Xpert Learning Assistant, AskBCS Learning Assistant, ChatGPT

