import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { CoderComponent } from './pages/coder/coder.component';

const routes: Routes = [
  { path: '', component: CoderComponent },
  { path: 'coder', component: CoderComponent },
  { path: 'intro', component: IntroComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
