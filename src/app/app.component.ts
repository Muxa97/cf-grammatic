import { Component } from '@angular/core';
import {ExpressionService} from './services/expression.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private expressionService: ExpressionService) { }
}
