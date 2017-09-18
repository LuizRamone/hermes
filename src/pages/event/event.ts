import { EventDetailPage } from './../event-detail/event-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  items: FirebaseListObservable<any[]>;

  push(key) {
    this.navCtrl.push(EventDetailPage, {eventId: key});
  }

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
  ) {
    this.items = db.list('/events')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
