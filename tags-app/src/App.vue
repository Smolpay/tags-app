<template>
    <v-app>
      <v-container fluid>
        <TextTag :tags="tags" title="На всю ширину, выравнивание по левому краю" alignment="left" />
  
        <div class="half-width-container">
          <TextTag :tags="tags" title="50% ширины, выравнивание по левому краю" alignment="left" />
          <TextTag :tags="tags" title="50% ширины, выравнивание по ширине" alignment="justify" />
        </div>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import TextTag from './components/TextTag.vue'
  
  export default {
    name: 'App',
    components: {
      TextTag
    },
    data() {
      return {
        tags: [
          { text: 'текст1' },
          { text: 'текст2' },
          { text: 'текст3', icon: 'mdi-human' },
          { text: 'текст4' },
          { text: 'текст5', icon: 'mdi-star' },
          { text: 'текст6' },
          { text: 'текст7' },
          { text: 'текст8' }
        ]
      }
    }
  }
  </script>
  