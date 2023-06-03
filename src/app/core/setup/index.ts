import { createApp, type App, type Component } from 'vue'
import { Observable } from 'rxjs'
import { setupDI } from '../services'
import { setupRouter } from '../router'
import { StartupService } from '../services/startup/startup.service'

export function setupApp(rootComponent: Component<any>): Observable<App> {
    const app = createApp(rootComponent)
    const inject = setupDI(app)
    setupRouter(app)

    return new Observable((observer) => {
        inject
            .get(StartupService)
            .load()
            .subscribe(() => {
                observer.next(app)
                observer.complete()
            })
    })
}
