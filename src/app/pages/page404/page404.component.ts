import {Component, OnInit} from "@angular/core";
import {CONST} from "@app/core/const/constant";
import {Router} from "@angular/router";

@Component({
  selector: "app-page404",
  templateUrl: "./page404.component.html",
  styleUrls: ["./page404.component.scss"],
})
export class Page404Component implements OnInit {
  public startTimeRedirect: number = 15;
  private lastTimeRedirect: number = 0;
  public notFoundPage = CONST.MSG.NOT_FOUND_PAGE;
  public URL_LOGIN = CONST.URL_LOGIN;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const countdownInterval = setInterval(() => {
      this.startTimeRedirect -= 1;

      if (this.startTimeRedirect === this.lastTimeRedirect) {
        clearInterval(countdownInterval);
        this.redirectTo(CONST.URL_LOGIN);
      }
    }, 1000);
  }

  public redirectTo(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
