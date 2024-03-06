import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Todo {
  _id: number;
  title: string;
  img: string;
}
export interface Post {
  title: string;
  img: string;
}

export interface Main {
  todo: Todo[];
}

const initialState: Main = {
  todo: [],
};

const url =
  "https://api.elchocrud.pro/api/v1/18fbe75e5b1cd9d74dfc4794dd85f482/newTodo";

export const posrReq = createAsyncThunk(
  "todo/postreq",
  async (newData: Post) => {
    try {
      const response = await axios.post(url, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getReq = createAsyncThunk("todo/getReq", async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteReq = createAsyncThunk(
  "todo/delete",
  async (_id: number) => {
    try {
      const response = await axios.delete(`${url}/${_id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editReq = createAsyncThunk(
  "todo/edit",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async ({ _id, newData }: any) => {
    try {
      const response = await axios.put(`${url}/${_id}`, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(posrReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(getReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(deleteReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(editReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      });
  },
});

export default TodoSlice.reducer;
