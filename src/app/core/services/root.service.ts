import type { Dependency } from '@wendellhu/redi'
import { AuthModule } from './auth'
import { TestService } from './test.service'
import { HttpModule } from 'shared/http'
import { StartupInit } from './startup'

export const RootServices: Dependency[] = [
  [TestService],
  ...AuthModule,
  ...HttpModule,
  ...StartupInit
]
