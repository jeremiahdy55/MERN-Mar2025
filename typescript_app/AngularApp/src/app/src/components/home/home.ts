import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/UserService/user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {
  // ======================================================================================================
  items: string[] = [];
  users: any;
  username: string = "";
  password: string = "";
  // Inject ChangeDetectorRef to ensure that the called Observable data will be reflected in the component
  constructor(private userService: UserService, private cdRef: ChangeDetectorRef) {
    this.items = this.userService.getItems(); // get the string array from the Injected UserService

    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log('CONSTRUCTOR: User data fetched from shopping cart project', this.users);
        // manually trigger change detection everytime the constructor 
        // (and subsequently userService.getUsers()) is called
        this.cdRef.detectChanges();
      }

    );
  }

  refreshUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log('refreshUsers(): User data refreshed from shopping cart project', this.users);
        // manually trigger change detection everytime the constructor 
        // (and subsequently userService.getUsers()) is called
        this.cdRef.detectChanges();
      }
    );
  }

  createNewUser() {
    const newUser = {
      'userName' : this.username, // NOTE: the external receving API requires {userName} not {username}
      'password' : this.password
    };
    this.userService.createNewUser(newUser).subscribe(
      {
        next: (response) => {
          this.refreshUsers();
          console.log('User created successfully:', response);
        }, 
        error: (error) => {
          console.error('Error creating user:', error);
        }
      }
    )

  }

  // ======================================================================================================
  count:number = 0;
  count2:number = 0;
  
  @Input() numberData : number = 0;
  @Output() numberDataChange : EventEmitter<number> = new EventEmitter();

  handleDecrement() {
    this.count2 -= 1;
  }

  handleIncrement() {
    this.count2 += 1;
  }

  handleDecrement2() {
    this.numberData = this.numberData - 1; // doing data manipulation
    this.numberDataChange.emit(this.numberData); // sending data back to parent component
  }

  handleIncrement2() {
    this.numberData = this.numberData + 1; // doing data manipulation
    this.numberDataChange.emit(this.numberData); // sending data back to parent component
  }
}
