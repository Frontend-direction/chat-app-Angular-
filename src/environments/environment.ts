// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'get-stream-chat',
    appId: '1:181410418854:web:38e79e5d1721f142cd2467',
    storageBucket: 'get-stream-chat.appspot.com',
    apiKey: 'AIzaSyA_izXRwBTwAf_7TnovgEWyVO-h9fDEMN0',
    authDomain: 'get-stream-chat.firebaseapp.com',
    messagingSenderId: '181410418854',
  },
  production: false,
  apiUrl: 'https://us-central1-get-stream-io-decoded.cloudfunctions.net',
  stream: {
    key: 'wxgsgqrws5v8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
