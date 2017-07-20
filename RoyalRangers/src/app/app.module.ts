import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeService } from './home.service';
import { HttpModule } from '@angular/http';
import {MdToolbarModule, MdIconModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdCardModule} from "@angular2-material/card";
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ImagesComponent } from './images/images.component';
import { ImageModal } from './images/angular2-image-popup/image-modal-popup';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    PostDetailComponent,
    ImagesComponent,
    ImageModal,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdCardModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdIconModule,
    MdCardModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent,
      pathMatch: 'full'

    },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
      },
      {
        path: 'postdetail/:id',
        component: PostDetailComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
