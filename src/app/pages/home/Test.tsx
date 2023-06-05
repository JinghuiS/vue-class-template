import { VdiComponent } from '@/app/shared/vdi-class'
import { TSX, Vue, Prop } from 'vue-facing-decorator'

export interface TestProps {
    name: string
}

@VdiComponent({
    render: function (this: Test) {
        return <div>{this.name}</div>
    }
})
export class Test extends TSX<TestProps>()(Vue) implements TestProps {
    @Prop({ type: String, default: 'cese' })
    name!: string
}
