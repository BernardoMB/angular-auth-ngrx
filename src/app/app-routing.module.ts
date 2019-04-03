import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingComponent } from './components/landing/landing.component';
import { StatusComponent } from './components/status/status.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  // If a admin panel app requieres a landing page, the auth guard below should be removed.
  { path: '', component: LandingComponent/* , canActivate: [AuthGuardService] */ },
  { path: 'log-in', component: LogInComponent },
  // Sign-up route should be disabled if the app requires no sign-up.
  { path: 'sign-up', component: SignUpComponent },
  // Status is a development feature and can also be disabled.
  { path: 'status', component: StatusComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
