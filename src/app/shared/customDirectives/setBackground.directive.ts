import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    standalone: true,
    selector: `[setBackground]`
})
export class SetBackground implements OnInit {
    constructor(private element: ElementRef) {}

    ngOnInit()
    {
        this.element.nativeElement.style.backgroundColor = 'rgb(37 99 235 / var(--tw-bg-opacity))';
        this.element.nativeElement.style.color = '#ffffff' ;
        this.element.nativeElement.style.borderRadius = '8px' ;
        this.element.nativeElement.style.padding = '8px' ;
    }
}