import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../services/http-service.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public api_url:any =this.httpServiceService.baseUrl;
  constructor(public router:Router,public httpClient:HttpClient, public cookieService: CookieService,public httpServiceService: HttpServiceService) {
    const link = this.api_url + 'temptoken';
    this.httpClient.post(link, {}).subscribe(res => {
    let result: any = res;
    this.cookieService.set('jwtToken', result.token);

  });
  }

  ngOnInit() {
  //   let slideIndex = 0;
  //   showSlides();

  //   function showSlides() {
  //     let i;
  //     let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  //     let dots = document.getElementsByClassName("dot");

  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //     }
  //     slideIndex++;
  //     if (slideIndex > slides.length) { slideIndex = 1 }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //     }
  //     slides[slideIndex - 1].style.display = "block";
  //     dots[slideIndex - 1].className += " active";
  //     setTimeout(showSlides, 4500); // Change image every 2 seconds
  //   }
 
  //   function truncateText(selector, maxLength) {
  //     var element = <HTMLElement>document.querySelector(".blog_item_paragraph"),
  //       truncated = element.innerText;
  //     console.log(truncated.length)

  //     if (truncated.length > maxLength) {
  //       truncated = truncated.substr(0, maxLength) + '...';
  //     }
  //     return truncated;
  //   }

  
  //   document.querySelector('.blog_item_paragraph').innerHTML = truncateText('.blog_item_paragraph', 350);
  // }


  }

  //***********blog list view in blog detail************//


  // showmore(index:any) {
  //   this.p_id = index._id;
  //  }

   copyText(val:any){
    console.log('copyText');
  }


  
  //***********blog list view in blog detail************//
  blogdetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/blog-details/' +val)
  }

  
}
