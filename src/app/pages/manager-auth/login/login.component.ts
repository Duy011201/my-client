import { Component, OnInit } from "@angular/core";
import { error } from "@app/core/common/sweetalert2";
import { isEmptyNullUndefined } from "@app/core/common/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CONST } from "@app/core/const/constant";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public isLoading = true;
  public email = "";
  public password = "";
  public URL_REGISTER = CONST.URL_AUTH + '/' + CONST.URL_REGISTER;
  public URL_FORGOT_PASSWORD = CONST.URL_AUTH + '/' + CONST.URL_FORGOT_PASSWORD;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.isLoading = false;
  }

  public redirectTo(url: string) {
    this.router.navigate([`/${url}`]);
  }

  public onSubmit(): void {
    if (isEmptyNullUndefined(this.email)) {
      error("Có lỗi xảy ra!");
      return;
    }

    if (isEmptyNullUndefined(this.password)) {
      error("Có lỗi xảy ra!");
      return;
    }

    if (this.email === 'nguyenduy011201@gmail.com' && this.password === '1') {
      localStorage.setItem("userID", "user_1");
      localStorage.setItem("info", '');
      localStorage.setItem("token", "token");

      this.isLoading = true
      setTimeout(() => {
        this.redirectTo('/dashboard');
        this.isLoading = false;
      }, 1000)
    }
  }
}
