// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCWk4_rmzjFwIxWgaWZx3iJoeD9gFd0ZCM',
      authDomain: 'musthaves-9d16e.firebaseapp.com',
      databaseURL: 'https://musthaves-9d16e.firebaseio.com',
      projectId: 'musthaves-9d16e',
      storageBucket: '',
      messagingSenderId: '194708345574'
  }
};
