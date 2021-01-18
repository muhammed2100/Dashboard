// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: 'http://localhost:3000/api',
  discordInvite: 'https://discord.gg/24tycau',
  githubURL: 'https://github.com/theADAMJR/2PG',
  stripePublicKey: '13cad5492eff2805468da1f904e147dcc70a5c6826c02b62153a6630e5f2db4d',
  version: 'v0.2.2b',
  botOwnerId: '218459216145285121',
  test: {
    guildId: '747576395957403800'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
