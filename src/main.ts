import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// 👇 IMPORTANTE: agregar esto
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 👇 IMPORTANTE: inicializar
defineCustomElements(window);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));