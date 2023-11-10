import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBwnzZKN4Z_3KADRjn4df6O7x2jJNgezuA',
    authDomain: 'crud-inventario-f9974.firebaseapp.com',
    projectId: 'crud-inventario-f9974',
    storageBucket: 'crud-inventario-f9974.appspot.com',
    messagingSenderId: '637968175999',
    appId: '1:637968175999:web:ee0c0da42e6ba42e24804a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db
export const db = getFirestore(app);
