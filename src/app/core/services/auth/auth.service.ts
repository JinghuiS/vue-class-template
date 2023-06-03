import { ref } from 'vue'

export class AuthService {
    private _authList = ref<string[]>(['test'])

    private _authMenuList = ref<any[]>([])

    get authList() {
        return this._authList
    }

    get authMenuList() {
        return this._authMenuList
    }

    setAuth(authList: string[]) {
        this._authList.value = authList
    }

    setAuthMenuList(authMenuList: any[]) {
        this._authMenuList.value = authMenuList
    }

    checkAuth(auth: string): boolean {
        return this._authList.value.includes(auth)
    }
}
