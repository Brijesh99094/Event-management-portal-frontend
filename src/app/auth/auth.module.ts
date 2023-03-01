import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInEmailComponent } from './components/sign-in-email/sign-in-email.component';
import { SignInPasswordComponent } from './components/sign-in-password/sign-in-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    AuthFooterComponent,
    AuthHeaderComponent,
    AuthComponent,
    SignUpComponent,
    SignInEmailComponent,
    SignInPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
