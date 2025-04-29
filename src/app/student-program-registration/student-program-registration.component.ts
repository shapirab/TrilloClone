import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProgramPriceList, Type } from '../models/programPriceList';
import { RegistrationStatus } from '../models/registrationStatus';
import { InstrumentType } from '../models/instrumentType';
import { RegistrationService } from '../services/registration.service';
import { error } from 'console';
import { AcademicYearsService } from '../services/academic-years.service';
import { AcademicYear } from '../models/academicYear';
import { StudentRegistrationMapService } from '../services/student-registration-map.service';
import { ActivatedRoute } from '@angular/router';
import { StudentRegistrationStatusInAcademicYear } from '../models/studentRegistrationStatusInAcademicYear';
import { StudentRegistrationStatusInAcademicYearDTO } from '../models/studentRegistrationStatusInAcademicYearDTO';
import { ProgramPriceListService } from '../services/program-price-list.service';
import { Program } from '../models/program';
import { ProgramService } from '../services/program.service';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-student-program-registration',
  templateUrl: './student-program-registration.component.html',
  styleUrls: ['./student-program-registration.component.css']
})
export class StudentProgramRegistrationComponent implements OnInit {
  // programPriceList: ProgramPriceList = {
  //   priceListID: 0,
  //   programID: 0,
  //   program: undefined,
  //   type: Type['Resident Student'],
  //   isPricePerCourse: false
  // };
  programPriceLists: ProgramPriceList[];
  registrationStatuses: RegistrationStatus[];
  programPriceList: ProgramPriceList;
  registrationStatus: RegistrationStatus;
  currentStudentRegistrationStatus: RegistrationStatus = {
    id: -1,
    statusName: '',
    checked: false

  };
  currentProgramPriceList: ProgramPriceList = {
    priceListID: 0,
    programID: 0,
    type: Type['Resident Student'],
    isPricePerCourse: false
  };

  studentID: number;
  selectedAcademicYear:AcademicYear;

  studentInstrumentTypes: InstrumentType[];

  currentProgramPriceList$: Observable<ProgramPriceList> | null;

  constructor(private registrationService: RegistrationService,
              private academicYearService: AcademicYearsService,
              private studentRegistrationMapService: StudentRegistrationMapService,
              private priceListService: ProgramPriceListService,
              private programService: ProgramService,
              private activeRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('studentProgramRegistrationComponent:: onInit()')
    this.selectedAcademicYear = this.academicYearService.selectedAcademicYear;
    this.registrationService.getAll().subscribe({
      next: res => this.registrationStatuses = res,
      error: err => console.log('Error in getting all registration status types', err)
    });
    this.getStudentCurrentRegistrationStatus();
    //this.getStudentCurrentPriceList();
    this.getStudentCurrentPriceList()?.subscribe({
      next: priceList => {
        console.log('Received priceList in onInit: ', priceList);
        if (priceList) {
          setTimeout(() => {
            this.currentProgramPriceList = priceList;
            console.log('Updated currentProgramPriceList in onInit: ', this.currentProgramPriceList);
            this.cdr.detectChanges();
          }, 0);
        }
      },
      error: err => console.log(err)
    });

    this.priceListService.getAll()
    .pipe(
      switchMap(priceLists => {
        this.programPriceLists = priceLists;
        let programRequests = priceLists
          .map(priceList =>
            this.programService.getProgramById(priceList.programID)
            .pipe( map(program => (
              {
                ...priceList, program
            }))
            )
          );
          return forkJoin(programRequests);
        })
      ).subscribe({
        next: updatedPriceLists => {
          this.programPriceLists = updatedPriceLists;
        }, error: err => console.log('Error in getting all the price lists', err)
      });
    // this.priceListService.getAll().subscribe({
    //   next: res => {
    //     console.log('subscribing to priceListService::getAll(): ', res);
    //     this.programPriceLists = res;
    //     this.programPriceLists.forEach(programPriceList => {
    //       this.programService.getProgramById(programPriceList.programID).subscribe({
    //         next: res => {
    //           console.log('getting programPriceListId: ', res);
    //           programPriceList.program = res;
    //         },
    //         error: err => console.log('Error in getting the program', err)
    //       });
    //     });
    //   },
    //   error: err => console.log('Error in getting all the price lists', err)
    // });
  }

