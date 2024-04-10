import { CanActivateFn } from '@angular/router';

export const verifyGuard: CanActivateFn = (route, state) => {
  return (localStorage.getItem("seller"))?(true):(false);
};
