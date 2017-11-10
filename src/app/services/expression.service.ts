import { Injectable } from '@angular/core';
import { Expression } from '../models/expression';

@Injectable()
export class ExpressionService {

  private expressions: Expression[];

  constructor() {
    this.expressions = [];
  }

  public checkExpression(text: string): void {
    if (text) {
      if (this.expressions.length === 4) {
        this.expressions.pop();
      }
      this.expressions.reverse();
      this.expressions.push({expression: text, isValid: this.parseExpression(text)});
      this.expressions.reverse();
    }
  }

  public getExpressions(): Expression[] {
    return this.expressions;
  }

  public parseExpression(exp: string): number {
    if (exp.length > 2) {
      return this.parseSign(exp, 0);
    } else {
      if ((exp[0] === '1' || exp[0] === '3' || exp[0] === '5' || exp[0] === '7' || exp[0] === '9') && exp[1] === '0' ) {
        return 3;
      } else {
        return 2;
      }
    }
  }

  public parseSign(exp: string, index: number): number {
    const validChars = '+-1234567890_';
    if (validChars.indexOf(exp[index]) !== -1) {
      if (exp[index] === '+' || exp[index] === '-') {
        index++;
      }
      return this.parseNumber(exp, index);
    } else {
      return 2;
    }
  }

  public parseNumber(exp: string, index: number): number {
    const validChars = '1234567890_';
    while (index + 2 < exp.length && exp[index] !== '_') {
      if (validChars.indexOf(exp[index]) !== -1) {
        index++;
      } else {
        return 2;
      }
    }

    return this.parseEnding(exp, index);
  }

  public parseEnding(exp: string, index: number): number {
    const oddNums = '13579';

    if (exp[index] === '_') {
      index++;
      if (oddNums.indexOf(exp[index++]) !== -1 && exp[index] === '0') {
        return 1;
      } else {
        return 2;
      }
    } else {
      if (oddNums.indexOf(exp[index++]) !== -1 && exp[index] === '0') {
        return 3;
      } else {
        return 2;
      }
    }
  }

}
