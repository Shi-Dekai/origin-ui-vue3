<template>
  <div class="o-tabs">
    <div class="o-tabs-nav">
      <div class="o-tabs-nav-item" :class="{selected: t === selected}" v-for="(t,index) in titles" :key="index"
           @click="select(t)">
        {{ t }}
      </div>
      <div class="o-tabs-nav-indicator"></div>
    </div>
    <div class="o-tabs-content">
      <component class="o-tabs-content-item" :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, reactive} from 'vue'
import Tab from './Tab.vue'

export default {
  name: 'Tabs',
  props: {
    selected: {type: String}
  },
  setup(props, context) {
    const defaults = reactive(context.slots.default())
    defaults.map((tag) => {if (tag.type !== Tab) throw new Error('Tabs 内容必须是 Tab')})
    const titles = defaults.map((tag) => {return tag.props.title})
    const current = computed(() => {
      return defaults.filter((tag) => tag.props.title === props.selected)[0]
    })
    const select = (select) => {
      context.emit('update:selected', select)
    }

    return {defaults, titles, current, select}
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
    position: relative;

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
    
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>