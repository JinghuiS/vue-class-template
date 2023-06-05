import { TestService } from '@/app/core/services/test.service'
import { Vue } from 'vue-facing-decorator'
import { VdiComponent, Dependency, type VdiClassHooks } from 'vdi-class'
import { CreateModal, type ModalClass } from 'modal-class'
import { environment } from '@/environments/environment'

import { Test } from './Test'

@VdiComponent({})
export class HomeView extends Vue implements VdiClassHooks {
    @Dependency(TestService)
    testService!: TestService
    environment = environment

    @CreateModal(Test, { name: 'test' })
    modal!: ModalClass<typeof Test>

    mounted() {
        this.modal.show()
    }
}
