import { Component } from '@angular/core';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DetailsPageComponent } from './details-page/details-page.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@Component({
  selector: 'app-pages-module',
  standalone: true,
  imports: [ ButtonsModule, DetailsPageComponent ],
  templateUrl: './pages-module.component.html',
  styleUrl: './pages-module.component.scss'
})
export class PagesModuleComponent {

  public onButtonClick(): void {
    console.log("click");
  }
}
