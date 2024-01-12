#### Visit the website at https://bitbuilder.netlify.app/, or see screenshots at the bottom of this document. 
## What is BitBuilder
#### Synopsis 
Bit builder is a website created to serve a small business. The business, BitBuilder, works help customers build their own custom PCs with expert consulting. This website was made to faciliate online orders. You can see more by visiting the [about page](https://bitbuilder.netlify.app/Contact_Us).
#### Website Design
This website has a few important pages, the homepage, design studio, and order status page. The design studio page is made up of template selection and customization. When a user visits the site, they can easily enter the Design Studio using a panel on the Homepage or the navbar. 

From there, they can select a template. Template are prebuilt models for people to base their builds around. For example, we may have a 'School' template for those looking for a PC for school work. After selection a template, or starting from scratch, a build number is generated. That number is unique to this build. The user will be taken to the customization page where they can scroll through our catalog of parts organized by components (CPUs, Cases, GPUs, etc). When they are finished, they can enter the Order Status page where they can submit the build with some contact information. The business will then contact them for a consulting session to ensure they are getting what they intend and that it will fit their needs. 

If a user wants to check on a order status, or return to an unsubmitted build, they can do so by entering their build number to the order status page. 

## Technical Architecture
![image](![image](https://github.com/PhiJam1/PCBuilder/assets/79670114/4d918116-f499-4c14-9d13-b3bbccfdafb7))

![image](https://github.com/PhiJam1/PCBuilder/assets/79670114/4d918116-f499-4c14-9d13-b3bbccfdafb7)
Tech Stack
- React (HTML/JavaScipt/CSS)  - Frontend
- Bootstrap (CSS) - Styling
- Django (Python) - Backend
- PostgressDB - Database
- Netlify - Frontend Hosting
- Railway - Backend + Database Hosting

### Frontend 
The frontend is built with React and makes use of Bootstrap for styling. This was especially useful when ensuring the website is responsive and works well on different monitor and mobile phone sizes. Each page can be found in `frontend/src/pages`. Each page is made up of different components, located in `frontend/src/components` that may be conditionally rendered. This website makes use of `fetch` to `GET` and `POST` to/from the backend. It makes extensive use of React Hooks to make page loaded fast and smooth while minimizing the number of API calls needed. 
### Backend
The backend is written using Django. This website requires two Django models. `Parts`, to store each entry in a catalog of each PC parts (for example, an Intel i5 CPU), and `Build` to store a collection of parts, contact information, and various other data points all identified under a unique build number. The backend serves as an API for the frontend to make requests to. It primarily sends/stores information regarding parts or builds to the frontend.

### Database
While developing, I used SQLite3. Before deploying this website, I switched over to Postgres. As an open source database, it is free and has significant community support. It is fully capable of handling the traffic I expect this website to generate. Django also works much better with a SQL database like Postgres over something like MongoDB.
### Hosting
The frontend is hosted on [Netlify](https://www.netlify.com/). The backend and database are both hosted on [Railway](https://railway.app/).
