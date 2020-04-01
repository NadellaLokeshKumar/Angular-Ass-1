import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent implements OnInit {
  users: any;

  constructor(private service: ServiceService) {
    this.getData();
  }

  getData() {
    this.service.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    }, err => {
      console.log(err);
    }, () => {
      console.log(`data got successfully`);
    });
  }

  ngOnInit(): void {
  }

}
