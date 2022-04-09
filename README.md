[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Project #2: Building Your First Backend Application

## RoadMap
 * Intro - 4/9
 * Proposals Due - 4/13
 * Proposal Finalized - 4/16
 * Attend initial mandatory standup - 4/16
 * Attend standups or use progress form - Tu/We/Sa
 * Attend Office Hours at least once
 * Submit Your Work + Present - 4/30

## Technical Requirements
For this project, you will be making a full CRUD app using the technologies outlined below. When thinking of an app idea, try to frame the project in terms of trying to solve a "problem" and think about the purpose of the app, who would use it, etc. The problem doesn't have to be anything intense and can be something small and simple! For example:

  >**Problem:** I have a huge enamel pin collection and want to organize it all in one place<br>
  >**General App Idea/Purpose:** An app that allows me to catalogue all my pins by category <br>
  >**Who Would Use It:** Pin collectors
  
You will use Handlebars, or EJS to build templates that do server-side rendering, or build a frontend that uses fetch or axios and DOM-manipulation based on JSON from your backend (in the style of the [GAphy app](https://git.generalassemb.ly/flex-125/express-api-lab))

Do Not Do Non-CRUD Applications Such As:
 - Games
 - Portfolio, or presentational pages
 - Marketing or content oriented websites

### &#128994; Proposals:
#### Proposal Requirements

* User stories detailing app functionality
* MVP + Stretch Goals
* Wireframes with basic page layouts
* Models including field names and their datatypes
* A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)

You will meet with an squad leader to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

**Submit Project proposal [here](https://git.generalassemb.ly/staging-125/project-2/issues/new?assignees=&labels=&template=project-proposal-submission.md&title=Your+Name+%7C+Section+Color) by Tuesday April 13 6:00pm ET.**

### &#x1F534; Mandatory to pass:
#### MVP - Minimum Viable Product

* A working full-stack application, built by you, using **Node.js, Mongoose, Express and {EJS || HBS || DOM manipulation}**
* Adhere to the **MVC** file structure: Models, Views, Controllers
* At least one model with all 5 **RESTful routes** and full **CRUD**.
* :heavy_exclamation_mark: A git repository **not inside the class repo**.  (to github.com)
* At **least one** Github commit per "day of class".
* **Be deployed online** and accessible to the public via **Heroku**
* **A ``README.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
* Inside Your `README.md`:
    * Include User Stories
    * Include **wireframes** that you designed during the planning process
    * Have a **link to your hosted working app**.

### &#x1F535; Stretch Goals (Not Mandatory):

* Add a second model that are associated in some way (e.g. one-to-many, many-to-many, etc) see [this lesson for notes](https://git.generalassemb.ly/flex-125/express-apis-json#crud-with-two-related-models)
* Include portfolio-quality styling
* Use a CSS framework like Skeleton, Bootstrap, Materialize, etc...
* Use a third party API
* Incorporate **Google Maps**
* Allow users to upload files with **Multer** (note, this can be tricky with heroku)
* Enable user authentication with **passport.js**

## GitHub Project Repo

:heavy_exclamation_mark: **REMEMBER:** For all projects, you will be creating the new repo's on [GitHub](https://github.com/), **not** GitHub Enterprise!


## Setup for Heroku Deployment


We will walk through deploying your app to production next week. We'll use a service called Heroku. Feel free to read through the docs and see if you can deploy on your own.

[Heroku Node App Deployment Docs](https://devcenter.heroku.com/categories/nodejs-support)

To prepare for the Heroku deployment lesson on **April 16th**.


## Technical Demonstration

All projects will be presented to the class. Your presentation should be:

* **Approximately 5-10 minutes in length**
* Save some time for Q&A at the end
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make
* Talk about one new thing you learned during this project (can be something technical, or even something more open ended like time management, etc.)

You will be sharing your app and your code.  Be prepared to answer questions from the instructors and other students.


## How to Submit Your Project


Your project is due on saturday, April 30 at 9:00 AM ET. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Submit your project by adding an issue to [this repo](https://git.generalassemb.ly/flex-125/project2-gallery/issues).

Your issue should include:

- Link to your GitHub Repo
- Link to your deployed Heroku app.

<br>


## Where to go for help during project week

We ask that you take the following steps when dealing with technical questions...

- Google your exact problem or error
- Reference the appropriate lesson plan
- Use the [rubber duck method](https://rubberduckdebugging.com/)
- After this steps if you still facing the issue, post your question on the Debuging Channel. (Explain your issue and post a piece of your code in the thread, so the channel don't get to much clutter.)

If your question is non-technical -- you're feeling overwhelmed, or you have questions about a homework or project prompt -- please reach out directly to an **Section Lead + IA** as soon as possible.

Also:
- Use your squad standup and Study Room to work with people on the same problem.
- Use in-class and out-of-class Office Hours*

*: token required

### Office Hours Tokens

Each student will get *6* tokens to utilize Office Hours during Project 2. Tokens are designed to get you industry ready and be ready to debug issues yourself. 

Each time a student signs up for Office Hours - during in-class office hours, or inidividual insturctor office hours outside of class time - takes 1 token. Office hours get you 15 minutes of debugging support.

To maximize your time, make sure to prepared to discuss: 1.) "expected behavior" 2.) "observed behavior" 3.) debugging tried so far - console-logs server side, developer tools on the frontend, etc. 4.) solutions already tried.

Squad standups, and logistical questions (e.g. about requirements, project proposal, times, etc) to you squad-lead to not take a token. Study Rooms do not take a token.



## Etc.

<details><summary><strong>Suggested Ways to Get Started</strong></summary>

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the app(what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
</details>


<details><summary><strong>Think about...</strong></summary>

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?
</details>

## Exercise - Proposal + Elaborate on GAphy

Let's use Gaphy and think about how we'd build a sample proposal and also think about how we'd elaborate it into stretch goals. What kind of things would be cool to add? What would be the difficulty associated with them?

## Planning Resources + Advanced

Check out this [guide](./planning.md)

## **Project Planning Deliverables**

### **Scope**

Software development is about managing complexity. It's easy for code to become a tangled web of tightly coupled functions or data structures ([callback hell](http://callbackhell.com/), anyone?) if you aren't diligent and vigilant in your decision-making.

The same applies to the scope of your project. If you're always looking at the top of the mountain, you'll trip on the rocks in front of you.

![https://cloud.githubusercontent.com/assets/7833470/11330092/f76e7c50-9159-11e5-875f-748817e41afc.png](https://cloud.githubusercontent.com/assets/7833470/11330092/f76e7c50-9159-11e5-875f-748817e41afc.png)

Figure out the absolutely smallest thing you can do, and do that thing. Not the next immediate thing, but the simplest possible implementation of your app. If that means that the entire functionality of your app consists of displaying all of a user's photos from their Flickr account and saving a favorite photo url to the database that is totally great.

### **User Stories**

Outline your core user stories, and divide them into clear, smaller steps (sometimes called development "stories"). For example, this user story:

*As a user, I want to create a profile for my dog.*

Might consist of these steps:

- Wireframe what a profile page will look like.
- Create a template for a profile page
- Write a server route to serve the profile page
- Create a schema for a dog, defining attributes (e.g. name, age, favorite chew toy, etc.).
- Create a page / form / route to create a new user in the database.
- Serve the profile page and populate it with information from the database.

Use your own [Trello](https://trello.com/) board to track your progress and keep you focused. Make each card a user story, and mark it with a time estimate. You can make the steps for that user story into a checklist on the card (or individual cards, if you prefer). For a more accurate estimate, double the time you think it will take.

Add comments to your cards as you progress and complete features. By the end of your project you'll have a living log of "gotchas" you debugged and things you learned about the process of iteratively developing an app.

### **Wireframes and User Flow**

Sketch out the pages of your app. What will they look like? How they will work, both on page-load and when affected by jQuery?

Iterate on your wireframes. Start simple: draw some boxes. Add some text to the boxes to indicate what they represent, like the header, sidebar, images, titles, articles, and so on.

![https://cloud.githubusercontent.com/assets/7833470/11330149/d84f3e94-915a-11e5-9b7d-31c41492dd6b.jpg](https://cloud.githubusercontent.com/assets/7833470/11330149/d84f3e94-915a-11e5-9b7d-31c41492dd6b.jpg)

Next, incorporate some notes on what the actual content will be. Remember, it's okay if it's still a sketch. Either of the wireframes below would work well to solidify your plan.

![https://cloud.githubusercontent.com/assets/7833470/11330157/fbfaf388-915a-11e5-927c-1fa228b70f12.jpeg](https://cloud.githubusercontent.com/assets/7833470/11330157/fbfaf388-915a-11e5-927c-1fa228b70f12.jpeg)

It's easier to do these steps on paper than in code, so iterate frequently at this stage to save yourself time down the road.

Once you have wireframes for the different pages of your site, you can wireframe how the pages will connect to each other by drawing the user flow.

![https://cloud.githubusercontent.com/assets/7833470/11330163/1df572f6-915b-11e5-9458-a37dcc670360.png](https://cloud.githubusercontent.com/assets/7833470/11330163/1df572f6-915b-11e5-9458-a37dcc670360.png)

The more time you spend on this step, the easier it will be to structure your HTML. Well-structured HTML will make it easier to implement your CSS, to manipulate the DOM, and to figure out what routes you need to get data for the page.

### **Data Models and ERD**

Use an entity relationship diagram (ERD) to plan out your data models and any relationship(s) among them. In your diagram, write out the properties for your schemas. Make sure to answer these questions:

- Will your application have many models or only a few?
- How will the models interact with each other?
- What attributes (properties) will the schemas have, and what kind of data types (string, integer, collection, etc.) will they use?

### **Numerical Categories for Relationships**

### **One-to-One**

Each person has one brain, and each (living human) brain belongs to one person.

![https://cloud.githubusercontent.com/assets/3254910/18140904/4d85c04e-6f6c-11e6-8301-c06bacff3dd3.png](https://cloud.githubusercontent.com/assets/3254910/18140904/4d85c04e-6f6c-11e6-8301-c06bacff3dd3.png)

One-to-one relationships can sometimes just be modeled with simple attributes. A person and a brain are both complex enough that we might want to have their data in different models, with lots of different attributes on each.

### **One-to-Many**

Each leaf "belongs to" the one tree it grew from, and each tree "has many" leaves.

![https://cloud.githubusercontent.com/assets/3254910/18182445/e4bddb6c-7044-11e6-9099-314b773724f3.png](https://cloud.githubusercontent.com/assets/3254910/18182445/e4bddb6c-7044-11e6-9099-314b773724f3.png)

### **Many-to-Many**

Each student "has many" classes they attend, and each class "has many" students.

![https://cloud.githubusercontent.com/assets/3254910/18140903/4c56c3ee-6f6c-11e6-9b6d-4c6ffae81323.png](https://cloud.githubusercontent.com/assets/3254910/18140903/4c56c3ee-6f6c-11e6-9b6d-4c6ffae81323.png)

### **Entity Relationship Diagrams**

Entity relationship diagrams (ERDs) represent information about the numerical relationships between data, or entities.

![https://cloud.githubusercontent.com/assets/3254910/18141666/439d9392-6f6f-11e6-953f-c91415b85f3f.png](https://cloud.githubusercontent.com/assets/3254910/18141666/439d9392-6f6f-11e6-953f-c91415b85f3f.png)

Note: In the example above, all of the Item1, Item2, Item3 under each heading are standing in for attributes.

[More guidelines for ERDs](http://docs.oracle.com/cd/A87860_01/doc/java.817/a81358/05_dev1.htm)

### **Feasibility Check**

Before you get started, you'll want to do some research to see if what you're looking to do is possible in the amount of time you have. Some areas that you might want to investigate, depending on your app's desired functionality are:

- reading the documentation for an external api to determine what data you can request. Is it JSON? XML? Is all the information you want included in the response? Will you need to make several different requests to the API? Do you need to sign up and wait for approval to use the API?
- verifying that you can successfully request data from your API with Postman or `curl`.
- researching something you want to use that hasn't been taught in class yet, like an external library or module, data store, etc.

### **Example Feasibility Checks**

- [ ]  Read Yelp API documentation.
- [ ]  Use Postman to test Twilio API.
- [ ]  Write a script to scrape news data.

## **Outside-In Development**

Outside-in development says you should start with the "outside" of your app - the views that the user sees - and move backwards to the server, then the database. Don't try to develop the whole front end of your app before moving on, but for each user story, page, or feature, you can follow the outside-in pattern.

Start with the basics of your view:

- [ ]  An `index.html` file with static data directly in the file.
- [ ]  Create an EJS client-side template based on the HTML structure.
- [ ]  Use the template to display dynamic data from a temporary array on the client-side.
- [ ]  Run `npm init` to set up your Node/Express app.
- [ ]  Install necessary node modules, and set up boilerplate Express app.
- [ ]  Test your ruoutes and views with a temporary array on the server, and set up a `GET` request to respond with the data.
- [ ]  Set up MongoDB/Mongoose, and move the data to your database.

Once you have an index page populated with data from the database, you can move on to other views or features. Your data is already in the database, but try to follow the outside-in process to:

- [ ]  Make a button that allows you to edit a specific data item.
- [ ]  Create the `PUT` route on your server that updates individual items in the database.)

<details><summary><strong>Useful Resources</strong></summary>

* **[Heroku](http://www.heroku.com)**
* **[Good User Story Guide](https://www.atlassian.com/agile/project-management/user-stories)**
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)**
* **[Mongo Documentation](https://docs.mongodb.com/manual/)**
* **[Mongoose Documentation](http://mongoosejs.com/docs/guide.html)**
</details>
<hr>  
