import { HeladerasMap } from "@/components/heladerasMap/heladerasMap";
import { Stack } from "@mui/material";

const API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;

export default function Home() {
  return (
    <Stack direction={"column"} flexGrow={1} width={"100%"} spacing={2}>
      <h1>TP DDS 2024</h1>
      <h2>Grupo 02</h2>
      <HeladerasMap
        apiKey={API_KEY}
        latitud={-34.6037}
        longitud={-58.3816}
        radio={10}
      />
    </Stack>
  );
}
