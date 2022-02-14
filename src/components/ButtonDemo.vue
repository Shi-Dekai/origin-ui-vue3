<template>
  <section>
    <Button>按钮</Button>
    <Button theme="link">link按钮</Button>
    <Button theme="text">text按钮</Button>
  </section>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  name: 'ButtonDemo',
  components: {Button},
}
</script>

<style lang="scss" scoped>

</style>