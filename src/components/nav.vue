<template>
<div class="footer" >
 <mu-paper>
    <mu-bottom-nav :value="$store.state.nav.title" shift >
      <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video" to="/"/>
      <mu-bottom-nav-item value="music" title="Music" icon="music_note" to="/music"/>
      <mu-bottom-nav-item value="book" title="Books" icon="books" to="/book" />
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>
</div>
</template>

<script>

export default {
name: 'nav',
  data () {
    return {

    }
  },
   watch: {

  },
  mounted () {

  },
  methods:{
   handleChange (val) {
      this.bottomNav = val
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="less">
	
</style>
