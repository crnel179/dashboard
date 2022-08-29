# dashboard

### install dependencies:

npm i --legacy-peer-deps

## frameworks & libraries:

### styling:

tailwind
synfusion

## NOTES & COMMENTS for the dissertaion:

Tailwind is an amazing CSS framework which allows you to "rapidly build modern websites without leaving your HTML", or in this case, JSX. Instead of having separate CSS files, one is able to use utility-classes such as: flex, pt-4(padding-top: 4), text-center and so on, to style the app components easier and faster.

-   craco.config.js --- Short and sweet, it's an hacky layer on top of Create React App (CRA) to customize it's configuration. This is achieved by overriding the cache of the require calls made by CRA to replace the exported content with our customized configuration.

CRACO stands for => Create React App Configuration Overide

## steps & changes:

### planning:

1. brainstorming
2. card sorting
3. create Project structure
4. component tree mapping

### app development:

1. npx create-react-app
2. deleted unnecessary files
3. installed dependencies
4. added tailwind.config.js
5. added craco.config.js
6. added folders in src folder
7. added dummy data in /src/data folder
8. created 'Settings' button with syncfusion and styled it
9. adding the sidebar & navbar styling
10. adding the routes
11. creating the boilerplates for all the components & pages
12. creating index.jsx within components and pages folder to export all in the app with one line

13. adding functionality & styling to the sidebar component
14. implement the Context API, add it to the index.js and enhance functionality of App and Sidebar components
15. implement the navigation bar and its context
16. context to toggle sidebar on & off upon screen size/resize
