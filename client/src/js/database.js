//import database data
import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initDb = async () => {
  openDB('contact_db', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('contacts')) {
        console.log('contacts store already exists');
        return
      }
      // Create a new object store for the data and give it a ket name of 'id' which will increment automatically
      db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true});
      console.log('contacts store created');
    }
  })
}