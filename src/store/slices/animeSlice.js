import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAnimeListsApi, getAnimeDetailApi } from "@/services/animeListsApi";

const initialState = {
  animeLists: null,
  detailAnime: null,
  status: "idle",
  error: null,
};

export const fetchAnimeLists = createAsyncThunk(
  "anime/fetchAnimeLists",
  async (query) => {
    const response = await getAnimeListsApi(query);
    return response.data;
  }
);

export const fetchDetailAnime = createAsyncThunk(
  "anime/fetchDetailAnime",
  async (id) => {
    const response = await getAnimeDetailApi(id);
    return response.data;
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeLists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimeLists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animeLists = action.payload;
      })
      .addCase(fetchAnimeLists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetailAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDetailAnime.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detailAnime = action.payload;
      })
      .addCase(fetchDetailAnime.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = animeSlice.actions;
export default animeSlice.reducer;
