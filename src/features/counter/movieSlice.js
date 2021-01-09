import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTrends = createAsyncThunk("movies/getTrends", async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = response.json();
  return data;
});

export const getMovieDetails = createAsyncThunk(
  "movies/getMovieDetails",
  async (movieID) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  }
);

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    return data;
  }
);

export const getSimilarMovies = createAsyncThunk(
  "movies/getSimilarMovies",
  async (movieID) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: "trends",
  initialState: {
    trendingMovies: [],
    movie: {},
    searchedMovies: [],
    favoriteMovies: [],
    favoritesIDs: [],
    similarMovies: [],
  },
  reducers: {
    resetQuery(state) {
      state.searchedMovies = [];
    },
    addFavorites(state, action) {
      if (
        state.favoriteMovies.filter((movie) => {
          return movie.id == action.payload.id;
        }).length > 0
      ) {
        const favArray = state.favoriteMovies.filter((movie) => {
          return movie.id !== action.payload.id;
        });
        state.favoriteMovies = favArray;
        const favIDs = state.favoritesIDs.filter((id) => {
          return id != action.payload.id;
        });
        state.favoritesIDs = favIDs;
      } else {
        if (action.payload.fromSimilar === "true") {
          const filteredMovie = state.similarMovies.filter((movie) => {
            console.log(movie);
            return movie.id === action.payload.id;
          });
          state.favoriteMovies = [...state.favoriteMovies, ...filteredMovie];
          state.favoritesIDs = [...state.favoritesIDs, filteredMovie[0].id];
        } else if (state.searchedMovies.length > 1) {
          const filteredMovie = state.searchedMovies.filter((movie) => {
            return movie.id === action.payload.id;
          });
          state.favoriteMovies = [...state.favoriteMovies, ...filteredMovie];
          state.favoritesIDs = [...state.favoritesIDs, filteredMovie[0].id];
        } else {
          const filteredMovie = state.trendingMovies.filter((movie) => {
            return movie.id === action.payload.id;
          });

          state.favoriteMovies = [...state.favoriteMovies, ...filteredMovie];
          state.favoritesIDs = [...state.favoritesIDs, filteredMovie[0].id];
        }
      }
    },
  },

  extraReducers: {
    [getTrends.fulfilled]: (state, action) => {
      state.trendingMovies = [...action.payload.results];
    },
    [getMovieDetails.fulfilled]: (state, action) => {
      state.movie = { ...action.payload };
    },
    [searchMovies.fulfilled]: (state, action) => {
      state.searchedMovies = [...action.payload.results];
    },
    [getSimilarMovies.fulfilled]: (state, action) => {
      state.similarMovies = [...action.payload.results];
    },
  },
});

export const { resetQuery, addFavorites } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
