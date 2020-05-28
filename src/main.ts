import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './http-section/app/app.module';
// import { environment } from './http-section/environments/environment';

import { AppModule } from './animations-app/app/app.module';
import { environment } from './animations-app/environments/environment';

// import { AppModule } from './shopping-app/app/app.module';
// import { environment } from './shopping-app/environments/environment';

// import { AppModule } from './authentication/app/app.module';
// import { environment } from './authentication/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
