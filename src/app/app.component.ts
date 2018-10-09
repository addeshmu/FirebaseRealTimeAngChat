import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemsList: Observable<any[]>;
  msg: string = '';
  editMsg:boolean =false;
  editId: number;
   constructor(public af: AngularFireDatabase) {
     this.af = af;
     this.itemsList = af.list('/messages').snapshotChanges();

   }

   send(chatMsg: string) {
     this.af.list('/messages').push( {message: chatMsg} );
     this.msg = '';
   }

   delete(key:string) {
     this.af.list('/messages').remove(key);
   }

   edit(key:string, message:string) {
     this.af.list('/messages').update(key,{message:message});
     this.editMsg = false;
   }
}
