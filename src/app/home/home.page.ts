import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  
  id : any[];
  name : any[];
  image_icon : any[];

  constructor() {

    this.createStaticDataForList();
  }

  //parse json data
  createStaticDataForList()
  {
    
    this.id = [];
    this.name = [];
    this.image_icon = [];

    for(let i = 0; i < 10; i++)
    {
      this.id.push(i+1);
      this.name.push("Shop Name "+(i+1));
      this.image_icon.push("http://localhost/benosysbill/icons8-small-business-64.png");
    }

  }
  getItems(ev) {
    // Reset items back to all of the items
    

    this.createStaticDataForList();
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.name = this.name.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
