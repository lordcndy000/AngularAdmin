import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GridSystemComponent } from './components/gridsystem/gridsystem.component';
import { PanelsComponent } from './components/panels/panels.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { IconsComponent } from './components/icons/icons.component';
import { TypographyComponent } from './components/typography/typography.component';
import { RegularFormsComponent } from './components/regular-forms/regular-forms.component';
import { ValidationFormsComponent } from './components/validation-forms/validation-forms.component';
import { RegularTablesComponent } from './components/regular-tables/regular-tables.component';
import { ExtendedTablesComponent } from './components/extended-tables/extended-tables.component';
import { DataTablesComponent } from './components/data-tables/data-tables.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { FullScreenMapComponent } from './components/full-screen-map/full-screen-map.component';
import { VectorMapComponent } from './components/vector-map/vector-map.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ButtonsComponent,
    GridSystemComponent,
    PanelsComponent,
    NotificationsComponent,
    IconsComponent,
    TypographyComponent,
    RegularFormsComponent,
    ValidationFormsComponent,
    RegularTablesComponent,
    ExtendedTablesComponent,
    DataTablesComponent,
    GoogleMapsComponent,
    FullScreenMapComponent,
    VectorMapComponent,
    ChartsComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // NoopAnimationsModule,
    // BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'gridsystem', component: GridSystemComponent },
      { path: 'panels', component: PanelsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'regularforms', component: RegularFormsComponent },
      { path: 'validationforms', component: ValidationFormsComponent },
      { path: 'regulartables', component: RegularTablesComponent },
      { path: 'extendedtables', component: ExtendedTablesComponent },
      { path: 'datatables', component: DataTablesComponent },
      { path: 'googlemaps', component: GoogleMapsComponent },
      { path: 'fullscreenmap', component: FullScreenMapComponent },
      { path: 'vectormap', component: VectorMapComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'calendar', component: CalendarComponent } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
