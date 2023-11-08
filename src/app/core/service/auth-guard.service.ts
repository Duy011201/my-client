import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CONST} from "@app/core/const/constant";
import {isEmptyNullUndefined, logoutUser} from "@app/core/common/core";
import {Observable} from "rxjs";
import {UserService} from "@app/core/service/user.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  information: any = isEmptyNullUndefined(localStorage.getItem(<string>CONST.LOCALSTORAGE_INFO_USER))
    ? null : JSON.parse(<string>localStorage.getItem(<string>CONST.LOCALSTORAGE_INFO_USER));

  constructor(
    private _router: Router,
    private _serviceUser: UserService
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem(<string>CONST.LOCALSTORAGE_TOKEN);
    const userID = localStorage.getItem(<string>CONST.LOCALSTORAGE_USER_ID);
    if (isEmptyNullUndefined(this.information) || isEmptyNullUndefined(token) || isEmptyNullUndefined(userID)) {
      logoutUser();
      this._router.navigate([CONST.URL_LOGIN]).then(() => {
        return false;
      });
      return false;
    } else {
      if (this.information) {
        this._serviceUser.information.next(this.information);
      }
      return true;
    }
  }
}
