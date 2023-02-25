import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  categories:any = [];
  form: any = {
    title: null,
    description: null,
    location: null,
    date: null,
    startTime:null,
    endTime:null,
    categoryId: null

  };
  constructor(private categoryServiceService: CategoryServiceService) { }

  ngOnInit(): void {
    console.log("ok");
    this.getCategories();
  }

  getCategories() {
    this.categoryServiceService.getCategories().subscribe({
      next: data => {
        this.categories = data;
        console.log(this.categories);
      },
      error: err => {
        console.log(err);
      }
    });
  }


}
