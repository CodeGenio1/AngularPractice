import { DataService } from 'src/libs/data.service';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './main/app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule(
    {
        declarations: [
            AppComponent,
            LoginComponent,
            SignupComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            RouterModule.forRoot([
                {
                    path: 'login',
                    component: LoginComponent
                },
                {
                    path: 'registration',
                    component: SignupComponent
                },
                {
                    path: 'users',
                    loadChildren: () => import('./users/users.module')
                    .then( mod => mod.UsersModule)
                }
            ])
        ],
        providers: [
        ],
        bootstrap: [AppComponent],
        exports: [RouterModule]
    }
)
export class AppModule {

}
