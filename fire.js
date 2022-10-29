import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
        const firebaseConfig = {
          apiKey: "AIzaSyDQIhycBX7-j7NQYfFflI31WtevHfjEyRc",
          authDomain: "webp-bd788.firebaseapp.com",
          projectId: "webp-bd788",
          storageBucket: "webp-bd788.appspot.com",
          messagingSenderId: "759053853062",
          appId: "1:759053853062:web:d172ff253d348076d0cc07",
          measurementId: "G-D3S3LH657V"
        };
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);