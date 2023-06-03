import { HttpClient as _HttpClient, type HttpInterceptor } from '@ngify/http'
import { Many } from '@wendellhu/redi'
import { HTTP_INTERCEPTOR } from './interceptor'
export class NgHttp extends _HttpClient {
    constructor(
        @Many(HTTP_INTERCEPTOR)
        private readonly interceptors: HttpInterceptor[]
    ) {
        super(interceptors)
    }
    get getInterceptors(): HttpInterceptor[] {
        return this.interceptors
    }
}
