import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collection: AngularFirestoreCollection<User>
  public items: Observable<User[]>;

  constructor(private firestore: AngularFirestore, private fireAuth: AngularFireAuth) {
    this.collection = this.firestore.collection<User>('Usuarios');
    this.items = this.collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }

  getUsuarios(): Observable<any> {
    return this.items;
  }

  registerUser(user: User): Promise<any> {
    this.fireAuth.createUserWithEmailAndPassword(user.email, user.password);
    return this.firestore.collection('Usuarios').add(user)
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  getUsuario(id: string) {
    return this.firestore.collection("Usuarios").doc(id).get();
  }

  getDataId(email: string) {
    return this.firestore.collection("Usuarios", ref => ref.where("email", "==", email)).get();
  }

  updateUsuario(id: string, user: User) {
    let obj: User = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      reservations: user.reservations
    }
    return this.firestore.collection("Usuarios").doc(id).update(obj).then(
      () => { console.log("Usuario editado") }
    );
  }

}
