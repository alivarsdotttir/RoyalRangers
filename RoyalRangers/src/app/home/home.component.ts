import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
<<<<<<< HEAD
  Posts: boolean = true;
  Images: boolean = false;
  Notifications: boolean = false;
=======
  Posts : boolean = true;
  Images : boolean = false;
  Notifications : boolean = false;
>>>>>>> 08769218904012d9dffbcfda688e399f773836cc

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.homeService.getUsers().subscribe(data => {
      console.log(data);
    });
  }

  changeDisplay(x: string) {
    if (x === "Posts") {
      this.Posts = true;
      this.Images = false;
      this.Notifications = false;
    }
    else if (x === "Images") {
      this.Posts = false;
      this.Images = true;
      this.Notifications = false;;
    }
    else if(x === "Notifications"){
      this.Posts = false;
      this.Images = false;
      this.Notifications = true;
    }
  }

}
