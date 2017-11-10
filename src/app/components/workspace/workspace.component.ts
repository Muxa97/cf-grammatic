import { Component, ViewEncapsulation } from '@angular/core';
import {ExpressionService} from '../../services/expression.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkspaceComponent {

  public expressionText: string;

  constructor(private expressionService: ExpressionService) { }

  public checkExpression(): void {
    this.expressionService.checkExpression(this.expressionText);
    this.expressionText = '';
  }
}
