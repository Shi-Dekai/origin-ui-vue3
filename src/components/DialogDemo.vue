<template>
  <section>
    <Button @click="toggle">打开dialog</Button>
    <Dialog v-model:visible="visible" :ok="ok">
      <template #header>标题</template>
      <p>hi</p>
      <p>hi2</p>
    </Dialog>
  </section>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
import {openDialog} from '../lib/openDialog'
export default {
  name: 'DialogDemo',
  components: {Button, Dialog},
  setup() {
    const visible = ref(false)
    const toggle = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok
      })
    }
    const ok = () => {
      console.log('ok')
      return true
    }
    return {
      visible,
      toggle,
      ok
    }
  }
}
</script>

<style lang="scss" scoped>

</style>