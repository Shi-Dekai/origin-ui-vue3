<template>
  <nav class="nav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
  name: 'topNav',
  setup() {
    const menuVisible = inject<Ref<Boolean>>('menuVisible') //get
    const toggleMenu =  ()=> {
      menuVisible.value = !menuVisible.value
    }
    return { toggleMenu }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>