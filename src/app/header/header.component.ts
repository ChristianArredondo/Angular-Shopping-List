import { Component, Output, Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Headers, Http, Response } from '@angular/http/';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})


export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService
  ) {}

  onStoreRecipes () {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => console.log(response)
      )
  }

}



