export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    availability: boolean;
    promotion: boolean;
    selected: boolean;
    quantity: number;
    _links: {
        self: {
          href: string
            },
            product: {
            href: string;
            },
            category: {
            href: string;
        }
    }
}