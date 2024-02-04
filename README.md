# Chronicles

FrontEnd: React <br/>
BackEnd: Node/Express <br/>
DB: MongoDB <br/>

## Purpose

Create simple spa which chronicles useful knowledge & wisdom in the field of AI & Development

### Key Lessons - FrontEnd

1. CreateBrowser is the latest BrowserRouter which allows API Calls
2. In CreateRoutesFromElements, only a single Route parent is allowed
3. In order to set Header and Footer with CreateBrowserApp, you need to:
   - Define Header and Footer in App.js
   - Include App.js as the base element in createRoutesFromElements
4. You will need to set index={true} on the HomePage
5. Router will need to be provided in RouterProvider
6. In App.js. The Outlet component allows react to pass in the child components of whatever it routes too. Why ? So we can include the header and footer as global components
7. Use React Bootstrap documentation to get skeleton code for Header,Footer,Navigation, Cards, etc
8. Implement axios to make API request calls to backend
9. When button clicked, and want to navigate to another page. Use the useNavigate functionality along with the URL Path. This will route to the proper page using react router

### Key Lessons - BackEnd

1. Start with implementing Base functionality in server.js.
   - Then slowly add functionality in routes
   - Then finally in controller.
   - This will ensure you have consistent behaviour all the way
2. Use cors() to prevent CORS policy error
3. You can define the .env in the root folder and have seperate Frontend and Backend funcitonality
   - Define it in the rootfoler by providing the path ex: dotenv.config({path: '../.env',})
4. Make sure to use asyncHandler to handle any errors during async requests
   - Just import express-async-handlers instead of creating your own
