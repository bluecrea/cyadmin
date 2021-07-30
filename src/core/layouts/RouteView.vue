<script>
export default {
  name: 'RouteView',
  props: {
    keepAlive: {
      type: Boolean,
      default: true
    }
  },
  render() {
    const { $route: { meta }, $store: { getters } } = this
    const inKeep = (
        <router-view />
    )
    const notKeep = (
        <router-view />
    )
    if (!getters.multiTab && !meta.keepAlive) {
      return notKeep
    }
    return meta.keepAlive ? inKeep : notKeep
  }
}
</script>