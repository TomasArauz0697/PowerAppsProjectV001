import { Routes } from '@angular/router';
import { PopUpCompoenteComponent } from './pop-up-compoente/pop-up-compoente.component';
import { FormAccountComponent } from './form-account/form-account.component';

export const routes: Routes = [
    {path:"",component:PopUpCompoenteComponent},
    {path:"list-account",component:PopUpCompoenteComponent},
    {path:"FormC",component:FormAccountComponent}
];
