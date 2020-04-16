import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: './event-list.pagecomponent',
})

export class EventPage {

  constructor(public navCtrl: NavController, private alert: AlertController) {}


  events = [
    { 
      eventName: "Mountain Bike Movie Premiere",
      description:  "Premiere from X-treme5ports of Biking the Wasatch mountain range ski resorts before the coronacolypse",
      eventType: "Movie",
      eventAttendees: 40,
      eventTime: "7:00 p.m.",
      eventPlace: "Alta"
      
    },
    { 
      eventName: "Jazz Basketball Game",
      description:  "The Jazz take on the Boston Celtics in this electric NBA matchup.",
      eventType: "Sports",
      eventAttendees: 40,
      eventTime: "8:00p.m.",
      eventPlace: "Salt Lake City"
    },
    {
      eventName: "Utah Utes v.s. Stanford",
      description: "The Utah Utes take on the Stanford Trees in a powerhouse event put on by NCAA",
      eventtype: "Sports",
      eventAttendees: 40,
      eventTime: "7:00 p.m.",
      eventPlace: "Salt Lake City",
	  },
    {
      eventName: "Utah Utes v.s. Stanford",
      description: "The Utah Utes take on the Stanford Trees in a powerhouse event put on by NCAA",
      eventtype: "Sports",
      eventAttendees: 40,
      eventTime: "7:00 p.m.",
      eventPlace: "Salt Lake City",
	  },
    {
      eventName: "Utah Utes v.s. Stanford",
      description: "The Utah Utes take on the Stanford Trees in a powerhouse event put on by NCAA",
      eventtype: "Sports",
      eventAttendees: 40,
      eventTime: "7:00 p.m.",
      eventPlace: "Salt Lake City",
	  },
    {
      eventName: "Utah Utes v.s. Stanford",
      description: "The Utah Utes take on the Stanford Trees in a powerhouse event put on by NCAA",
      eventtype: "Sports",
      eventAttendees: 40,
      eventTime: "7:00 p.m.",
      eventPlace: "Salt Lake City",
	  },

  ];

  deleteEvent(event) {
    if(event) {
      let index = this.events.indexOf(event);
      this.events.splice(index, 1);
    }
  }
  joinEventAlert(event) {
    const prompt = this.alert.create({
      title: "Join?",
      message: "Would you like to join?" ,
      buttons: [
        {
          text: "Yes",
          handler: data => {
            this.deleteEvent(event);
            console.log("Event Joined");
          }
        },
        {
          text: "No",
          handler: data => {
            console.log("No Clicked")
          }
        },
      ]
    });
    prompt.present();
  }
  showEventDetailAlert(event) {
    const prompt = this.alert.create({
      title: "Event Details",
      message: "Message text!",
      subTitle: "Join Event?",
      buttons: [
        {
          text: "Yes",
          handler: data => {
            this.deleteEvent(event)
            console.log("Event Joined")
          }
        },
        {
          text: "No",
          handler: data => {
            console.log("Event not Joined")
          }
        },
      ]
    });
    prompt.present();
  }
}