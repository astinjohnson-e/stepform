import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviewGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    let url: string = state.url;
    return this.check(url);
  }
  check(url: string): true | UrlTree {
    console.log("Url: " + url)
    let step1: string | null = localStorage.getItem('step1');
    let step2: string | null = localStorage.getItem('step2');
    let step3: string | null = localStorage.getItem('step3');
    if (step1 != null && step1 == "true" && step2 != null && step2 == "true" && step3 != null && step3 == "true") {
      return true;
    }
    else {
      alert("Please fill step 1, step 2 & step 3 first...");
    }
    return this.router.parseUrl('');
  }
}
