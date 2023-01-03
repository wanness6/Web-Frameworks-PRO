import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//deze imports handmatig nodig want vindt dit niet...
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropAndEventComponent } from './prop-and-event/prop-and-event.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    PropAndEventComponent,
    TwoWayComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "property", component: PropertyBindingComponent},
      { path: "event", component: EventBindingComponent},
      { path: "propevent", component: PropAndEventComponent},
      { path: "twoway", component: TwoWayComponent},
      { path: "", redirectTo:"property", pathMatch: "full"},
      { path: "**", component: PropertyBindingComponent}
    ], {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
