import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HomeService {

    constructor(private http: HttpClient){
  
    }

  getItems(): Observable<any> {
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY");
  }

}
