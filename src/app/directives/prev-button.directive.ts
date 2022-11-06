import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrevButton]'
})
export class PrevButtonDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  prev(){
    let sliderBox = this.el.nativeElement.parentElement.children[0];
    sliderBox.scrollTo({
      top: 0,
      left: sliderBox.scrollLeft - sliderBox.offsetWidth,
      behavior: 'smooth'
    })
   }

}
