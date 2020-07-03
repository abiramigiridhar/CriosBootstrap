import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectiononeComponent } from './sectionone/sectionone.component';
import { SectiontwoComponent } from './sectiontwo/sectiontwo.component';
import { SectionthreeComponent } from './sectionthree/sectionthree.component';
import { SectionfourComponent } from './sectionfour/sectionfour.component';
import { SectionfiveComponent } from './sectionfive/sectionfive.component';
import { SectionsixComponent } from './sectionsix/sectionsix.component';



@NgModule({
  declarations: [
    AppComponent,
    SectiononeComponent,
    SectiontwoComponent,
    SectionthreeComponent,
    SectionfourComponent,
    SectionfiveComponent,
    SectionsixComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
