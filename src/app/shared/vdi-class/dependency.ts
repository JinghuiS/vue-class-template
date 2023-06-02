import type { DependencyIdentifier } from '@wendellhu/redi'
import { useDependency } from 'vdi'
import { Setup } from 'vue-facing-decorator'

export function Dependency<T>(Service: DependencyIdentifier<T>, options?: { self: boolean }) {
  return Setup(() => useDependency(Service, options))
}
