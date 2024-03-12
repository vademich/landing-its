import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.less'
})
export class ContactsComponent {
  address = `г. Воронеж, ул. Дорожная, 46`;
  tel = `8 (800) 55 008 55`;
  mail = `info@mtransservice.ru`;
  text = `Звоните, пишите!
  Любим, целуем, обнимаем!`;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[А-я A-z]*$")
  ]);
  telFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9+]*$")
  ])

  matcher = new MyErrorStateMatcher();

  pkload = false;
  telswiped = false;
  swipePk() {
    this.pkload = !this.pkload;
  }
  swipeTel() {
    this.telswiped = !this.telswiped;
  }

}
