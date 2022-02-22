# Front-end
Created with React.js
The Premise: Instagram for food, post pictures with recipes, get ratings and comments, search for recipes by parameters, like and follow other users!

## Working Titles

* Social Meal-dia


## MVP 

* Full CRUD
* MERN
* Working frontend react and backend componenets

## Stretch Goals


* Link posts and users for edit permissions/ delete permissions
* Add comments linked to users, ratings/interactions
* Advanced search features (tag searching, ingredients, calorie searching, categories...)
* Multer.io for pictures of food.
* Social media buttons...guugghh

## User Stories

* As a User, I can upload recipes with pictures
* As a User, I can rate recipes
* As a User, I want to be able to find reicpes by parameters
* As a User, I want to be able to interact with users*
* As a User, I want to be able to filter recipes

## Models

Posts;

[
    {
        image:
        name:
        calories:
        recipes: [
         ingredients: []
         instructions: []
         recipeFacts: [
            servings:
            cooktime:
         ]
                 ]
        timestamp:
        likes: [+,-]
    }
]

Users;

[
    email: ,
    username: ,
    password: ,
    profile*:[
      profileImage:,
      about:,
      name:
    ]    
]

Basic frontend, Nick
Basic Backend, Tamara

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/cookbook-group/front-end">
    <img src="https://res.cloudinary.com/dsruc2myl/image/upload/v1645483491/Project_3/zjjjr772beeecwbond4u.webp" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Social Meal-Dia</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/Cookbook-Group/front-end"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/cookbook-group/front-end">View Demo</a>
    ·
    <a href="https://github.com/cookbook-group/front-end/issues">Report Bug</a>
    ·
    <a href="https://github.com/cookbook-group/front-end/issues">Request Feature</a>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
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

[![Screen Shot][product-screenshot]](https://res.cloudinary.com/dsruc2myl/image/upload/c_scale,w_993/v1645480813/Project_3/q2ezmpgdbacfz95sr4ch.png)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email`, `email_client`, `project_title`, `project_description`

This is Social-Meal-Dia, a MERN stack social media app for posting food, recipes, and reviews.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://cloudinary.com/](https://cloudinary.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/cookbook-group/front-end.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This social meal-dia app can be use to share food images, calories, ingredience, and recipies with other users.  You also have the ability to like recepies, and follow other users.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [] Cloudinary Implementation
- [] Smoother Data Population
- [] Screening Selfies
    - [] Nested Feature

See the [open issues](https://github.com/cookbook-group/front-end/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Nicholas Tonelli - [@twitter_handle](https://twitter.com/twitter_handle) - nicholasevantonelli@gmail.com

Tamara Wilburn- [@linkedin handle] (https://www.linkedin.com/in/tamara-wilburn-905842227/ - TamaraAndreaWilburn@gmail.com

Voravadee Rocco - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Winnie Bolm  - [@linkedin_handle](https://www.linkedin.com/in/winniebolm/) - winnie.bolm@gmail.com

Project Link: [https://github.com/cookbook-group/front-end](https://github.com/cookbook-group/front-end)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Voravadee Rocco](for conceptulizing/bringing to life of the app)
* [Winnie Bolm](for conceptulizing/bringing to life of the app)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/cookbook-group/front-end/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/cookbook-group/front-end/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/cookbook-group/front-end/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/cookbook-group/front-end/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/cookbook-group/front-end/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: image/screenshot.png
