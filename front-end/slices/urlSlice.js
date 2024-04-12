
import { apiSlice } from "./apiSlice";

const urlSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        urlFetching: builder.mutation({
            query: (data) => ({
                url: 'http://localhost:8001/',
                method: 'POST',
                body: data
            })
        }),
        urlredirecting:builder.mutation({
            query:(data)=>({
                url:`http://localhost:8001/redirect?shortid=${data}`,
                method:'GET',


            })
        })
    })
});

export const { useUrlFetchingMutation,useUrlredirectingMutation } = urlSlice;
