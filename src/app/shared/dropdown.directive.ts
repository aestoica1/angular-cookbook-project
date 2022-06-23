import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  // how I can add the directive, atttribute selector []
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // HostBinding -> funcionality that allows us to add a certain CSS class (open one from bootstrap) to the element it sits on
  // once it is clicked and remove the class when we click again
  @HostBinding('class.show') isOpen: boolean = false;
  // to dinamically attach/detach a css class depending on isOpen we use HostBinding which allows us to bind to properties of
  // the element the directive it's placed on
  // we wan to bind to the class property of that element, which is an array and we want to use "open"

  // 1. Listen to a click with @HostListener
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
