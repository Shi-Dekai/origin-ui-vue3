<template>
  <router-view />
</template>

<script lang="ts">
import {provide, ref} from 'vue'
import {router} from './router'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const visible = ref(width > 500)
    const update = ()=>{
      visible.value = !visible.value
    }
    provide('menu', {visible, update})  //set

    router.afterEach(() => {
      if (width <= 500) visible.value = false
    })
  }
}
</script>
