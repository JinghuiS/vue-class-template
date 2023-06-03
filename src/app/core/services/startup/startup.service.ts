import { Observable } from 'rxjs'

export class StartupService {
    load(): Observable<any> {
        return new Observable((observer) => {
            observer.next()
            observer.complete()
        })
    }
}
