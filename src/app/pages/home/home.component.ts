import {Component, ElementRef, OnInit, Renderer2} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {CONST} from "@app/const/constant";
import {isEmptyNullUndefined} from "@app/common/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public isLoading = false;
  private textElement: HTMLElement | null = null;
  private textToType: string = CONST.LIST_SKILL;
  private typeSpeed: number = 100; // Tốc độ gõ
  private backSpeed: number = 100; // Tốc độ xóa
  private backDelay: number = 1000; // Thời gian chờ trước khi xóa và gõ lại
  private loop: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.textElement = this.el.nativeElement.querySelector('#text');
    this.typeText();
  }

  ngOnDestroy() {
    this.typeText();
  }

  private typeText() {
    if (this.textElement) {
      const type = (text: string) => {
        if (this.textElement) {
          this.textElement.textContent += text[0];
          text = text.substr(1);
          if (text.length > 0) {
            setTimeout(() => type(text), this.typeSpeed);
          } else {
            setTimeout(() => this.eraseText(), this.backDelay);
          }
        }
      };
      setTimeout(() => type(this.textToType), this.typeSpeed);
    }
  }

  private eraseText() {
    if (this.textElement) {
      let text: any = this.textElement.textContent;
      text = text.substr(0, text.length - 1);
      this.textElement.textContent = text;
      if (text !== null && text.length > 0) {
        setTimeout(() => this.eraseText(), this.backSpeed);
      } else {
        if (this.loop) {
          setTimeout(() => this.typeText(), this.backDelay);
        }
      }
    }
  }

  public redirectTo(url: string) {
    this.router.navigate([`/${url}`]);
  }

  public ngAfterViewInit() {
    this.renderer.listen("window", "scroll", event => {
      this.handleScroll();
    });
  }

  private handleScroll() {
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
