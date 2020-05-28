<template lang="pug">
  a.btn(:class="classes" @click="$emit('click')")
    slot

</template>

<script>
export default {
  name: 'c-button',
  
  props: {
    variant: {
      type: String,
      default: 'primary'
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      let class_list = []

      if (this.variant) {
        class_list.push(`btn-${ this.variant }`)
      }

      if (this.loading) {
        class_list.push('loading')
      }

      return class_list
    }
  }
}
</script>
