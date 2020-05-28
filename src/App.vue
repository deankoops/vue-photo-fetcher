<template lang="pug">
  div#app.container
    h1.mt-5 Photo Fetcher 

    div.row.no-gutters.align-items-center.mt-4
      div.col-6
        c-switch(v-model="config.grayscale" label="Make photos grayscale")

      div.col-6.text-right 
        c-button(:loading="loading" @click="rand_seed++") Fetch New Photos 

    div.row.mb-4
      div.col-sm-12.col-md-6.mt-3(
        v-for="(image, index) in images_"
        :key="index"
      )
        div.position-relative
          img.img-fluid(:src="getImageUrl(image.id)")
          
          div.position-bottom.bg-alpha-5.p-3
            h5.text-white.mb-0 {{ image.author }}
            h6.text-secondary.mb-0 {{ image.url }}

</template>

<script>
export default {
  name: 'App',
  
  data: () => ({
    config: {
      base_url: 'https://picsum.photos',
      grayscale: false,
      page: 1,
      limit: 100,
      width: 400,
      height: 300
    },

    images: [],
    loading: false,
    rand_seed: 1
  }),

  computed: {
    images_ () {
      return this.images
        .sort(() => Math.random() * this.rand_seed - Math.random() * this.rand_seed)
        .slice(0, 4)
    }
  },

  mounted () {
    this.loadImages()
  },

  methods: {
    getImageUrl (id) {
      let url = `${ this.config.base_url }/id/${ id }/${ this.config.width }/${ this.config.height }`

      return this.config.grayscale   
        ? `${ url }?grayscale`
        : url
    },

    loadImages () {
      let params = {
        page: this.config.page,
        limit: this.config.limit
      }

      this.loading = true

      this.$axios 
        .get(`/v2/list`, { params })
        .then(res => {
          this.images = res.data
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
