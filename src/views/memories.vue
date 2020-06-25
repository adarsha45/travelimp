<template>
  <div >
    
   <div class="container mx-auto p-5 "  >
<h1 class="my-5 text-center  font-normal hover:font-bold">GALLERYof the man</h1> 
    <v-card  tile class=" mx-14 p-4 "  >
  <div class=" grid grid-flow-col grid-cols-3 grid-rows-3 gap-3">
  <div v-for="source in sources" :key="source.alt">    
    <img :src="source.src" id="cover" class=" " />

</div>

   </div>
    </v-card>
   </div>




  </div>
</template>

<script>
import mediumZoom from 'medium-zoom'
    export default {
      
      mounted(){
const zoom=mediumZoom(document.querySelectorAll('#cover',))
zoom.update({background:'black',margin:100,scrollOffset: 0})
}
,

        data(){
            return{
        

sources:[
  {src: require("../assets/css/a.jpeg") ,alt:'global'},{src: require("../assets/css/f.jpeg") ,alt:'nme'},
  {src: require("../assets/css/b.jpeg") ,alt:'lobal'},{src: require("../assets/css/g.jpeg") ,alt:'am'},
  {src: require("../assets/css/c.jpeg") ,alt:'glbal'},{src: require("../assets/css/h.jpeg") ,alt:'ame'},
  {src: require("../assets/css/d.jpeg") ,alt:'globl'},{src: require("../assets/css/i.jpeg") ,alt:'n'},
  {src: require("../assets/css/e.jpeg") ,alt:'nam'},
]
             
            }
        },
      

        
       
    

    }
</script>

<style>

</style>