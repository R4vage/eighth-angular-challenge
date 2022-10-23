import { Product } from './../../../models/product.models';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent{
  @Input() product!: Product;
};
