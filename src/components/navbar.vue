<template>
    <div id="parent">
        
        <v-app-bar flat app>
  <v-toolbar-title >
    <span class="text-decoration-line-through grey--text ">ASAP</span>
    <span class="ml-1" >MOB</span>
          <v-icon>mdi-arm-flex</v-icon>

    </v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-btn   outlined>
        <span class="right">signout</span>
<v-icon >mdi-alphabet-piqad</v-icon>
    </v-btn>
    <v-app-bar-nav-icon @click="updatedrawer"></v-app-bar-nav-icon>

</v-app-bar>
        <nav>
<v-navigation-drawer color="blue lighten-1"  v-model="drawer" right app>
 <v-list>
 <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content class="white--text">
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle class="white--text">Logged In</v-list-item-subtitle>
          </v-list-item-content>
                

        </v-list-item>
                        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key='item.name' route :to="item.route">
            <v-list-item-icon>
                <v-icon color='white'>{{item.logo}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="white--text">{{item.name}}</v-list-item-title>
            </v-list-item-content>

        </v-list-item>
 </v-list>

</v-navigation-drawer> 
       </nav>  

    </div>
</template>

<script>
    export default{
     data(){
         return{
             drawer:false,
             items:[
                 {name:'plans',logo:'mdi-foot-print',route:'/'},
                 {name:'memories',logo:'mdi-file-presentation-box',route:'/memories'},

             
             ]
         }
     },
     methods:{
         updatedrawer(){
             this.drawer=!this.drawer
         }
     }
    
    }
</script>

<style >

</style>