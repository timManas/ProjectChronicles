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
   - Define Header and Footer in App.js <br/>
   - Include App.js as the base element in createRoutesFromElements
4. You will need to set index={true} on the HomePage
5. Router will need to be provided in RouterProvider
6. In App.js. The Outlet component allows react to pass in the child components of whatever it routes too. Why ? So we can include the header and footer as global components
7. Use React Bootstrap documentation to get skeleton code for Header,Footer,Navigation, Cards, etc
8. Implement axios to make API request calls to backend
9. When button clicked, and want to navigate to another page. Use the useNavigate functionality along with the URL Path. This will route to the proper page using react router

### Key Lessons - BackEnd

1. Start with implementing Base functionality in server.js.
   - Then slowly add functionality in routes <br/>
   - Then finally in controller. <br/>
   - This will ensure you have consistent behaviour all the way <br/>
2. Use cors() to prevent CORS policy error
3. You can define the .env in the root folder and have seperate Frontend and Backend funcitonality <br/>
   - Define it in the rootfoler by providing the path ex: dotenv.config({path: '../.env',}) <br/>
4. Make sure to use asyncHandler to handle any errors during async requests <br/>
   - Just import express-async-handlers instead of creating your own <br/>

### Key Lessons - Project

1. You can trigger both frontend and backend by creating a root package.json <br/>
   and executing both concurrently <br/>
   Ex: "backend": "npm run server --prefix backend", <br/>
   "frontend": "npm run dev --prefix frontend", <br/>
   "dev": "concurrently \"npm run backend\" \"npm run client\"", <br/>

### TODO

Phase 1

1. Create proper edited Articles
2. Prepare App for Production Launch
3. Setup Render for release
4. Setup DomainName for release
5. Register to for Affiliate Links

Phase 2

1. Revise App to suit content of AffiliateLinks

### Issues Resolved

1. MIME type ("text/html") -> Make sure to set the proper folder in './frontend/dist'
   "app.use(express.static(path.join(\_\_dirname, './frontend/dist')))"
