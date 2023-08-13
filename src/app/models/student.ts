import { Program } from "./program";

export interface Student{
  id: number,
  firstName: string,
  lastName: string,
  mainEmail: string,
  mainMobile: string,
  studentEmail?: string,
  studentMobile?: string,
  registrationStatusID: number,
  registrationStatus?: string,
  houseID: number,
  numberOfFamilyMembers: number,
  gradeInSchool: string,
  program: Program
}
