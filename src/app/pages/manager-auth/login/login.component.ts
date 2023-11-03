import { Component, OnInit } from "@angular/core";
import { error } from "../../../common/sweetalert2";
import { isEmptyNullUndefined } from "../../../common/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLoading = true;
  email = "";
  password = "";

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
