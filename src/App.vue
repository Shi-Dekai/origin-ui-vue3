<template>
  <router-view />
</template>

<script lang="ts">
import {provide, ref} from 'vue'
import {router} from './router'

export default {
  name: 'App',
  setup() {
    const visible = ref(true)
    const update = ()=>{
      visible.value = !visible.value
    }
    provide('menu', {visible, update})  //set

    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > 500);
    router.afterEach(() => {
      if (width <= 500) visible.value = false
    })
  }
}
</script>
