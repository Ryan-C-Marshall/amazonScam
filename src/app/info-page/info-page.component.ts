import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CollapsibleBoxComponent } from '../collapsible-box/collapsible-box.component';

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [CollapsibleBoxComponent],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css'
})
export class InfoPageComponent {

}