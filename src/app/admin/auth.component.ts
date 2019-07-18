import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

/*
The component defines properties for the username and password that will be used to authenticate
the user, an errorMessage property that will be used to display messages when there are problems, and an
authenticate method that will perform the authentication process (but that does nothing at the moment).
*/

@Component({
    templateUrl: "auth.component.html"
})

export class AuthComponent{
    public username: string;
    public password: string;
    public errorMessage: string;

    constructor(private router: Router) { }

    authenticate(form: NgForm){
        if(form.valid){
            //perform authentication
            this.router.navigateByUrl("/admin/main");
        }
        else{
            this.errorMessage = "Form Data Invalid";
        }
    }
}