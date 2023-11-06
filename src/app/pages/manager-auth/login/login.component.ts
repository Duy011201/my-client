import { Component, OnInit } from "@angular/core";
import { error } from "@app/common/sweetalert2";
import { isEmptyNullUndefined } from "@app/common/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public isLoading = true;
  public email = "";
  public password = "";

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
    if (isEmptyNullUndefined(this.email)) {
      error("Có lỗi xảy ra!");
      return;
    }

    if (isEmptyNullUndefined(this.password)) {
      error("Có lỗi xảy ra!");
      return;
    }

  }
}
