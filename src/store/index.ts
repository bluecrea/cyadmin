import { createStore } from 'vuex'

// @ts-ignore
const files = import.meta.globEager('./modules/*.ts')
const modules:{ [index: string]: any } = {}

for (const key in files) {
  modules[key.replace(/(\.\/modules\/)|(\.ts)/g, '')] = files[key].default
}
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})
const store = createStore({
  modules
})

export default store