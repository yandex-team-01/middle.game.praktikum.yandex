import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopics } from "src/api/forumApi";

export const fetchTopics = createAsyncThunk(
    'api/forum',
    async () => {
        try {
            const res = await getTopics();
            console.log(res);
            return res;
        } catch (error) {
            console.error(error);
        }
    }
);
