import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { WelcomPageComponent } from './welcom-page/welcom-page.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { JScontentComponent } from './content/jscontent/jscontent.component';
import { CSScontentComponent } from './content/csscontent/csscontent.component';
import { HTMLcontentComponent } from './content/htmlcontent/htmlcontent.component';
import { PostComponent } from './content/post/post.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminJssComponent } from './admin-jss/admin-jss.component';
import { AdminCssComponent } from './admin-css/admin-css.component';
import { AdminHtmlComponent } from './admin-html/admin-html.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ContentComponent,
    WelcomPageComponent,
    JScontentComponent,
    CSScontentComponent,
    HTMLcontentComponent,
    PostComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminJssComponent,
    AdminCssComponent,
    AdminHtmlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
