import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//NGRX
import { Store } from '@ngrx/store';
import * as desdeCosas from '../../store/reducer/reducer';
import * as acciones from '../../store/action/action';
import { Observable } from 'rxjs';
import { InputModalPage } from './input-modal/input-modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  $cosa: Store<desdeCosas.Cosa[]>;
  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    public store: Store<desdeCosas.Cosa>
  ) {

  }
  ngOnInit() {
    this.$cosa = this.store.select(desdeCosas.selectAllCosas)
  }
  addItem(_params: desdeCosas.Cosa) {
    let cosa: desdeCosas.Cosa = _params
    this.store.dispatch(new acciones.AddCosa({ cosa }))
  }

  updateItem(_params: desdeCosas.Cosa) {

    let changes: desdeCosas.Cosa = {
      name: _params.name,
      text: _params.text
    }

    let cosa = {
      id: _params.id, changes
    }
    this.store.dispatch(new acciones.UpdateCosa({ cosa }))

  }
  deleteItem(id) {
    this.store.dispatch(new acciones.DeleteCosa({ id }))
  }
  presentModal(item) {
    console.log("Item: ");
    console.log(item);
    let theModal = this.modalCtrl.create(InputModalPage, { item });

    theModal.onDidDismiss(data => {
      console.log(data);
      if (data.success) {

        if (data.id) {
          this.updateItem({...data})
        } else {
          this.addItem({
            id: Math.random().toString(12).slice(2),
            name: data.name,
            text: data.text
          })
        }
      }
    });

    theModal.present();
  }


}
