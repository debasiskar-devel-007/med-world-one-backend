import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../services/http-service.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public api_url:any =this.httpServiceService.baseUrl;
  constructor(public httpClient:HttpClient, public cookieService: CookieService,public httpServiceService: HttpServiceService) {
    const link = this.api_url + 'temptoken';
    this.httpClient.post(link, {}).subscribe(res => {
    let result: any = res;
    this.cookieService.set('jwtToken', result.token);

  });
  }

  ngOnInit() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 4500); // Change image every 2 seconds
    }

    // text limit
    function truncateText(selector, maxLength) {
      var element = <HTMLElement>document.querySelector(".blog_item_paragraph"),
        truncated = element.innerText;
      console.log(truncated.length)

      if (truncated.length > maxLength) {
        truncated = truncated.substr(0, maxLength) + '...';
      }
      return truncated;
    }

    //You can then call the function with something like what i have below.
    document.querySelector('.blog_item_paragraph').innerHTML = truncateText('.blog_item_paragraph', 350);
  }



  redLine(){

  }
}
