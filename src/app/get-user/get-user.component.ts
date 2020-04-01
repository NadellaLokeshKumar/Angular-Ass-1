import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  user;
  email: string;
  isReadOnly = true;
  constructor(private service: ServiceService, private route: ActivatedRoute) {
    this.getData(this.route.snapshot.params[`id`]);
  }

  getData(id) {
    this.service.getUser(id).subscribe(data => {
      console.log(data);
      this.user = data;
    }, err => {
      console.log(err);
    }, () => {
      console.log(`data got successfully`);
    });
  }

  ngOnInit(): void {
  }
}
