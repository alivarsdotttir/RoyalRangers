import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  Posts : boolean = true;
  Images : boolean = false;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.homeService.getUsers().subscribe(data => {
      console.log(data);
    });
  }

  changeDisplay(x : string){
    if(x === "Posts"){
      this.Posts = true;
      this.Images = false;
    }
    else if(x === "Images"){
      this.Posts = false;
      this.Images = true;
    }
  }

}
