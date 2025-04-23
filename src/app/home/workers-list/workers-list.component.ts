import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Workers } from 'src/app/model/workers';
import { WorkersService } from 'src/app/services/workers-service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})

export class WorkersListComponent implements OnInit  {

  @Output() selectedWorker = new EventEmitter<number>();
  allWorkers:  Workers[] = [];
  selectedWorkerId!: number;
  constructor(public workerFlightsService: WorkersService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    await this.workerFlightsService.getWorkers().subscribe((data) => {
      if (data) {
        this.allWorkers = data;
      }
    });
  }

  selectWorker(id: number) {
    this.selectedWorkerId = id;
    this.selectedWorker.emit(id);
  }

}
