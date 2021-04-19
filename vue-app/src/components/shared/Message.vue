<template>
  <div
    role="alert"
    :class="`fade alert alert-${$props.variant} alert-info show`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "info"
    }
  }
};
</script>
