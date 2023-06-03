import { useModal, useModalRef } from 'vue-modal-provider'
import type { Component } from 'vue'
import { Setup } from 'vue-facing-decorator'
import type { ComponentProps } from 'node_modules/vue-modal-provider/dist/types/Modal'

export function CreateModal<T extends Component>(modal: T, args?: ComponentProps<T>) {
    return Setup(() => useModal(modal, args))
}

export function ModalRef() {
    return Setup(() => useModalRef())
}
