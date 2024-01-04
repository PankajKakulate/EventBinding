import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  public Name : string =""; 
  public MarvellouEvent(){
    console.log("Marvellous button clicked");
  }

  public InfoystemEvent(){
    this.Name = " Infosystem button gets clicked"
  }
  public AngularEvent(Value : any){
    console.log(Value);
  }
}
