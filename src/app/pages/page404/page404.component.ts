import {Component, OnInit} from "@angular/core";
import {CONST} from "@app/const/constant";
import {Router} from "@angular/router";
import { isEmptyNullUndefined } from "@app/common/core";

@Component({
  selector: "app-page404",
  templateUrl: "./page404.component.html",
  styleUrls: ["./page404.component.scss"],
})
export class Page404Component implements OnInit {
  private infoUser: any;
  public startTimeRedirect: number = 15;
  private lastTimeRedirect: number = 0;
  public notFoundPage = CONST.MSG.NOT_FOUND_PAGE;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (isEmptyNullUndefined(this.infoUser)) {
      const countdownInterval = setInterval(() => {
        this.startTimeRedirect -= 1;

        if (this.startTimeRedirect === this.lastTimeRedirect) {
          clearInterval(countdownInterval);
          this.redirectTo('auth/login');
        }
      }, 1000);
    }
  }

  public redirectTo(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
