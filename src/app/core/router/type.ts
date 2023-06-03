import type { RouteLocationNormalized, NavigationGuardNext, NavigationFailure } from 'vue-router'

export interface RouterGuardImplements {
    beforeResolve?: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => boolean | Promise<any> | any
    beforeEach?: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => boolean | Promise<any> | any
    afterEach?: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        failure: void | NavigationFailure | undefined
    ) => boolean | Promise<any> | any
}
