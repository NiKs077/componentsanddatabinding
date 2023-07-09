import { Component, ElementRef, SimpleChange, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input("serverElement") element:{type:string, name:string, content:string }
  // @Input() name:string;
  @ViewChild("heading") head:ElementRef;
  constructor() {
    console.log("constructor called");
    
  }
  
  ngOnInit(){
    // whenever the object gets created(when this class is instantiated this method is called)
    // Imp- after the constructor it gets called
    console.log("ngOnInit!");
    console.log( this.head.nativeElement.textContent="text changed");
  }
  ngAfterViewInit(){
    this.head.nativeElement.textContent="text changed";
    console.log( this.head.nativeElement.textContent="text changed");
  }
  // ngOnChanges(changes:SimpleChange){
  //   // more importantly it get's called before the ngOninit. when the object creation is in process.
  //   // it recieves one argument that is, the object of type SimpleChange having access to property which is changes
  //   // the current value of the property and the previos value of the property.
  //   // imp - objects hold the memory reference so if we make changes in the object this method will not be get called,
  //   // for property change we can call this method.
  //   // this get's called when the property annoted with @input changes.
  //   console.log(changes);
  // }
}
