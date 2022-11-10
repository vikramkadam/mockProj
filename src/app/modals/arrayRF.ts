import { Address } from "./nested-rf";

export interface arrayRF
{
    firstName: string,
    lastName: string,
    address: Address,
    parents: Parents

}

export interface Parents{
    pName: string,
    pMob: number
}