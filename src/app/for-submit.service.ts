import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {QueryData} from './QueryData';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForSubmitService {
  private subject = new Subject<QueryData>();
  sendData(data: QueryData) {
    this.subject.next(data);
  }
  getData(): Observable<QueryData> {
    return this.subject.asObservable();
  }
}
