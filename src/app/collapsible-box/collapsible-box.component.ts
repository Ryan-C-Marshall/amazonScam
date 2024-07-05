import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-collapsible-box',
  standalone: true,
  imports: [],
  templateUrl: './collapsible-box.component.html',
  styleUrl: './collapsible-box.component.css'
})
export class CollapsibleBoxComponent {
  collapsed: boolean = false;

  @Input() title!:string;
  @Input() initiallyCollapsed:boolean = false;
  @ViewChild('box') box!: ElementRef;
  @ViewChild('collapseButton') collapseButton!: ElementRef;
  @ViewChild('rotatingIcon') rotatingIcon!: ElementRef;

  ngOnInit() {
    // Initialize maxHeight to scrollHeight for all elements
    this.collapsed = this.initiallyCollapsed;
  }

  ngAfterViewInit() {
    this.updateMaxHeight();
  }

  toggle_collapsed() {
    this.collapsed = !this.collapsed;
    this.updateMaxHeight();
  }

  updateMaxHeight() {
    const boxElement = this.box.nativeElement as HTMLElement;
    const buttonElement = this.collapseButton.nativeElement as HTMLElement;

    boxElement.style.maxHeight = this.collapsed ? `${buttonElement.scrollHeight}px` : `${boxElement.scrollHeight}px`;
  }
}