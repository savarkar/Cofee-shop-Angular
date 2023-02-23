export interface Product {
    qty: number;
    id: number,
    blend_name: string,
    intensifier:string,
    origin:string,
    notes: string,
    uid: number,
    variety:number
}

export interface CartProduct extends Product {
   qty:number;
}
