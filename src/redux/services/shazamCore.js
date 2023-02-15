import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const baseUrl = import.meta.env.VITE_BASE_URL;
const xRapidApiKey = import.meta.env.VITE_X_RAPIDAPI_KEY;

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', xRapidApiKey)
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/charts/world'
        }),
    })
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;