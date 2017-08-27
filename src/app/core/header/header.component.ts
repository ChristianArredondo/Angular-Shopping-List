import { Component, Output, Injectable, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared';
import { Headers, Http, Response } from '@angular/http/';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromAppState from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducer';
import { Observable } from 'rxjs/Observable';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromAppState.AppState>
  ) {}

  ngOnInit () {
    this.authState = this.store.select('auth');
  }

  onStoreRecipes () {
    this.dataStorageService.storeRecipes()
      .subscribe(
        response => console.log(response)
      )
  }

  onLogout () {
    this.authService.logoutUser();
  }

  onFetchRecipes () {
    // this.dataStorageService.fetchRecipes();
    this.dataStorageService.getRecipes();
  }
}
