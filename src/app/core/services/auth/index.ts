import type { Dependency } from '@wendellhu/redi'
import { DIRECTIVE } from 'vdi'
import { AuthService } from './auth.service'
import { AuthDirectiveService } from './auth.directive.service'
export const AuthModule: Dependency[] = [
    [AuthService],
    [DIRECTIVE, { useClass: AuthDirectiveService }]
]
