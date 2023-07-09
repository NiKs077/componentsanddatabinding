import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server",name:"amazonserver", content:"good server"}];
  name:string="rahul";
  onAddedServer(eventData:{newServerName:string,newServerContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: eventData.newServerName,
      content: eventData.newServerContent
    });
  }

  onAddedBlueprint(eventData:{newServerName:string,newServerContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.newServerName,
      content: eventData.newServerContent
    });
  }
  onNameChange(){
    this.name="nikhil";
  }
  constructor() {
    console.log("constructor called");
    
  }
  
  ngOnInit(){
    // whenever the object gets created(when this class is instantiated this method is called)
    // Imp- after the constructor it gets called
    console.log("ngOnInit!")
  }
  
}
