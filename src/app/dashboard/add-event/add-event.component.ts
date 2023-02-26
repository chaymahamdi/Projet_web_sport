import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  categories:any = [];
  
  constructor(private categoryServiceService: CategoryServiceService) { }
  form: any = {
    title: null,
    description: null,
    image:"image",
    date: null,
    startTime: null,
    endTime:null,
    location:null,
    categoryId:null,
  };
  ngOnInit(): void {
    
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
  onSubmit(): void {
    console.log(this.form);
    this.categoryServiceService.addEvent(this.form).subscribe({
      
      next: response => {
        console.log(response);
      },
      error: err => {
        console.log(err);
      }
  });
  }
  


}
