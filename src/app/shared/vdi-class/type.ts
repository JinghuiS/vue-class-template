export type onBeforeCreated = {
    beforeCreated: () => void
}

export type onCreated = {
    created: () => void
}

export type onBeforeMounted = {
    beforeMounted: () => void
}

export type OnMounted = {
    mounted: () => void
}

export type OnUnmounted = {
    unmounted: () => void
}

export type OnUpdated = {
    updated: () => void
}

export type OnDestroyed = {
    destroyed: () => void
}

export type VdiClassHooks = Partial<
    onBeforeCreated &
        onCreated &
        onBeforeMounted &
        OnMounted &
        OnUnmounted &
        OnUpdated &
        OnDestroyed
>
