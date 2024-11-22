import { Program } from "./program";

export enum Type{
  "Resident Student",
  "Non Resident Student"
}

export interface ProgramPriceList{
  id: number,
  programID: number,
  program: Program | undefined,
  type: Type,
  isPricePerCourse: boolean
  priceValue?: number,
}
