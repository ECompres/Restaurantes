//AngularCore Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { CountryPipe } from './pipes/country.pipe';
import { UsStatesPipe } from './pipes/us-states.pipe';
import { environment } from '../environments/environment';
import { RatingModule } from 'ng-starrating';
//AngularCore Imports

//Imports Componentes Angular
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Imports Componentes Angular

//Import Componentes
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ReservacionesClienteComponent } from './pages/reservaciones-cliente/reservaciones-cliente.component';
import { WelcomeComponent } from './pages/welcome/welcome.component'
import { RegisterComponent } from './pages/modals/register/register.component';
import { DetailRestaurantComponent } from './pages/detail-restaurant/detail-restaurant.component';
import { LoginComponent } from './pages/modals/login/login.component';
//Import Componentes

//Imports Servicios
import { RestaurantService } from './Services/restaurant.service';
import { UserService } from './Services/user.service';
//Imports Servicios

//Imports NgZorro Componentes
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule, } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
//Imports NgZorro Componentes

//Imports Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SearchRestaurantsComponent } from './pages/search-restaurants/search-restaurants.component';
import { PricePipe } from './pipes/price.pipe';

//Imports Angular Firebase
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    ReservacionesClienteComponent,
    WelcomeComponent,
    RegisterComponent,
    UsStatesPipe,
    CountryPipe,
    DetailRestaurantComponent,
    LoginComponent,
    SearchRestaurantsComponent,
    PricePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzTableModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NzModalModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    NzSelectModule,
    AngularFireDatabaseModule,
    NzCarouselModule,
    NzPaginationModule,
    RatingModule,
    NzInputNumberModule,
    NzCardModule,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }, ,
    RestaurantService,
    FormBuilder,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
