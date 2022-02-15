<template>
  <button class="o-switch" :class="{'o-checked': modelValue}" @click="toggle"> <span></span> </button>
</template>

<script lang="ts">

export default {
  name: 'Switch',
  props: {
    modelValue: Boolean
  },
  setup(props, context) {
    const toggle = ()=>{
      context.emit('update:modelValue', !props.modelValue)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.o-switch{
  height: $h;
  width: $h*2;
  cursor: pointer;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  &.o-checked {
    background: #1890ff;
    span {
      left: calc(100% - #{$h2} - 2px);
    }
    &:active span {width: $h2 + 4px; margin-left: -4px;}
  }
  &:focus {
    outline: none;
  }
  &:active{
    > span {width: $h2 + 4px;}
  }
}
span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background:white;
  border-radius: $h2 / 2;
  transition: all 250ms;
}
</style>