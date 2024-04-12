import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({baseQuery:''})

export const apiSlice = createApi({
    baseQuery:baseQuery,
    tagTypes:['user'],
    endpoints:(builder)=>({})
})