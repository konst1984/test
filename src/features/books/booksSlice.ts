import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { formatData } from "../../utils/formatData"
import { StatusLoading } from "../../types"
import { BASE_API_URL, MAX_RESULTS } from "../../app/constants/constants"

const API_KEY = import.meta.env.VITE_GOOGLE__BOOKS_API_KEY

export interface IBooksState {
  books: []
  totalItems: number
  status: StatusLoading
  query: string
  order: string
  startIndex: number
  sortBy: string
  error: null | string
}

const initialState: IBooksState = {
  books: [],
  totalItems: 0,
  status: "idle",
  query: "",
  order: "relevance",
  startIndex: 0,
  sortBy: "all",
  error: null,
}

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_API_URL, {
        params: {
          q: getState().booksReducer.query,
          key: API_KEY,
          startIndex: getState().booksReducer.startIndex,
          maxResults: MAX_RESULTS,
          orderBy: getState().booksReducer.order,
        },
      })
      const totalItems = response.data.totalItems
      const items = response.data.items.map(formatData)
      return { items, totalItems }
    } catch (err) {
      return rejectWithValue ? rejectWithValue(err) : err
    }
  },
)

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    resetBooks: (state) => {
      state.books = []
    },
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setOrder: (state, action) => {
      state.order = action.payload
    },
    setStartIndex: (state, action) => {
      state.startIndex += action.payload
    },
    resetStartIndex: (state) => {
      state.startIndex = 0
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = "loading"
      state.error = null
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.totalItems = action.payload.totalItems
      state.books = [...state.books, ...action.payload.items]
      state.status = "fulfilled"
      state.error = null
    })
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "rejected"
      state.error = state.error = action.payload || action.meta.error
    })
  },
})
export const {
  resetBooks,
  setQuery,
  setOrder,
  setSortBy,
  setStartIndex,
  resetStartIndex,
} = booksSlice.actions

export const selectFilteredBooksByValue = (state) => {
  const value = state.booksReducer.sortBy
  if (value === "all") {
    return state.booksReducer.books
  }

  return state.booksReducer.books.filter((item) =>
    item.categories
      .map((cat) => cat.toLowerCase())
      .includes(value.toLowerCase()),
  )
}
const booksReducer = booksSlice.reducer
export default booksReducer
