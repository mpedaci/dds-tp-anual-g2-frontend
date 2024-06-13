export interface iDataPuntosRecomendados {
    data: iPuntosRecomendados[];
}

export interface iPuntosRecomendados {
    Longitud: string;
    Latitud: string;
    Direccion: iDireccion;
}

export interface iDireccion {
    Calle: string;
    Numero: string;
    Localidad: string;
    CodigoPostal: string;
}