import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable, Subscription} from 'rxjs';

import {ForSubmitService} from '../for-submit.service';
import { FishInterface} from '../Fish';
import {QueryData} from '../QueryData';


@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css'],
})
export class FishListComponent implements OnInit {
  private fishCollection: AngularFirestoreCollection<FishInterface>;
  fishList: Observable<FishInterface[]>;
  formData;
  subscription: Subscription;
  constructor(
    private db: AngularFirestore,
    private submitService: ForSubmitService ) {
    this.subscription = this.submitService.getData().subscribe(data => {
      console.log(data);
      let isNorth = data._northSelected;
      let month = Number(data._monthSelected);
      let monthQueryValue = [0, month];
      if (isNorth) {
        this.fishCollection = db.collection('fish', ref => ref.where(
          'n_month', 'array-contains-any', monthQueryValue));
      } else {
        this.fishCollection = db.collection('fish', ref => ref.where(
          's_month', 'array-contains-any', monthQueryValue));
      }
      this.fishList = this.fishCollection.valueChanges();
    });
    console.log(this.formData);
    // console.log(this.subscription);
    this.fishCollection = db.collection('fish', ref => ref.orderBy('id', 'asc'));
    // this.subscription = this.submit.formChange.subscribe((data: QueryData) => {console.log(data);
    //   // let isNorth = data._northSelected;
    //   // let month = (<number> data._monthSelected);
    //   // if (isNorth) {
    //   //   this.fishCollection = db.collection('fish', ref => ref.where(
    //   //     'n_month', 'array-contains-any', [0, month]));
    //   // } else {
    //   //   this.fishCollection = db.collection('fish', ref => ref.where(
    //   //     's_month', 'array-contains-any', [0, month]));
    //   // }
    // }, err => console.log(err), () => console.log('complete'));
    this.fishList = this.fishCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
