import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  selectedPatients: Array<any> = [];
  patients: Array<any> = [];
  loading: boolean = false;

  constructor(
    public route: Router,
    public patientService: PatientService
  ) { }

  ngOnInit() {
    this.getPatient();
  }

  async getPatient() {
    this.loading = true;
    const result: any = await this.patientService.list().toPromise();
    this.patients = result.data;
    this.loading = false;
  }

  onAdd() {
    this.route.navigateByUrl('patient/form');
  }

  async onDelete(data) {
    await this.patientService.delete(data.ref).toPromise();
    this.getPatient();
  }

  async onDeletes() {
    let ids = this.selectedPatients.map(value => value.ref);
    console.log(ids);
    await this.patientService.deletes(ids.join()).toPromise();
    this.getPatient();
  }

  onEdit(data) {
    const id = data.ref;
    this.route.navigateByUrl(`patient/form?id=${id}`);
  }




}
