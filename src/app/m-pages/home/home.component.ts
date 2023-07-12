import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from 'src/app/data/movies';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private http:HttpClient){}
 movie: Movies | undefined
  ngOnInit(): void {
    this.http.get<Movies>("http://localhost:3000/movies").subscribe(x=>{
      console.log(this.movie = x);
    });
  }
}