  comparePriceLists(p1: any, p2: any): boolean {
    // Make sure to use the correct property name (priceListID) based on your console logs
    return p1 && p2 ? p1.priceListID === p2.priceListID : p1 === p2;
  }

  onRegistrationSave(value:any){
    console.log('studentProgramRegistrationComponent::onRegistrationSave()');
    console.log('recieved value: ', value)
    // console.log('recieved value priceLists: ', value.priceLists)
    // console.log('currentPriceList.id', this.currentProgramPriceList.priceListID)

    if(this.activeRoute.parent){
      this.activeRoute.parent.params.subscribe(params => {
        let studentID = params['id'];
        this.studentRegistrationMapService
          .getStudentRegistrationStatus(studentID, this.selectedAcademicYear.academicYearID).subscribe({
            next: map => {
              console.log('subscribing to studentRegistrationMapService getStudentRegistrationStatus event')
              if(map){
                console.log('map was found: ', map)
                //update
                console.log('map was found: ', map)
                let studentRegistrationMapUpdate : StudentRegistrationStatusInAcademicYear = {
                  id: map.id,
                  studentId: studentID,
                  registrationStatusID: value.registrationStatus,
                  academicYearID: map.academicYearID,
                  priceListID: value.priceLists.id
                }
                console.log('studentRegistrationMapUpdate: ', studentRegistrationMapUpdate);

                this.studentRegistrationMapService
                .updateStudentRegistrationStatus(map.id, studentRegistrationMapUpdate).subscribe({
                  next: res => {
                    console.log(`registration map was updated, ${res}`)
                  },
                  error: err => console.log(err)
                });
              }
            },
            error: err => {
              if(err.status === 404){
                //console.log('map was not found. Creating a new map')
                let map: StudentRegistrationStatusInAcademicYearDTO = {
                  studentId: studentID,
                  academicYearID: this.selectedAcademicYear.academicYearID,
                  registrationStatusID: value.registrationStatus,
                  priceListID: value.priceLists.id
                }
                this.studentRegistrationMapService.addStudentRegistrationStatus(map).subscribe({
                  next: res => console.log('map was added: ', res),
                  error: err => console.log(err)
                });
              }
              else{
                console.log(`error: ${err.message}`)
              }
            }
          });
      });
    }
  }

  getStudentCurrentRegistrationStatus(){
    console.log('studentProgramRegistrationComponent::getStudentCurrentRegistrationStatus()')
    if(this.activeRoute.parent){
      this.activeRoute.parent.params.subscribe(params => {
         let studentID = params['id'];
         this.studentRegistrationMapService
        .getStudentRegistrationStatus(studentID, this.selectedAcademicYear.academicYearID).subscribe({
          next: map => {
            console.log('recieved student registrationMap: ', map)
            this.registrationService.getRegistrationStatusById(map.registrationStatusID).subscribe({
              next: registrationStatus => {
                if(registrationStatus){
                  this.currentStudentRegistrationStatus = registrationStatus;
                }
              },
              error: err => console.log('Error in getting studentRegistrationStatus map', err)
            })
          },
          error: err => console.log('Error in getting the registration status type', err)
        });
      });
    }
  }

