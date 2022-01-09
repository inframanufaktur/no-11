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
      default: 'div'
    },
    flows: {
      type: String,
      default: 'vertical',
      validator: flow => flow === 'vertical' || flow === 'horizontal'
    }
  }
}
</script>

<style lang="scss">
.l-stack {
  --stack-space: 1.5rem;
  --flex-direction: row;

  display: flex;
  flex-direction: var(--flex-direction);

  &--horizontal {
    align-items: center;

    & > * + * {
      margin-left: var(--stack-space);
    }
  }

  &--vertical {
    --flex-direction: column;

    & > * + * {
      margin-top: var(--stack-space);
      margin-bottom: 0 !important;
    }
  }

  &--narrow {
    --stack-space: 0.5rem;
  }
}
</style>
