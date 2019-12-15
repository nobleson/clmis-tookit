import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
//import { AuthGuard } from './services/user/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  // { path: 'dashboard', loadChildren: './members/dashboard/dashboard.module#DashboardPageModule' },
  {
    path: 'members',
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule',
    //canActivate: [AuthGuard],
  },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'details-view', loadChildren: './pages/details-view/details-view.module#DetailsViewPageModule' },
  { path: 'details-porject', loadChildren: './pages/details-porject/details-porject.module#DetailsPorjectPageModule' },
  { path: 'success', loadChildren: './pages/success/success.module#SuccessPageModule' },
  { path: 'verify', loadChildren: './pages/verify/verify.module#VerifyPageModule' }


  /* {
    path: 'reset-password',
    loadChildren:
      './reset-password/reset-password.module#ResetPasswordPageModule',
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
