import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Output,
  EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    this.shoppingService.ingredientAdded.emit(new Ingredient(ingName, ingAmount));
  }

}
