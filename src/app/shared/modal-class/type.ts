import { useModal } from 'vue-modal-provider'

import type { Component } from 'vue'

export type ModalClass<T extends Component> = ReturnType<typeof useModal<T>>
