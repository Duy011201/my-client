<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

=======
import { Component } from "@angular/core";
import { error } from "@app/core/common/sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import {CONST} from "@app/core/const/constant";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  public isLoading = true;
  public URL_LOGIN = CONST.URL_AUTH + '/' + CONST.URL_LOGIN;
  public email = "";
  public password = "";
  public username = "";

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
>>>>>>> dev
}
