import type { Dependency } from '@wendellhu/redi'
import { StartupService } from './startup.service'

export const StartupInit: Dependency[] = [[StartupService]]
