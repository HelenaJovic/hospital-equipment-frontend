import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './infrastructure/router/app-routing.module';
import { RegisterComponent } from './infrastructure/auth/register/register.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCompanyProfileComponent } from './feature-moduls/company/components/show-company-profile/show-company-profile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateCompanyAdminComponent } from './feature-moduls/create-company-admin/create-company-admin.component';
import { RegisterCompanyProfileComponent } from './feature-moduls/register-company-profile/register-company-profile.component';
import { UpdateCompanyComponent } from './feature-moduls/company/components/update-company/update-company.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CompanyAdminProfileComponent } from './feature-moduls/companyAdministratorProfile/company-admin-profile/company-admin-profile.component';
import { OneCompanyComponent } from './feature-moduls/company/components/one-company/one-company.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, ShowCompanyProfileComponent,RegisterCompanyProfileComponent,CreateCompanyAdminComponent,UpdateCompanyComponent, CompanyAdminProfileComponent, OneCompanyComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    
  

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
