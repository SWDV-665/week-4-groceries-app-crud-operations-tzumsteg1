import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Grocery List";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService) {

  }
  loadItems(){
    return this.dataService.getItems();
  }
  removeItem(item){
    console.log("Removing Item -", item)
    const toast = this.toastCtrl.create({
      message = 'Removing Item - ' + item.name + "...",
      duration: 3000
    })
    toast.present();

    this.dataService.removeItem(index);

  }

  editItem(item){
    console.log("Edit Item -", item)
    const toast = this.toastCtrl.create({
      message = 'Editing Item - ' + item.name + "...",
      duration: 3000
    })
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  addItem(){
    console.log("Adding Item");
    this.inputDialogService.showPrompt();

  } 
}
