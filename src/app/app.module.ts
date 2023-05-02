import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './views/home-page/home-page.component';
import { userService } from './services/user.service';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ChartComponent } from './cmps/chart-page/chart-page.component';
import { NgChartsModule } from 'ng2-charts';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { SignUpComponent } from './cmps/sign-up/sign-up.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { TrunsferFundComponent } from './cmps/trunsfer-fund/trunsfer-fund.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactIndexComponent,
        ContactListComponent,
        ContactPreviewComponent,
        ContactFilterComponent,
        HomePageComponent,
        ContactDetailsComponent,
        AppHeaderComponent,
        ChartComponent,
        ContactEditComponent,
        SignUpComponent,
        MovesListComponent,
        TrunsferFundComponent,
    ],
    imports: [
        NgChartsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [userService],
    bootstrap: [AppComponent]
})
export class AppModule { }
