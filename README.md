
# Movie Explorer App

A **React Native + Expo Router** app to explore trending movies, search titles, and view detailed information including ratings, genres, runtime, and production details. Powered by **The Movie Database (TMDB) API**.

## Features

* Browse trending and popular movies
* Search for specific movie titles
* View detailed movie info: overview, genres, runtime, rating, votes, budget, revenue, and production companies
* High-quality movie posters with interactive UI
* Back navigation from movie details to home
* Mobile-friendly design with Expo Router and Tailwind (NativeWind)

## Tech Stack

* **React Native** (with Expo)
* **Expo Router** for navigation
* **TypeScript**
* **Tailwind (NativeWind)** for styling
* **TMDB API** for movie data

## Project Structure

```
app/
 ├── (tabs)/           # Home and other tab screens
 ├── movies/[id].tsx   # Movie details page
 ├── _layout.tsx       # Stack navigation layout
 └── globals.css       # Global styles
services/
 ├── api.ts            # API configuration and fetch functions
 └── useFetch.ts       # Custom hook for API fetching
constants/
 └── icons.ts          # App icons
```

## Setup & Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/movie-explorer.git
   cd movie-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your TMDB API key:

   * Create a `.env` file in the root folder:

     ```
     EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
     ```

4. Run the app:

   ```bash
   npx expo start
   ```

## API Reference

* Data fetched from **[TMDB API](https://www.themoviedb.org/documentation/api)**
* Endpoints used:

  * `GET /discover/movie`
  * `GET /search/movie`
  * `GET /movie/{id}`

## Screenshots





