import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { EventPage } from '../home/home';
import { MapComponent } from '../map/map.component';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabEventpage = EventPage;
  tabMap = MapComponent;
  tabJoinedevents = AboutPage;
  tabFriends = ContactPage;
  tabSearchPage = SearchPage;

  constructor() {

  }
}
