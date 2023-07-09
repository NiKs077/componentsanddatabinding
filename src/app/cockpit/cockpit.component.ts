import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

 @Output() serverAdded=new EventEmitter<{newServerName:string,newServerContent:string}>();
  @Output() blueprintAdded=new EventEmitter<{newServerName:string,newServerContent:string}>();
  newServerName = '';
  newServerContent = '';

  @ViewChild("contentReference") contentReference:ElementRef;

  onAddServer(serverReference:HTMLInputElement) {
    this.serverAdded.emit({
      newServerName: serverReference.value,
      newServerContent: this.contentReference.nativeElement.value
      // newServerName:this.newServerName,
      // newServerContent:this.newServerContent
    });
  }

  onAddBlueprint(serverReference:HTMLInputElement) {
    this.blueprintAdded.emit({
      newServerName: serverReference.value,
      newServerContent:this.contentReference.nativeElement.value,
    //   // newServerName: this.newServerName,
    //   // newServerContent: this.newServerContent
    });
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
