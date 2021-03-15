#### Project Structure

~~~~
├───components
│   ├───common
│   ├───contacts
│   │   ├───common
│   │   ├───contactCard
│   │   ├───createContact
│   │   ├───deleteContact
│   │   └───updateContact
│   └───routes
├───config
├───hooks
├───interfaces
│   ├───contact
│   ├───feedback
│   ├───redux
│   └───routes
├───pages
│   └───contacts
│       └───services
├───services
│   ├───errors
│   ├───feedback
│   └───storage
├───store
├───typography
└───validation
~~~~

#### Run the application
##### Development
`npm run start`

##### Production
`npm run build`

#### Technology Stack
The application it's developed in React.js  using Typescript, Babel is used for 
converting the React and Typescript code to Javascript, while Webpack5 is used for
bundling the code and reference the bundles in the `index.html` file.

Project is using Redux for state management and IndexedDB for keeping the data persistent.

All routes are defined in `src/config/routes` and then mapped in the `Routes` component using `react-router` library.

All pages are located in `src/pages` and each page is consist of smaller components
located in `src/components`


