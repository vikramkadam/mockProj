export interface NestedRF {
    id:number;
    firstName: string;
     lastName: string;
      address: Address;       
}

export interface Address {
   city: string;
   pinCode: string;
}
