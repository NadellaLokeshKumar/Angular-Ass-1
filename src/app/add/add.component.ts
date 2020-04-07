import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InputServiceService } from '../input-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  isReadOnly = true;
  kind;
  selectedUser;
  addGender: Array<string> = [];
  addCountry: Array<string> = [];

  constructor(private service: ServiceService, private router: Router, private input: InputServiceService, private route: ActivatedRoute) {
    this.addGender = this.input.gender;
    this.addCountry = this.input.countries;
  }

  ngOnInit(): void {
   this.kind = this.route.snapshot.data.kind;
   if (this.kind === 'edit' || 'view' || 'copy') {
    const id = this.route.snapshot.paramMap.get('id');
    this.getData(id);
   }
  }

  submitData(form: NgForm) {
    this.service.add(form.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl(`/allRecords`);
    });
  }

  updateData(form) {
    this.service.updateUser(form.value.id, form.value).subscribe(res => {
      console.log(form.value);
      this.router.navigateByUrl(`/allRecords`);
    });
  }

  getData(id) {
    this.service.getUser(id).subscribe(data => {
      console.log(data);
      this.selectedUser = data;
    }, err => {
      console.log(err);
    }, () => {
      console.log(`data got successfully`);
    });
  }

  copy(form) {
    console.log(form.vaule);
    this.router.navigateByUrl(`/allRecords`);
  }

}
