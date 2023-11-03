import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page404",
  templateUrl: "./page404.component.html",
  styleUrls: ["./page404.component.scss"],
})
export class Page404Component implements OnInit {
  private infoUser: any;
  public count = 0;

  ngOnInit(): void {
    if (!this.infoUser) {
      this.count = 0;
      const redirectInterval = setInterval(() => {
        if (this.count < 10) {
          this.count += 1;
        } else {
          clearInterval(redirectInterval);
          window.location.href = "auth/login";
        }
      }, 1000);
    }
  }
}
