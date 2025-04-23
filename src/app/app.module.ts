import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DurationPipe } from './pipes/duration.pipe';
import { DatePipe } from '@angular/common';
import { WorkersListComponent } from './home/workers-list/workers-list.component';
import { WorkersFlightsComponent } from './home/workers-flights/workers-flights.component';
import { FlightInfoComponent } from './home/flight-info/flight-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkersListComponent,
    WorkersFlightsComponent,
    FlightInfoComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    DurationPipe
  ],
  providers: [
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ], bootstrap: [AppComponent]
})
export class AppModule { }
