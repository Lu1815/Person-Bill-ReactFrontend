import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:8080'

const headers = {
    'Content-type': 'application/json'
}

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Persona'],
    endpoints: (builder) => ({
        getPersonas: builder.query ({
            query: () => {
                return {
                    url: `persona`,
                    method: 'GET'
                }
            },
            providesTags: ['Persona']
        }),
        getPersonaByIdentificacion: builder.query ({
            query: (identificacion) => {
                return {
                    url: `persona/${identificacion}`,
                    method: 'GET'
                }
            },
            providesTags: ['Persona']
        }),
        addPersona: builder.mutation({
            query: (body) => {
                return {
                    url: 'persona',
                    method: 'POST',
                    body: body,
                    headers: headers
                }
            },
            invalidatesTags: ['Persona']
        }),
        removePersona: builder.mutation({
            query: (identificacion) => {
                return {
                    url: `persona/${identificacion}`,
                    method: 'DELETE',
                    headers: headers
                }
            },
            invalidatesTags: ['Persona']
        }),
        getFacturas: builder.query({
            query: () => 'factura'
        }),
        addFactura: builder.mutation({
            query: (body) => {
                return {
                    url: 'factura',
                    method: 'POST',
                    body: body,
                    headers: headers
                }
            }
        })
    })
})

export const {
    useGetPersonasQuery,
    useGetPersonaByIdentificacionQuery,
    useAddPersonaMutation,
    useRemovePersonaMutation,
    useGetFacturasQuery,
    useAddFacturaMutation,
} = appApi;