import { Quantity, type Injector } from '@wendellhu/redi'
import { getGlobalInjector } from 'vdi'
import type { Router } from 'vue-router'
import { ROUTER_GUARD } from './token'
import type { RouterGuardImplements } from './type'
import type { App } from 'vue'

export function createGuard(instance: App, router: Router) {
    const inject = getGlobalInjector(instance) as Injector

    inject.add(ROUTER_GUARD, { useClass: class NullGuard implements RouterGuardImplements {} })
    inject.get<RouterGuardImplements>(ROUTER_GUARD, Quantity.MANY).map((item) => {
        if (item.beforeEach) {
            router.beforeEach((...args) => {
                item.beforeEach && item.beforeEach(...args)
            })
        }

        if (item.afterEach) {
            router.afterEach((...args) => {
                item.afterEach && item.afterEach(...args)
            })
        }

        if (item.beforeResolve) {
            router.beforeResolve((...args) => {
                item.beforeResolve && item.beforeResolve(...args)
            })
        }
    })
}
