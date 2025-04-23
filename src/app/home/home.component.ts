import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  selectedWorkerId!: number;
  selectedFlight: any;

  onWorkerSelected(id: number) {
    this.selectedWorkerId = id;
  }

  onFlightSelected(flight: any) {
    this.selectedFlight = flight;
  }
}
