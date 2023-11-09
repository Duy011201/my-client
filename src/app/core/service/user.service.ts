import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({providedIn: 'platform'})
export class UserService {
    information: Subject<any> = new Subject<any>();
    constructor(
    ) {
    }
}
