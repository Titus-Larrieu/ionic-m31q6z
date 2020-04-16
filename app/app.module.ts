import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { EventPage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapComponent } from '../pages/map/map.component';
import { SearchPage } from '../pages/search/search';

//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    EventPage,
    TabsPage,
    MapComponent,
    SearchPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I'
    // })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    EventPage,
    TabsPage,
    MapComponent,
    SearchPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
