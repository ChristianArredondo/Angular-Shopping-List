import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';

  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCup0k0RWXSHb5TB3bq1LPeuya-fC5WgCI',
      authDomain: 'ng-recipe-book-d07b5.firebaseapp.com',
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
