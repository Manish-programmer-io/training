import { CanDeactivateFn } from '@angular/router';
import { MerchantComponent } from '../components/merchant/merchant.component';
import { LoginComponent } from '../components/login/login.component';


export const deactivateGuard: CanDeactivateFn<LoginComponent> = (component, currentRoute, currentState, nextState) => {
  
  return window.confirm("Are you sure you want to move to registeration page?")

};
