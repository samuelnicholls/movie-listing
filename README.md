# Movie Listing

View Demo: https://movie-listing-samuelnicholls.vercel.app

## About The Project

This is a NextJS web application that retrives the latest top rated movies and also allows the user to search for a movie of their choosing. Some of the features of this web application is a paginated list of results to help improve load times, furthermore the searching which the user can do is also paginated. The user can also see a highly detailed view of each movie by simply clicking on the poster image on the listing page.

## Built With
- React
- NextJS
- Typescript
- React Query
- Tailwind CSS
- ESLint
- Prettier

## Getting Started

### Prerequisites
Request an API key from here: https://developer.themoviedb.org/docs, this will be used to authenticate the API requests within the web application.

### Installation

1. Clone the repository  
```
git clone https://github.com/samuelnicholls/movie-listing.git
```
2. Create a ```.env.local``` file in the root of the project and add the following value
```
NEXT_PUBLIC_API_KEY=<API_KEY_HERE>
```
3. Install all packages
```
npm install
```
3. Run a build for the first run of the project
```
npm run build
```
4. Start the local server, this will load the project at http://localhost:3000/
```
npm run dev
```

## Future Improvements
- [ ] Add in skeleton component for when an image isn't returned from the API.
- [ ] Make sure all image posters are the same size on the listing screen.
- [ ] Change layout for the details screen as the poster is small at the moment.