import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  posts;
  postsCollection: AngularFirestoreCollection<any>;
  constructor(public fst: AngularFirestore) {
    this.postsCollection = this.fst.collection('experiencias_pasantias');
  }

  addPost(post) {
    console.log(post);
    return this.postsCollection.add(post);
  }

  getPosts() {
    return this.posts = this.postsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.postID = a.payload.doc.id;
        return data;
      });
    }));
  }
}
