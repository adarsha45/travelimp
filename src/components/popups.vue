<template>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
 
    <template v-slot:activator="{on,attrs}">
    <v-btn class="mt-4 primary" depressed v-on="on" v-bind="attrs">Add project</v-btn>
    </template>
  <v-card>
            <v-card-title class="justify-center blue lighten-1 white--text" v-model="title"> Add project </v-card-title>
        <v-form class="px-3">
           <v-text-field
            v-model="Destination"
            :counter="max"
            :rules="rules"
            label="Destination"
            prepend-icon="mdi-looks"
          ></v-text-field>

  <v-text-field
            v-model="Gangs"
            :counter="20"
            :rules="rules"
            label="Gangs"
            prepend-icon="mdi-fireplace"
          ></v-text-field>
          
    <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        label=" date"
        prepend-icon="mdi-event"
        v-bind="attrs"
        v-on="on"
        :value="date"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date"></v-date-picker>
  </v-menu>

        </v-form>
  
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                Destination:'',
                Gangs:'',
                picker:'',
                title:'',
                date:null

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>