import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  submitData(form: NgForm) {
    this.service.add(form.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/allRecords');
    });
  }
}
