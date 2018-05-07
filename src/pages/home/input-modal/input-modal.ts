import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'input-modal.html'
})
export class InputModalPage {

  item = { name: "", text: "" };
  title: string;
  constructor(
    public viewCtrl: ViewController,
    private params: NavParams
  ) {
    let inputParams = this.params.get('item');
    this.title = 'Añadir nueva tarjeta';
    if (inputParams != null) {

      this.title = 'Modificar tarjeta';
      this.item = inputParams;
    }
  }

  /**
   * return success as false, no update required
   */
  cancel() {
    this.viewCtrl.dismiss({ success: false });
  }

  /**
   * return the updated data to the parent inorder
   * to update the store
   */
  saveItem() {
    let result = {
      success: true,
      ...this.item
    };
    this.viewCtrl.dismiss(result);
  }
}