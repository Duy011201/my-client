import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { error } from "@app/core/common/sweetalert2";
import {CONST} from "@app/core/const/constant";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent {
  public isLoading = true;
  public URL_LOGIN = CONST.URL_AUTH + '/' + CONST.URL_LOGIN;
  public email = "";
  public password = "";
  public isCode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.isLoading = false;
  }

  public redirectTo(url: string) {
    this.router.navigate([`/${url}`]);
  }

  public onSubmit(): void {
    error("Có lỗi xảy ra!");
  }
}
