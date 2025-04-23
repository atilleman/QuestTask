import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Flights } from 'src/app/model/flights';
import { FlightsService } from 'src/app/services/flights-service';

@Component({
  selector: 'app-workers-flights',
  templateUrl: './workers-flights.component.html',
  styleUrls: ['./workers-flights.component.scss']
})

export class WorkersFlightsComponent implements OnChanges, OnDestroy  {

  @Input() workerId!: number;
  @Output() flightSelected = new EventEmitter<any>();
  displayedColumns: string[] = ['num', 'from', 'from_date', 'to', 'to_date'];

  flights: Flights[] = [];
  selectedFlight: any;
  interval: any;

  constructor(private flightsService: FlightsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['workerId']) {
      this.resetTimer();
      this.fetchFlights();
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.fetchFlights(), 60000);
  }

  fetchFlights() {
    this.flightsService.getFlights(this.workerId).subscribe(data => {
      this.flights = data;
      if (this.flights.length) {
        this.selectedFlight = this.flights[0];
        this.flightSelected.emit(this.flights[0]);
      }
    });
  }

  selectFlight(flight: any) {
    this.selectedFlight = flight;
    this.flightSelected.emit(flight);
  }
}
