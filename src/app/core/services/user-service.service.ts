import { inject, Inject, Injectable } from '@angular/core';
import {addDoc,collection,collectionData,deleteDoc,doc,Firestore,setDoc} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { User } from '../../../../src/app/modules/home-module/pages/home/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private selectedUser = new BehaviorSubject<User | null>(null);
  selectedUser$ = this.selectedUser.asObservable();

  firestore = inject(Firestore);
  usersCollection = collection(this.firestore, 'users');

  getUsers(): Observable<User[]> {
    return collectionData(this.usersCollection, {
      idField: 'id',
    }) as Observable<User[]>;
  }

  addUser(user: User): Observable<string> {
    const promise = addDoc(this.usersCollection, user).then((response) => {
      return response.id;
    });
    return from(promise);
  }
 
  removeUser(id: string): Observable<void> {
    const docRef = doc(this.firestore, 'users/' + id);
    const promise = deleteDoc(docRef);
    return from(promise);
  }

  updateUser(id: string, dataToUpdate: User): Observable<void> {
    const docRef = doc(this.firestore, 'users/' + id);
    const promise = setDoc(docRef, dataToUpdate);
    return from(promise);
  }

  selectUser(user: User | null) {
    this.selectedUser.next(user);
  }

}
