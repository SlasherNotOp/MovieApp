import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrendingMoviesByDay=createAsyncThunk("fetchTrending",
    async()=>{
        const result=await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=" +
        import.meta.env.VITE_TMDB_API_KEY);

        // console.log(result.data.results);
        return result.data.results;
    }
)

export const fetchTrendingMoviesByweek=createAsyncThunk("fetchTrendingweek",
    async()=>{
        const result=await axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=" +
        import.meta.env.VITE_TMDB_API_KEY);

      //  console.log(result.data.results);
        return result.data.results;
    }
)


export const slice= createSlice(
    {
        name:"movieSlice",
        initialState:{
            trendingMoviesByDay:[],
            trendingMoviesByWeek:[],
            
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(fetchTrendingMoviesByDay.pending, (state, action) => {
                state.status = "Loading...";
              })
              .addCase(fetchTrendingMoviesByDay.fulfilled, (state, action) => {
                state.trendingMoviesByDay = action.payload;
              })
              .addCase(fetchTrendingMoviesByDay.rejected, (state, action) => {
                state.status = "There is an error";
                state.error = action.payload;
              })
              .addCase(fetchTrendingMoviesByweek.pending, (state, action) => {
                state.status = "Loading...";
              })
              .addCase(fetchTrendingMoviesByweek.fulfilled, (state, action) => {
                state.trendingMoviesByWeek = action.payload;
              })
              .addCase(fetchTrendingMoviesByweek.rejected, (state, action) => {
                state.status = "There is an error";
                state.error = action.payload;
              });
        }

       
    },
);
export const sliceReducer = slice.reducer;