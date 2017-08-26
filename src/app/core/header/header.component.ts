import { Component, Output, Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Headers, Http, Response } from '@angular/http/';
import { AuthService } from '../auth/auth.service';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})


export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService
  ) {}

  onStoreRecipes () {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => console.log(response)
      )
  }

  onLogout () {
    this.authService.logoutUser();
  }

  onFetchRecipes () {
    this.dataStorageService.fetchRecipes();
  }
}
