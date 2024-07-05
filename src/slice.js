import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrendingMovies=createAsyncThunk(
  "fetchTrending",
    async()=>{
        try {
          
          const[day,week]= await Promise.all([
             axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY),
             axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY)
          ]);
          console.log(day,week);
          return {
            trendingMoviesByDay:day.data.results,
            trendingMoviesByWeek:week.data.results,
          };
        } catch (error) {
          console.log(error)
        }
    }
)
export const fetchPopularMovies=createAsyncThunk(
  "fetchPopular",
    async()=>{
        try {
          
          const[day,week]= await Promise.all([
             axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY),
             axios.get("https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY)
          ]);
          return {
            popularMovie:day.data.results,
            popularTv:week.data.results,
          };
        } catch (error) {
          console.log(error)
        }
    }
)

export const fetchTopRated=createAsyncThunk(
  "fetchTopRated",
    async()=>{
        try {
          
          const[day,week]= await Promise.all([
             axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY),
             axios.get("https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY)
          ]);
          return {
            topRatedMovie:day.data.results,
            topRatedTv:week.data.results,
          };
        } catch (error) {
          console.log(error)
        }
    }
)





export const slice= createSlice(
    {
        name:"movieSlice",
        initialState:{
            trendingMoviesByDay:[],
            trendingMoviesByWeek:[],
            popularMovie:[],
            popularTv:[],
            topRatedMovie:[],
            topRatedTv:[],
            
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder
              .addCase(fetchTrendingMovies.pending, (state, action) => {
                state.status = "Loading...";
              })
              .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
                state.trendingMoviesByDay = action.payload.trendingMoviesByDay;
                state.trendingMoviesByWeek = action.payload.trendingMoviesByWeek;
              })
              .addCase(fetchTrendingMovies.rejected, (state, action) => {
                state.status = "There is an error";
                state.error = action.payload;
              })
              .addCase(fetchPopularMovies.pending, (state, action) => {
                state.status = "Loading...";
              })
              .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.popularMovie = action.payload.popularMovie;
                state.popularTv = action.payload.popularTv;
              })
              .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.status = "There is an error";
                state.error = action.payload;
              })
              .addCase(fetchTopRated.pending, (state, action) => {
                state.status = "Loading...";
              })
              .addCase(fetchTopRated.fulfilled, (state, action) => {
                state.topRatedMovie = action.payload.topRatedMovie;
                state.topRatedTv = action.payload.topRatedTv;
              })
              .addCase(fetchTopRated.rejected, (state, action) => {
                state.status = "There is an error";
                state.error = action.payload;
              })
              ;
        }

       
    },
);
export const sliceReducer = slice.reducer;