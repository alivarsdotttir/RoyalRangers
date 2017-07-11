import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent,
      pathMatch: 'full'

    }])
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
