import { createIdentifier } from '@wendellhu/redi'
import type { RouterGuardImplements } from './type'

export const ROUTER_GUARD = createIdentifier<RouterGuardImplements>('routerGuardToken')
