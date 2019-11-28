import { PatientService } from './../patient.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patientForm = new FormGroup({
    prename: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    birth: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    pid: new FormControl('', Validators.required),
  });

  isUpdate: boolean = false;
  id: number;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public patientService: PatientService
  ) {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['id'] !== null) {
        this.isUpdate = true;
        this.getPatient(params['id']).then(result => {
          const data = result.results;
          this.id = data.ref;
          this.patientForm.setValue({
            prename: data.prename,
            name: data.name,
            lname: data.lname,
            birth: data.birth,
            sex: data.sex,
            pid: data.pid,
          });
        });
        // on Update
      } else {
        // on Create
        this.isUpdate = false;
      }
    });
  }

  ngOnInit() {

  }

  getPatient(id) {
    return this.patientService.view(id).toPromise();
  }

  async onSubmit() {
    if (this.patientForm.invalid) {
      console.log(this.patientForm);
    } else {
      const data = this.patientForm.value;
      let result:any;
      if(this.isUpdate === true){
         result = await this.patientService.update(this.id, data).toPromise();
      } else {
         result = await this.patientService.create(data).toPromise();
      }
      if (result.success == true) {
        this.router.navigateByUrl('patient/list');
      }
    }
  }

}
