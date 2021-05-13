import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Vavve Technology Task By Devendra Thorat';
  itemList = [];
  selectedItems = [];
  settings = {};
  saveSelectIten = [];



  ngOnInit() {

   
    this.itemList = [
        { "id": 1, "itemName": "0-24" },
        { "id": 2, "itemName": "25-99" },
        { "id": 3, "itemName": "100-249" },
        { "id": 4, "itemName": "250-499" },
        { "id": 5, "itemName": "500-999" },
        { "id": 6, "itemName": "1000-4999" },
        { "id": 6, "itemName": "5000-9999" }
    ];

   
    this.settings = {
        text: "Select Range",
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        classes: "myclass custom-class"
    };

}
    
onItemSelect(item: any) {
  this.saveSelectIten.push(item);
 }
OnItemDeSelect(item: any) {
 
  this.saveSelectIten.forEach((value,index)=>{
    if(value.id==item.id) this.saveSelectIten.splice(index,1);
});
 
}
onSelectAll(items: any) {

  for(let i =0;i<items.length;i++){
    this.saveSelectIten.push(items[i])
  }

  console.log(this.saveSelectIten);
  
}
onDeSelectAll(items: any) {
 
  this.saveSelectIten = [];
  console.log(this.saveSelectIten);
}

onSubmitFun(){

  console.log("Onsubmit-->",this.saveSelectIten);
  
  this.selectedItems = [];

 
  for(let i =0 ;i<=this.saveSelectIten.length;i++){
   
   
  this.itemList = this.itemList.filter(item => item !== this.saveSelectIten[i]);

  }
  console.log("Onsubmit--itemList>",this.itemList);
 
  
}


onItemSelect2(item:any){
  
  console.log(item);
  console.log(this.saveSelectIten);
}
OnItemDeSelect2(item:any){
  console.log(item);
  console.log(this.saveSelectIten);
}
onSelectAll2(items: any){
  console.log(items);
}
onDeSelectAll2(items: any){
  console.log(items);
}


submitSecond(){

}

}
