import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputServiceService } from '../input-service.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent implements OnInit {
  users: any;
 addGender: Array<string> = [];
 addCountry: Array<string> = [];
 @Output() getComment = new EventEmitter();

  constructor(private service: ServiceService,  private input: InputServiceService, private router: Router) {
    this.getData();
    this.addGender = this.input.gender;
    this.addCountry = this.input.countries;
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

  deleteData(user) {
    if (confirm('This will delete permanently')) {
    this.service.deleteUser(user.id).subscribe(data => {
      this.getData();
    }, err => {
      console.log(err);
    }, () => {
      console.log(`data delete successfully`);
    });
  } else {
    this.getData();
  }
  }
  selectUser(user) {
    console.log(user);
    this.getComment.emit(user);
  }

  ngOnInit(): void {
  }

}
