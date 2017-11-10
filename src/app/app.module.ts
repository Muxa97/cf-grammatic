import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatInputModule} from '@angular/material';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { InputRulesComponent } from './components/input-rules/input-rules.component';
import {ExpressionService} from './services/expression.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkspaceComponent,
    InputRulesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ExpressionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
