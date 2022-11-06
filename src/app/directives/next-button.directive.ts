import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextButton]'
})
export class NextButtonDirective {

  constructor(private el:ElementRef) {}

   @HostListener('click')

   next(){
    let sliderBox = this.el.nativeElement.parentElement.children[0];
    sliderBox.scrollTo({
      top: 0,
      left: sliderBox.scrollLeft + sliderBox.offsetWidth,
      behavior: 'smooth'
    }); 
   }
}
