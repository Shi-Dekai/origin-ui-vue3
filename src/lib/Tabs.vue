<template>
  <div class="o-tabs">
    <div class="o-tabs-nav">
      <div class="o-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="o-tabs-content">
      <component class="o-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
</template>

<script lang="ts">
import {reactive} from 'vue'
import Tab from './Tab.vue'

export default {
  name: 'Tabs',
  setup(props, context) {
    const defaults = reactive(context.slots.default())
    defaults.map((tag) => {if (tag.type !== Tab) throw new Error('Tabs 内容必须是 Tab')})
    const titles = defaults.map((tag)=>{return tag.props.title})
    return { defaults, titles }
  }
}
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.o-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>