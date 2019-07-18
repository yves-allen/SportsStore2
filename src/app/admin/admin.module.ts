import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*
The RouterModule.forChild method is used to define the routing configuration for the feature module,
which is then included in the module’s imports property.
A dynamically loaded module must be self-contained and include all the information that Angular
requires, including the routing URLs that are supported and the components they display. If any other part
of the application depends on the module, then it will be included in the JavaScript bundle with the rest of
the application code, which means that all users will have to download code and resources for features they
won’t use.
However, a dynamically loaded module is allowed to declare dependencies on the main part of the
application. This module relies on the functionality in the data model module, which has been added to the
module’s imports so that components can access the model classes and the repositories.
*/

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent]
})
    export class AdminModule { }
    