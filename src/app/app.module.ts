import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCommonModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {AppComponent} from './app.component';
import {ModalConfigurationComponent} from './modal-configuration/modal-configuration.component';
import {A11yModule} from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    ModalConfigurationComponent
  ],
  imports: [
    BrowserModule,
    MatCommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    CdkTableModule,
    DragDropModule,
    MatCheckboxModule,
    A11yModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalConfigurationComponent
  ]
})
export class AppModule {
}
