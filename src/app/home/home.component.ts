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

      },
      error => console.log(error)
    );
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  getHttp(data) :string {
    console.dir(data)

    return 'https://imagekit.androidphoria.com/wp-content/uploads/como-buscar-una-imagen-en-facebook-con-una-foto.jpg';
  }
}
