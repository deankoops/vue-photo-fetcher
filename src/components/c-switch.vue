<template lang="pug">
  div.d-flex.align-items-center
    a.btn-switch(:class="classes" @click="$emit('input', !value)")
    p.ml-2 {{ label }}

</template>

<script>
export default {
  name: 'c-switch',
  
  props: {
    label: {
      type: String,
      default: ''
    },

    variant: {
      type: String,
      default: 'primary'
    },
    
    value: {
      type: Boolean,
      default: false,
      required: true
    }
  },

  computed: {
    classes () {
      let class_list = []

      if (this.variant) {
        class_list.push(`btn-switch-${ this.variant }`)
      }

      if (this.value) {
        class_list.push(`checked`)
      }

      return class_list
    }
  }
}
</script>
