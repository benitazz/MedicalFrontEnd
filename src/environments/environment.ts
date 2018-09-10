// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  application_name: 'Bulk Payment',
  application_guid: 'EB19E60D-C299-4437-BA3D-4BD5EC0B9709',

  // webservice_api_url: 'https://ec2-52-213-188-240.eu-west-1.compute.amazonaws.com:8280/integration/secure/csmrefdataapi',
  webservice_api_url: 'http://localhost:5000',
  webservice_api_version: 'api',

  lazy_load_capacity: 20,
  infinite_scroll_throttle: 300,
  infinite_scroll_distance: 1.10,
  debouncer_time: 300,
  date_format : 'dd/MM/yyyy',
  applicationId: '1bbad3e7-6d2e-4cad-a231-989d8c43a825',
  default_refresh_time: ''
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