  getStudentCurrentPriceList() {
    console.log('studentProgramRegistrationComponent::getStudentCurrentPriceList()');

    if (this.activeRoute.parent) {
        return this.activeRoute.parent.params.pipe(
            switchMap(params => {
                const studentID = params['id'];
                return this.studentRegistrationMapService
                    .getStudentRegistrationStatus(studentID, this.selectedAcademicYear.academicYearID)
                    .pipe(
                        switchMap(registrationMap =>
                            this.priceListService.getPriceListById(registrationMap.priceListID)
                        )
                    );
            })
        );
    } else {
        console.error('activeRoute.parent is undefined');
        return null;
    }
}

// getStudentCurrentPriceList() {
//   console.log('studentProgramRegistrationComponent::getStudentCurrentPriceList()');

//   if (this.activeRoute.parent) {
//     this.activeRoute.parent.params.subscribe(params => {
//       const studentID = params['id'];
//       this.studentRegistrationMapService
//         .getStudentRegistrationStatus(studentID, this.selectedAcademicYear.academicYearID)
//         .subscribe({
//           next: registrationMap => {
//             this.priceListService.getPriceListById(registrationMap.priceListID)
//               .subscribe({
//                 next: priceList => {
//                   this.currentProgramPriceList = priceList;
//                 },
//                 error: err => console.log('Error getting price list', err)
//               });
//           },
//           error: err => console.log('Error getting registration map', err)
//         });
//     });
//   } else {
//     console.error('activeRoute.parent is undefined');
//   }
// }

//   getStudentCurrentPriceList() {
//     console.log('studentProgramRegistrationComponent::getStudentCurrentPriceList()');

//     if (this.activeRoute.parent) {
//         this.activeRoute.parent.params.subscribe(params => {
//             const studentID = params['id'];

//             this.studentRegistrationMapService
//                 .getStudentRegistrationStatus(studentID, this.selectedAcademicYear.academicYearID)
//                 .pipe(
//                     switchMap(registrationMap => {
//                         console.log('Received student registrationMap: ', registrationMap);

//                         // Return a forkJoin to wait for both observables
//                         return forkJoin({
//                             priceList: this.priceListService.getPriceListById(registrationMap.priceListID),
//                             //registrationMap: registrationMap // Include the registrationMap if needed
//                         });
//                     })
//                 )
//                 .subscribe({
//                     next: (priceList) => {
//                         console.log('Received priceList: ', priceList);
//                         if (priceList) {
//                             this.currentProgramPriceList = priceList as unknown as ProgramPriceList;
//                             console.log('Updated currentProgramPriceList: ', this.currentProgramPriceList);
//                         }
//                     },
//                     error: err => console.log(err)
//                 });
//         });
//     }
// }

  // getStudentCurrentPriceList(){
  //   console.log('studentProgramRegistrationComponent::getStudentCurrentPriceList()')
  //   if(this.activeRoute.parent){
  //     this.activeRoute.parent.params.subscribe(params => {
  //       let studentID = params['id'];
  //       this.studentRegistrationMapService
  //       .getStudentRegistrationStatus(studentID, this.selectedAcademicYear.academicYearID)
  //       .subscribe({
  //         next: registrationMap => {
  //           console.log('recieved student registrationMap: ', registrationMap)
  //           console.log('subscribing to priceListService getPriceListById event')
  //           this.priceListService.getPriceListById(registrationMap.priceListID).subscribe({
  //             next: priceList => {
  //               console.log('got priceList: ', priceList)
  //               if(priceList){
  //                 this.currentProgramPriceList = priceList;
  //               }
  //             },
  //             error: err => console.log(err)
  //           });
  //         },
  //         error: err => console.log(err)
  //       });
  //     });
  //   }
  // }

  getTypeName(type: Type): string{
    return Type[type];
  }

  onProgramPriceListChange(event: any) {
    console.log('studentProgramRegistrationComponent::onProgramPriceListChange()')
    console.log('event passed: ', event)
    let selectedPriceList: ProgramPriceList = event;
    console.log('studentProgramRegistrationComponent::OnProgramPriceListChange(): event value: ', selectedPriceList)
    console.log(selectedPriceList);
    this.currentProgramPriceList = this.programPriceLists.find(priceList => priceList.priceListID == selectedPriceList.priceListID)
    || this.currentProgramPriceList;
    console.log('Updated currentProgramPriceList:', this.currentProgramPriceList);
    console.log('complete price list: ', this.programPriceLists);
  }

}
