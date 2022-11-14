# contact-card

## User Story

As a web developer, 

- I want to leverage tools such as Lighthouse 
  - so that I can optimize my web application’s performance and ensure that I'm adhering to accessibility standards.
- I want to store all of my front-end code in a client folder 
  - so that there is a clear separation between the front end and back end in my application architecture.
- I want to store all of my back-end code in a server folder 
  - so that there is a clear separation between the front end and back end in my application architecture.
- I want to have central control of both the back-end and front-end applications from the root using package.json and the Concurrently package.
  
## Acceptance Criteria

- It is done when I have inspected the demo code and identified potential performance bottlenecks.
- It is done when I have installed the Lighthouse Google Chrome extension and used it to run an audit over a deployed version of the demo code.
- It is done when I can view key performance metrics of a PWA and key diagnostics.
- It is done when I have a client folder at the root of my project.
- It is done when I have a src folder that contains all of my assets (CSS, images, JavaScript). The src folder is within the client folder.
- It is done when my client folder has a package.json file.
- It is done when I have a server folder at the root of my project.
- It is done when my server folder has its own package.json.
- It is done when I have used Express.js to create a server that has one GET route that serves the index.html file within the client folder
- It is done when I add scripts to the root package.json to navigate the client-server model.
- It is done when I can identify the role of each package.json file (client, server, root).
- It is done when I implement the Concurrently package.
