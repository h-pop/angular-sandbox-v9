import { Directive, Input, ViewContainerRef, TemplateRef, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') onToggle(eventData: Event) {
        this.isOpen = !this.isOpen;
    }

    // too complicated
    // @HostBinding('class') elementClass = 'btn-group';

    // clicked = false;

    // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    // @HostListener('click') click(eventData: Event) {
    //     this.elementClass = (this.clicked = !this.clicked) ? 'btn-group open' : 'btn-group';
    // }

    //not good
//     @Input() set appDropdown(condition: boolean) {
//         if (condition) {
//             this.vcRef.createEmbeddedView(this.templateRef);
//         }  else {
//             this.vcRef.clear();
//         }
//     }

//   constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
}
