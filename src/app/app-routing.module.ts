import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from '../app/cmps/contact-details/contact-details.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ChartComponent } from './cmps/chart-page/chart-page.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { authGuard } from './cmps/guards/auth-guard';
import { contactResolver } from './services/contact.resolver.service';
import { SignUpComponent } from './cmps/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactIndexComponent, children: [
      { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: contactResolver } },
      { path: 'edit', component: ContactEditComponent },
    ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: contactResolver },
  },
  { path: 'chart', component: ChartComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomePageComponent, canActivate: [authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }