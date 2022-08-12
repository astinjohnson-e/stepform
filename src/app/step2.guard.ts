import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Step2Guard implements CanActivate {

  constructor ( private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return this.check(url);
    }

    check(url: string): true | UrlTree {
      console.log("Url: " + url)
      let step1: string | null = localStorage.getItem('step1');
      console.log(step1);
      if (step1 != null && step1 == "true" ) {
        return true;
      }
      else {
        alert("Please fill step 1 first...");
      }
      return this.router.parseUrl('');
    }
}
