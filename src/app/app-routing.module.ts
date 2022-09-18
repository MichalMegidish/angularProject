import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path:"login", component:LoginComponent},
  {path: "home", component:HomeComponent, canActivate: [UserGuard]},
  {path:"customersDetails/:firstName", component: CustomerDetailsComponent,canActivate: [UserGuard]},
  {path:"register", component: RegisterComponent},
  {path:"contact", component:ContactComponent, canActivate:[UserGuard]},
  {path: "padeNotFound", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
