<template>
  <div v-for="(tag, index) in titles" :key="index">{{tag}}</div>
  <component v-for="(tag, index) in defaults" :key="index" :is="tag" />
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

</style>