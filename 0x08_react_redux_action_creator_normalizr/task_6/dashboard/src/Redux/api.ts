import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthorItemType } from '../schema/notifications'
const loginAPI = createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: '../login-success.json',
    }),
    endpoints: (build) => ({
        getUserLoginById: build.query<<AuthorItemType>, string>({
            query: (id) => `${id}`,
        })
    })
})
