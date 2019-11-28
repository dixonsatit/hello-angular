import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiUrl = 'http://127.0.0.1:3000/patient';

  constructor(
    public http: HttpClient
  ) { }

  list()  {
    return this.http.get(this.apiUrl + '/list');
  }

  view(id) {
    return this.http.get(this.apiUrl + `/view/${id}`);
  }

  create(data: any) {
    return this.http.post(this.apiUrl + '/create', {data: data});
  }

  update(id, data) {
    return this.http.put(this.apiUrl + '/update/' + id, {data: data});
  }

  delete(id) {
    return this.http.delete(this.apiUrl + '/delete/' + id);
  }

  deletes(ids) {
    return this.http.delete(this.apiUrl + '/deletes?ids=' + ids);
  }

}
