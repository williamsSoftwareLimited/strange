import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slider/slide/slide.component';
import { QuoteComponent } from './quote/quote.component';
import { HomeModule } from './home/home.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { blogReducer } from './reducers/blog.reducer';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TouchToDragComponent } from './quote/touch-to-drag.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastInterceptor } from './interceptors/toast.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    DesignPatternsComponent,
    ContactComponent,
    HomeComponent,
    NavComponent,
    SliderComponent,
    SlideComponent,
    QuoteComponent,
    TouchToDragComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    StoreModule.forRoot({ blogs: blogReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    FormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true,
      timeOut: 30000
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ToastInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
