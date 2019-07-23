import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { GroceriesServiceService } from '../groceries-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Grocery List";

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceService) {

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
    this.showEditItemPrompt(item, index);
  }

  addItem(){
    console.log("Adding Item");

  }
  showAddItemPrompt(){
    const promp = this.alertCtrl.create({
      title: "Add Item",
      message: "Please enter your item.",
      inputs: [
        {
        name: 'name',
        placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
          },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item=> {
            console.log('Saved clicked', item);
            this.dataService.addItem(item);
          }
        }
      ]
    });
    prompt.present();
  }

  showEditItemPrompt(item, index){
    const promp = this.alertCtrl.create({
      title: "Edit Item",
      message: "Please edit item.",
      inputs: [
        {
        name: 'name',
        placeholder: 'Name',
        value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
          value: item.quantity
          },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item=> {
            console.log('Saved clicked', item);
            this.dataService.editItem(item, index);
          }
        }
      ]
    });
    prompt.present();
  }
}
