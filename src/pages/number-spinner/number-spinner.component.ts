import { Component, Input, Output, EventEmitter, AfterViewInit,OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TimeoutDebouncer } from "ionic-angular/util/debouncer";

/**
 * Number Spinner
 * 
 * @see http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components/
 * @author NorrapatN
 * @since Thu May 25 2017
 */
@Component({
  selector: 'number-spinner',
  templateUrl: './number-spinner.component.html',
})
export class NumberSpinnerComponent  implements OnInit,AfterViewInit {

  @Output('add-click')
  private addClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  @Output('remove-click')
  private removeClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  @Input('maxValue')
  maxValue: number;

  @Input('value')
  value: number;

  constructor(
    private alertCtrl: AlertController,
    // private ngZone: NgZone,
  ) {}
  ngOnInit():void{
    if(!this.value){
      this.value = 1;
    }
  }
  ngAfterViewInit(): void {

  }
  addClick(e: MouseEvent): void {
    if(this.maxValue){
      if(this.value<this.maxValue){
        this.value++;
      }
    }else{
      this.value++;
    }
    this.addClickEmitter.emit(this.value);
  }

  removeClick(e: MouseEvent): void {
    if(this.value>1){
      this.value--;
    }
    this.removeClickEmitter.emit(this.value);
  }

  private checkValue(): void {

  }
  private checkOnBlur(): void {

  }
}
