import { getGlobalInjector, vdi } from 'vdi'
import type { App } from 'vue'
import { RootServices } from './root.service'
import type { Injector } from '@wendellhu/redi'

export function setupDI(instance: App) {
    instance.use(vdi(RootServices))
    const inject = getGlobalInjector(instance) as Injector

    return inject
}
