import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService} from './http.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubmitComponent } from './submit/submit.component';
import { RateComponent } from './rate/rate.component';
import { FocusComponent } from './focus/focus.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubmitComponent,
    RateComponent,
    FocusComponent,
    LoginRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
