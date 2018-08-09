import * as firebase from 'firebase';

// let config = {
// 	name: 'semantic-ui',
// 	apiKey: "AIzaSyCZk_hFVDI7n96xtAiCPayppfjrZaKmH5k",
// 	authDomain: "semantic-ui-80239.firebaseapp.com",
// 	databaseURL: "https://semantic-ui-80239.firebaseio.com",
// 	projectId: "semantic-ui-80239",
// 	storageBucket: "semantic-ui-80239.appspot.com",
// 	messagingSenderId: "767676751234"
// };

let config = {
        apiKey: "AIzaSyBSsDY71jyn2VGg4S-M1NP6HtVq2gS7nm0",
        authDomain: "docs-wp-export.firebaseapp.com",
        databaseURL: "https://docs-wp-export.firebaseio.com",
        projectId: "docs-wp-export",
        storageBucket: "testsData",
        messagingSenderId: "638116648392"
      };

export default !firebase.apps.length 
  ? firebase.initializeApp(config)
  : firebase.app();