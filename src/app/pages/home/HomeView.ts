import { TestService } from '@/app/core/services/test.service'
import { Vue } from 'vue-facing-decorator'
import { VdiComponent, Dependency, type VdiClassHooks } from 'vdi-class'
import { environment } from '@/environments/environment'

@VdiComponent({})
export class HomeView extends Vue implements VdiClassHooks {
  @Dependency(TestService)
  testService!: TestService
  environment = environment
  abc = 1

  mounted() {
    console.log(this.testService)
  }
}
