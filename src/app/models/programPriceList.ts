import { Program } from "./program";

export enum Type{
  "Resident Student",
  "Non Resident Student"
}

export interface ProgramPriceList{
  priceListID: number,
  programID: number,
  program?: Program,
  type: Type,
  isPricePerCourse: boolean
  priceValue?: number,
}
