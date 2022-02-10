<template>
  <section>
    <Switch v-model="checked" />
  </section>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const checked = ref(false)
    return {checked}
  }
}
</script>

<style lang="scss" scoped>

</style>