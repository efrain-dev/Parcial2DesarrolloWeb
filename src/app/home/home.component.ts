import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { HomeService } from './home.service'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  items: Object

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    //this.items = this.itemService.getItems()
    this.homeService.getItems().subscribe(
      response => {
        this.items=response.photos;
        console.dir(this.items)

      },
      error => console.log(error)
    );
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
