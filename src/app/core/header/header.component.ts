import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAppState from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>

  constructor(
    private store: Store<fromAppState.AppState>
  ) {}

  ngOnInit () {
    this.authState = this.store.select('auth')
  }

  onStoreRecipes () {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onLogout () {
    this.store.dispatch(new AuthActions.Logout());
  }

  onFetchRecipes () {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

}
