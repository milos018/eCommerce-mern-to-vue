<template>
  <div class="rating">
    <span>
      <i
        :style="{ color: $props.color }"
        :class="
          $props.value >= 1
            ? 'fas fa-star'
            : $props.value >= 0.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        "
      ></i>
      <i
        :style="{ color: $props.color }"
        :class="
          $props.value >= 2
            ? 'fas fa-star'
            : $props.value >= 1.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        "
      ></i>
      <i
        :style="{ color: $props.color }"
        :class="
          $props.value >= 3
            ? 'fas fa-star'
            : $props.value >= 2.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        "
      ></i>
      <i
        :style="{ color: $props.color }"
        :class="
          $props.value >= 4
            ? 'fas fa-star'
            : $props.value >= 3.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        "
      ></i>
      <i
        :style="{ color: $props.color }"
        :class="
          $props.value >= 5
            ? 'fas fa-star'
            : $props.value >= 4.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        "
      ></i>
    </span>
    <span v-if="$props.text">{{ $props.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#f8e825"
    }
  }
};
</script>
