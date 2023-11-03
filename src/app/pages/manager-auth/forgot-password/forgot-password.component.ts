import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { error } from "@app/common/sweetalert2";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent {
  isLoading = true;
  email = "";
  password = "";
  isCode = false;

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
