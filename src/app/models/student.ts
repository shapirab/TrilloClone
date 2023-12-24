import { Program } from "./program";

export interface Student{
  stakeholderID: number,
  israeliID: string,
  firstName: string,
  lastName: string,
  mainContactEmail: string,
  mainContactPhoneNumber: string,
  address: string,
  city: string,
  emailAddress?: string,
  CellPhoneNumber?: string,
  registrationStatusID: number,
  registrationStatus?: string,
  houseID: number,
  numberOfFamilyMembers: number,
  gradeInSchool: string,
  dateOfBirth: Date,
  program: Program
}
