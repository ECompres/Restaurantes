import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabase } from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore, private fireAuth: AngularFireAuth) { }

  registerUser(user: User): Promise<any> {
    this.fireAuth.createUserWithEmailAndPassword(user.email, user.password);
    return this.firestore.collection('Usuarios').add(user)
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  getUserData(id: string) {
    return this.firestore.collection('Usuarios').doc(id).get();
  }
  recoverPassword(email: string) {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

}
