import { Component, OnInit, Renderer2 } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  public redirectTo(url: string) {
    this.router.navigate([`/${url}`]);
  }

  ngAfterViewInit() {
    // Tạo sự kiện scroll cho window
    this.renderer.listen("window", "scroll", event => {
      this.handleScroll();
    });
  }

  handleScroll() {
    const title = document.getElementById("title");
    const leaf = document.getElementById("leaf");
    const hill4 = document.getElementById("hill4");
    const hill5 = document.getElementById("hill5");
    const value = window.scrollY;

    if (title) title.style.marginTop = value * 2.5 + "px";
    if (leaf) leaf.style.left = value * 1.5 + "px";
    if (hill4) hill4.style.left = value * -1.5 + "px";
    if (hill5) hill5.style.left = value * 1.5 + "px";
  }
}
