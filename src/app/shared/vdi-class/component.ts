import type { Dependency } from '@wendellhu/redi'
import { onProvider } from 'vdi'
import type { ComponentCustomOptions } from 'vue'
import { Component as _C } from 'vue-facing-decorator'
import type { ComponentSetupFunction } from 'vue-facing-decorator/dist/component'

type ComponentOption = {
    name?: string
    emits?: string[]
    provide?: Record<string, any> | Function
    components?: Record<string, any>
    directives?: Record<string, any>
    inheritAttrs?: boolean
    expose?: string[]
    render?: Function
    modifier?: (raw: any) => any
    options?: ComponentCustomOptions & Record<string, any>
    template?: string
    mixins?: any[]
    setup?: ComponentSetupFunction
    vdiProvide?: Dependency[]
}

export function VdiComponent(options: ComponentOption) {
    const _options = options
    if (_options.vdiProvide) {
        const oldSetup = _options.setup
        if (oldSetup) {
            const setup: ComponentSetupFunction = function (props, ctx) {
                const oldRet = oldSetup(props, ctx)
                onProvider(_options.vdiProvide as any)
                if (oldRet instanceof Promise) {
                    return Promise.all([oldRet]).then((arr) => {
                        return Object.assign({}, arr[0])
                    })
                } else {
                    return Object.assign({}, oldRet)
                }
            }
            _options.setup = setup
        } else {
            _options.setup = () => {
                onProvider(_options.vdiProvide as any)
                return {}
            }
        }
    }
    return _C(options)
}
