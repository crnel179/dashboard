# dashboard

### install dependencies:

npm i --legacy-peer-deps

## frameworks & libraries:

### styling:

tailwind
synfusion

## comments:

Tailwind is an amazing CSS framework which allows you to "rapidly build modern websites without leaving your HTML", or in this case, JSX. Instead of having separate CSS files, one is able to use utility-classes such as: flex, pt-4(padding-top: 4), text-center and so on, to style the app components easier and faster.

-   craco.config.js --- Short and sweet, it's an hacky layer on top of Create React App (CRA) to customize it's configuration. This is achieved by overriding the cache of the require calls made by CRA to replace the exported content with our customized configuration.

CRACO stands for => Create React App Configuration Overide
