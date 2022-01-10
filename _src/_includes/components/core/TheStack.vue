<template>
  <component
    :is="tagName"
    :class="`l-stack--${flows}`"
    class="l-stack"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'TheStack',
  props: {
    tagName: {
      type: String,
      default: 'div',
    },
    flows: {
      type: String,
      default: 'vertical',
      validator: (flow) => flow === 'vertical' || flow === 'horizontal',
    },
  },
}
</script>

<style></style>
