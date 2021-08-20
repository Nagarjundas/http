import { Component } from '@angular/core';
import{ServiceService} from './service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http';
  Dog : any =[];
  constructor(private service: ServiceService) {}

showImage(){

this.service.getImage().subscribe(data =>{
this.Dog = data;
console.log(this.Dog);
})

}

}
