import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Template-Driven Forms
import { Login } from './Forms/login/login';
import { SignupForm } from './Forms/signup-form/signup-form';
import { ProfileForm } from './Forms/profile-form/profile-form';
import { Filter } from './Forms/filter/filter';
import { Checkout } from './Forms/checkout/checkout';
import { Feedback } from './Forms/feedback/feedback';

//Reactive forms
import { Formmodel1 } from './ReactiveForms/formmodel1/formmodel1';

//1.Rxjs-Userlist
import { UserlistData } from './RxJS/userlist-data/userlist-data';

//2.Service with subject
import { Homesubject } from './RxJS/subject-service/homesubject/homesubject';
import { Navbarsubject } from './RxJS/subject-service/navbarsubject/navbarsubject';

//3.Gpay with subject
import { Paymentsub } from './RxJS/gpay-with-subject/paymentsub/paymentsub';
import { Success } from './RxJS/gpay-with-subject/success/success';
import { History } from './RxJS/gpay-with-subject/history/history';
import { Wallet } from './RxJS/gpay-with-subject/wallet/wallet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
      Login,
      SignupForm,
      ProfileForm,
      Filter,
      Checkout,
      Feedback,
      Formmodel1,
      UserlistData,
      Homesubject,
      Navbarsubject,
      Paymentsub,
      Success,
      History,
      Wallet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
