import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js'
    
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js'
import { getDatabase, get, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyBBTACUsYF5-g8J_m2XcaqRMJgcMJxN2BU",
    authDomain: "visuary-d586e.firebaseapp.com",
    databaseURL: "https://visuary-d586e-default-rtdb.firebaseio.com",
    projectId: "visuary-d586e",
    storageBucket: "visuary-d586e.appspot.com",
    messagingSenderId: "905707368773",
    appId: "1:905707368773:web:3c21f8cac39c0b9ff50e2c"
};

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const dCounters = document.querySelectorAll('.CountLike');

dCounters.forEach((dCounter) => {
    const el = dCounter.querySelector('button');
    const cId = dCounter.id;
    const db =ref(database, 'Like Number Counter') ;
    const dDatabaseRef = ref(database, 'Like Number Counter/' + cId); // Create a reference to the specific counter

    // Get firebase data
    onValue(dDatabaseRef, (snapshot) => {
        const data = snapshot.val() || 0;
        dCounter.querySelector('.counterStat').textContent = data; 
    });

    // Set firebase data
    el.addEventListener('click', () => {
        // Get the latest value from the database before updating
        get(dDatabaseRef)
        .then((snapshot) => {
            const currentCount = snapshot.val() || 0;
            update(db, {
            [cId]: currentCount + 1,
            });
        })
    });
});