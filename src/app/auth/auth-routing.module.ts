import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInPasswordComponent } from './components/sign-in-password/sign-in-password.component';
import { SignInEmailComponent } from './components/sign-in-email/sign-in-email.component';
import { AuthComponent } from './auth.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin/email',
        component: SignInEmailComponent,
      },
      {
        path: 'signin/password',
        component: SignInPasswordComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
