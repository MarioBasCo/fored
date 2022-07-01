export interface IPlanes {
    id: number,
    detalle: string
}

export interface INodos {
    id: number,
    nombre_nodo: string
}

export interface IBodegas {
    id: number,
    nombre_bodega: string
}

export interface IContrato {
    id: number;
    num_contrato: number;
    identificacion_titular: string;
    razon_social: string;
    telefono: string;
    direccion_instal: string;
    plan: IPlanes;
    cortesia: boolean;
    nodo: INodos;
    bodega: IBodegas;
}

export interface IFactura {
  numFac: string;
  cliente: ICliente;
  fechaFac: string;
  detalleFactura: IDetalleFactura[];
  subTotalFac: number;
  ivaFac: number;
  totalFac: number;
}

export interface IDetalleFactura {
  plan: IPlanes;
  cantidad: number;
  total: number;
}

export interface ICliente {
  num_contrato: number;
  identificacion_titular: string;
  razon_social: string;
  telefono: string;
}