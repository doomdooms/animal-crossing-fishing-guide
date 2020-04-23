import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

import { FishInterface} from '../Fish';


@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {
  private fishCollection: AngularFirestoreCollection<FishInterface>;
  fishList: Observable<FishInterface[]>;

  constructor(private db: AngularFirestore) {
    this.fishCollection = db.collection('fish');
    this.fishList = this.fishCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
