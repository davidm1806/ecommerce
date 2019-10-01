export class ItemProduct{

    constructor(){}
    id: number;
    name: string;
    price: number;
    quantity: number;
    sousT: number = this.price * this.quantity;
}