import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 6
    },
    {
      name: "Eggs",
      quantity: 1
    }
  ];

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }
  removeItem(item){
    console.log("Removing Item -", item)
    const toast = this.toastCtrl.create({
      message = 'Removing Item - ' + item.name + "...",
      duration: 3000
    })
    toast.present();

    this.items.splice(index, 1);
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
            this.items.push(item);
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
            this.items[index] = item;
          }
        }
      ]
    });
    prompt.present();
  }
}
