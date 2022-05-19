export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
   

    constructor(id: number, name: string,description:string, price:number) {
        this.id = id;
        this.name= name;
        this.price=price;
        this.description= description;
      
    }

    setid(id: number): void {
        this.id= id;
    }

    getid(id: number): number {
           return id;
    }
}