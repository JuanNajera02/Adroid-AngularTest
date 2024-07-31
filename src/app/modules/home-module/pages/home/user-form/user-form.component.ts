import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../../../../core/services/user-service.service';
import { Subscription } from 'rxjs';
import { User } from '../../home/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  selectedUser: User | null = null;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private userService: UserServiceService) { 
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.subscription = this.userService.selectedUser$.subscribe(user => {
      this.selectedUser = user;
      this.setUser(user);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      if (userData.id) {
        this.userService.updateUser(userData.id, userData).subscribe(() => {
          alert('Usuario actualizado');
        }, error => {
          alert('Error al actualizar usuario');
        });
      } else {
        this.userService.addUser(userData).subscribe(() => {
          alert('Usuario creado');
        }, error => {
          alert('Error al crear usuario');
        });
      }
    }
    //limpiar formulario
    this.userForm.reset();
  }

  setUser(user: User | null) {
    if (user) {
      this.userForm.setValue({
        id: user.id || null,
        name: user.name,
        lastname: user.lastname,
        email: user.email
      });
    } else {
      this.userForm.reset();
    }
  }
}
