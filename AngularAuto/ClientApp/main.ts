import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule).catch(err => console.log(err));

// для перезагузки приложения при изменениях в исходном коде
if ((module as any).hot) {
    (module as any).hot.accept();
    (module as any).hot.dispose(() => {
        // Перед перезапуском приложения создаем новый элемент app, которым заменяем старый
        const oldRootElem = document.querySelector('app');
        const newRootElem = document.createElement('app');
        oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
        platform.destroy();
    });
}