import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements OnDestroy{
  private isAutorized = false;
  
  constructor(private authService: AuthService, private router: Router){
    authService.isAuthorized$.subscribe(registered=>{
      if(registered) this.isAutorized = registered;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree|any {
    if(this.isAutorized){
      return true
    }else{
      timer(4000).subscribe(()=>{
        this.router.navigate(['/auth']);
        return false;
      })
    }
  }

  ngOnDestroy(): void {
  }
}
