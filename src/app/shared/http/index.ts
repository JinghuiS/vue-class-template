import type { Dependency } from '@wendellhu/redi'

import { NgHttp } from './client'
import { HTTP_INTERCEPTOR, NoopInterceptor } from './interceptor'
import { CREATED_VUE_APP_EXECUTION } from 'vdi'

export const HTTP_CLIENT = NgHttp

export const HttpModule: Dependency[] = [
  [
    HTTP_INTERCEPTOR,
    {
      useClass: NoopInterceptor
    }
  ],
  [NgHttp],
  [
    CREATED_VUE_APP_EXECUTION,
    {
      useClass: NgHttp
    }
  ]
]
