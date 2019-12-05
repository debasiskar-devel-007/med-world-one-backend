import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public blogDetail:any;
  public indexval:any=4;
  public p_id: any;
  public blog:any = '';
  public blog_img:any;
  public blog_image:any;
  public blogcat:any = ''; 
  public resc: any = [];
  public blogCount: any =[];
  public blogListing: any = [];    
  public blogtitle: any;


  constructor(public activeRoute: ActivatedRoute, public httpservice: HttpServiceService, private router: Router,private cookieService: CookieService) {

     /*------------Blog List-----*/
     let data: any = {
      source:"blogs_view",
      condition: { }
    }

    this.httpservice.postDataWithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
      //console.log(result.res);
      this.blogListing = result.res;
      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogListing);
    });

     /*------------End Blog List-----*/


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

  //***********blog list view in blog detail************//


  showmore(index:any) {
    this.p_id = index._id;
   }

   copyText(val:any){
    console.log('copyText');
  }


  
  //***********blog list view in blog detail************//
  blogdetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/blog-details/' +val)
  }

  
}
