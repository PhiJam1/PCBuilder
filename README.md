#### Preview The Website [Here](https://bitbuilder.netlify.app/), or see screenshots at the bottom of this document. 
## What is BitBuilder
#### Synopsis 
Bit builder is a website created to serve a small business. The business works help customers build their own custom PC with expert consulting. This website was made to faciliate online orders. You can see more by visiting the [about page](https://bitbuilder.netlify.app/Contact_Us).
#### Structure
Orders on this application are organized by a Build Number.

## Technical Architecture
here's an image 

Tech Stack
- React (HTML/JavaScipt/CSS)  - Frontend
- Bootstrap (CSS) - Styling
- Django (Python) - Backend
- PostgressDB - Database
- Netlify - Frontend Hosting
- Railway - Backend + Database Hosting

### Frontend 
The frontend is built with React and makes use of Bootstrap for styling. Each page can
be found in `frontend/src/pages`. Each page is made up of different components, located in `frontend/src/components` that may be conditionally rendered. This website makes use of `fetch` to `GET` and `POST` from the backend. It makes extensive use of React Hooks to make page loaded fast and smooth while minimizing the number of API calls needed. 
### Backend
The backend is written using Django. This website requires two Django models. `Parts`, to store each entry in a catalog of each PC parts (for example, an Intel i5 CPU), and `Build` to store a collection of parts, contact information, and various other data points all identified under a unique build number. The backend serves as an API for the frontend to make requests to. It primarily sends/stores information regarding parts or builds to the frontend.

### Database
While developing, I used SQLite3. Before deploying this website, I switched over to PostgresDB. Now explain why I made that choice.
### Hosting
The frontend is hosted on Netlify. The backend and database are both hosted on Railway.
