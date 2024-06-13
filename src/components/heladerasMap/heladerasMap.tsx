"use client";
import { iPuntosRecomendados } from "@/interfaces/heladerasApi/iPuntosRecomendados";
import { useGetRecomendacionesQuery } from "@/redux/services/heladerasApi";
import { CircularProgress, Typography } from "@mui/material";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

export function HeladerasMap({
  apiKey,
  latitud,
  longitud,
  radio
}: {
  apiKey: string;
  latitud: number;
  longitud: number;
  radio: number;
}) {
  const [heladeras, setHeladeras] = useState<iPuntosRecomendados[]>([]);

  const { data, isLoading, isError } = useGetRecomendacionesQuery({
    longitud: longitud,
    latitud: latitud,
    radio: radio,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setHeladeras(data.data);
    }
  }, [data, isLoading]);

  if (isLoading) return <CircularProgress />;

  if (isError || !data) return <Typography>Error al cargar los datos</Typography>;

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={{
          lat: Number(latitud),
          lng: Number(longitud),
        }}
        defaultZoom={radio}
        style={{ width: "100vw", height: "80vh" }}
      >
        {heladeras.map((heladera) => (
          <Marker
            key={`${heladera.Latitud}-${heladera.Longitud}`}
            position={{ lat: Number(heladera.Longitud), lng: Number(heladera.Latitud) }}
            title={`${heladera.Direccion.Localidad} - ${heladera.Direccion.Calle} ${heladera.Direccion.Numero} - ${heladera.Direccion.CodigoPostal}`}
            onClick={() => {
              console.log(heladera);
            }}
          />
        ))}
      </Map>
    </APIProvider>
  );
}
