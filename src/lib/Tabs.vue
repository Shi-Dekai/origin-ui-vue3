<template>
  <div class="o-tabs">
    <div class="o-tabs-nav" ref="container">
      <div class="o-tabs-nav-item" :class="{selected: t === selected}" v-for="(t,index) in titles" :key="index"
           :ref="el => { if (el) navItems[index] = el }"
           @click="select(t)">
        {{ t }}
      </div>
      <div class="o-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="o-tabs-content">
      <component class="o-tabs-content-item" :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, onUpdated, reactive, ref} from 'vue'
import Tab from './Tab.vue'

export default {
  name: 'Tabs',
  props: {
    selected: {type: String}
  },
  setup(props, context) {
    const navItems = reactive<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const init = () => {
      const result = navItems.filter(div => div.classList.contains('selected'))[0]
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {left: left1} = container.value.getBoundingClientRect()
      const {left: left2} = result.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    onMounted(init)
    onUpdated(init)

    const defaults = reactive(context.slots.default())
    defaults.map((tag) => {if (tag.type !== Tab) throw new Error('Tabs 内容必须是 Tab')})
    const titles = defaults.map((tag) => {return tag.props.title})
    const current = computed(() => {
      return defaults.filter((tag) => tag.props.title === props.selected)[0]
    })
    const select = (select) => {
      context.emit('update:selected', select)
    }

    return {
      defaults,
      titles,
      current,
      select,
      navItems,
      indicator,
      container
    }
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
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>