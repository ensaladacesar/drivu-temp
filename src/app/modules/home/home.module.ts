import { FooterComponent } from './../../core/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomePComponent } from './pages/home-p/home-p.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgxMasonryModule } from 'ngx-masonry';



@NgModule({
  declarations: [
    HomeComponent,
    HomePComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCarouselModule,
    NgxMasonryModule
  ]
})
export class HomeModule { }
