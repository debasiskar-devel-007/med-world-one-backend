import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {

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
