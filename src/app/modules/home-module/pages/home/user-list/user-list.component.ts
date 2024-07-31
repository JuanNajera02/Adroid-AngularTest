import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from '../../../../../core/services/user-service.service';
import { User } from '../../../../../modules/home-module/pages/home/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  displayedColumns: string[] = ['name', 'lastname', 'email', 'actions'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  searchTerm: string = '';

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);	
      this.dataSource = new MatTableDataSource(users);
    });
  }

  deleteUser(user: User) {
    this.userService.removeUser(user.id as string).subscribe(() => {
      this.loadUsers();
    });
  }

  editUser(user: User) {
    this.userService.selectUser(user); // Ajusta esto a tu lógica específica
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
