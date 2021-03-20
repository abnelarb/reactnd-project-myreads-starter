# MyReads Project By Mohammed Kamal : 
-My Reads is a bookshelf app to categorize books in three categories  [Read, Currently Reading, Want To Read] made by React using an API Server to get books for categorisation  for Udacity Project 

# Installation :
* install all project dependencies with `npm install`
* start the development server with `npm start`
- or 
* install with yarn `npm install --g yarn`
* start with yarn `yarn start`
- Run the Application on the Browser `http://localhost:3000`
## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── Book.js # This is the Book Js File. 
    ├── Footer.js # This is the Footer Js File.
    ├── Search.js # This is Search Button File to add Books to project. 
    ├── SearchBooks.js # This is the Search Page . 
    ├── Shelf.js # This is the shelf layout Js file.
    ├── ShelfMove.js # This is The moving between shelves Context.
    ├── ShelvesList.js # This is the list of shelves .
    ├── BookList.js # This is the list of books in each category.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## WalkThrough :
- Setup the starter code after clone it from https://github.com/udacity/reactnd-project-myreads-starter.
- Installed the react-router-dom package to control the root and Link between Pages
- Modified the roots on the main index.js file.
- Made required React Components and stateless functions from the base code.
- Configured the required props and stats for the project on each Component. 
- Got the Books Data from the backend server through the API BooksAPI.js
- Configured the required Functions to control the page and shelves .
- Configured the required functions to control the search page and also to include the escape method for characters.
- Configured functions to update the library by the search page .
- Tested all the functions on the page .
- Submitted for Review to udacity depending on the rubrics file https://review.udacity.com/#!/rubrics/918/view .

## Demo:
-demo
https://codesandbox.io/s/cocky-cherry-iy8hy
https://iy8hy.csb.app/