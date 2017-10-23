import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InputComponentPage } from '../pages/input-component/input-component';
import { DynamicComponentService } from '../service/dynamicComponent.service';
import { Page1Page } from '../pages/page1/page1';
import { SafeHtmlPipe } from '../pipe/safeHtml.pipe';
import { CreateComponent } from '../service/createComponent';
import {NgPipesModule} from 'ngx-pipes';
import { NumberSpinnerComponent } from '../pages/number-spinner/number-spinner.component';
import { SlideElementPage } from '../pages/slide-element/slide-element';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1Page,
    SafeHtmlPipe,
   InputComponentPage,
   NumberSpinnerComponent,
   SlideElementPage
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1Page,
    HomePage,
    InputComponentPage,
    NumberSpinnerComponent,
    SlideElementPage
  ],
  providers: [
    StatusBar,
    DynamicComponentService,
    SplashScreen,
    CreateComponent,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
