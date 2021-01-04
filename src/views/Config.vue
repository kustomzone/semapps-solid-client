<template>
  <div class="container">
    Config
    <b-input-group size="lg" prepend="Server">
      <b-form-input v-model="server" @change="serverChanged"></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Config',
  components: {
  //  HelloWorld
},
data: function () {
   return {
     server: 'http://localhost:5000/'
   }
 },
 methods: {
   serverChanged() {
     this.$store.commit('setServer', this.server)
   }
 }

}
</script>
