import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { ArrowRight,Search,User,Bookmark,MessageSquare,Grid,Bell,Mail } from 'angular-feather/icons';
const icons = {
 ArrowRight,
 Search,
 User,
 Bookmark,
 MessageSquare,
 Grid,
 Bell,
 Mail
};
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
