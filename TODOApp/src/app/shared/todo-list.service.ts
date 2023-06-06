import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  firestoreCollection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) {
    this.firestoreCollection = firestore.collection('todo-tasks');
  }

  addTodoTask(task: string): void {
    this.firestoreCollection.add({
      title: task,
      isComplete: false,
    });
  }

  updateStatusTask(idTask: string, newStatus: boolean): void {
    this.firestoreCollection.doc(idTask).update({
      isComplete: newStatus
    });
  }

  deleteTask(idTask: string): void {
    this.firestoreCollection.doc(idTask).delete();
  }
}
