import {
  Component,
  OnInit,
  EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    console.log('lol');
    const value = form.value;
    console.log(value);
    const newIngredient = new Ingredient(value.name, value.amount);
    console.log(newIngredient);
    this.shoppingService.ingredientAdded.next(newIngredient);
  }

}
