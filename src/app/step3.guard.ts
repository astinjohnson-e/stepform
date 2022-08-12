import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Step3Guard implements CanActivate {

  constructor (private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return this.check(url);
    }

    check(url: string): true | UrlTree {
      console.log("Url: " + url)
      let step1: string | null = localStorage.getItem('step1');
      let step2: string | null = localStorage.getItem('step2');
      console.log(step1,step2);
      if (step1 != null && step1 == "true" && step2 != null && step2 == "true" ) {
        return true;
      }
      else {
        alert("Please fill step 1 & step 2 first...");
      }
      return this.router.parseUrl('');
    }
}
