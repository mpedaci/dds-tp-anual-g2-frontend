import { config } from "@/config/config";
import { iDataPuntosRecomendados } from "@/interfaces/heladerasApi/iPuntosRecomendados";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const heladerasApi = createApi({
  reducerPath: "heladerasApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.heladerasUrl }),
  tagTypes: ["Heladeras"],
  endpoints: (build) => ({
    getRecomendaciones: build.query<
      iDataPuntosRecomendados,
      { longitud: number; latitud: number; radio: number }
    >({
      query: ({ longitud, latitud, radio }) => {
        return {
          url: `recomendaciones?longitud=${longitud}&latitud=${latitud}&radio=${radio}`,
          method: "GET",
        };
      },
      providesTags: ["Heladeras"],
    }),
  }),
});

export const { useGetRecomendacionesQuery } = heladerasApi;