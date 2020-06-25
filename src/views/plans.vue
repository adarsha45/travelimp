<template>
    <div>
        <v-btn  class="ma-4" depressed text x-large>
           <div class="text-decoration-underline text-lg "> Plans:</div>
        <v-icon right class="blue--text">mdi-select-all</v-icon>
    </v-btn>
        <v-container>
            <v-layout class="mb-5" >
                <v-tooltip top="">
                          <template v-slot:activator="{ on, attrs }">

                <v-btn depressed  small @click="sortby('Destination')" v-on='on' v-bin="attrs"  >
                    <v-icon left>mdi-account-circle</v-icon>
                    <span>By project</span>
                </v-btn>
                          </template>
                                         <span> Sort by Destination </span>

                </v-tooltip>
    <v-tooltip top="">
                              <template v-slot:activator="{ on, attrs }">

                <v-btn depressed  small class="ml-3" @click="sortby('Date')" v-on='on' v-bin="attrs"  >
                    <v-icon left>mdi-account-circle</v-icon>
                    <span>By Date</span>
                </v-btn>
                              </template>
                               <span>Sort by date</span>

                                </v-tooltip>
            </v-layout>
<v-card dense wrap :class="`pa-3 project ${project.status}`" v-for='project in projects' :key='project.Destination' >
<v-row no-gutters wrap >
    <v-col cols='12' md="3" >
        <div class="caption grey--text">Destination</div>
<div>{{project.Destination}}</div>
        </v-col>
         <v-col cols='6' md='6'>
<div >
    <v-combobox
          v-model='project[Gangs]'
          :items=project.Gangs
        label="I use a scoped slot"
          multiple
          chips
        >
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
              @click:close="data.parent.selectItem(data.item)"
            >
              <v-avatar
              
                class="accent white--text"
                left
                v-text="data.item.slice(0, 1).toUpperCase()"
              >
            </v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
</div>
         </v-col>
         <v-col >
                     <div class="caption grey--text">Due-Date</div>

<div>{{project.Date}}</div>
         </v-col>
         <v-col >
               <v-chip
      class="ma-2"
      color="orange"
      outlined
    >
      <v-icon left>mdi-vuetify</v-icon>
<div>{{project.status}}</div>
    </v-chip>
</v-col>
</v-row>
<v-divider></v-divider>

</v-card>






<v-content>
<popups />
</v-content>
    




        </v-container>
    </div>
</template>

<script>
import popups from '@/components/popups'

    export default {
        components:{popups},
        data(){
            return{
                nam:require('@/assets/css/a.jpeg'),
                               

                projects:[
                    {Destination:'Sikkim',Gangs:['bishal','Vanja','Rai','Suman'],Date:'2019',status:'coming'},
                                        {Destination:'Pokhara',Gangs:{first:'kobra',second:'Vanja',third:'Rai',fourth:'Suman'},Date:'2018',status:'complete'},
                                        {Destination:'Darjelling',Gangs:{first:'raju',second:'Vanja',third:'Rai',fourth:'Suman'},Date:'2020',status:'ongoing'},
{Destination:'Ghandhruk',Gangs:{first:'ukn',second:'Vanja',third:'Rai',fourth:'Suman'},Date:'2019',status:'complete'},
]}
        },


        methods:{
            sortby(prop){
                this.projects.sort((a,b) => a[prop] > b[prop] ? -1 : 1)


            }
        }
        
    }
</script>

<style  >
.project.complete{
    border-left: 6px solid #3cd1c2;
    }

.project.ongoing{
    border-left: 6px solid rgb(255, 164, 29);
    }
    
    .project.coming{
    border-left: 6px solid #ccff12;
    }

    .v-chip.complete{
        background: #3cd1c2;
    }
    .v-chip.ongoing{
        background: rgb(255, 45, 45);
    }
    .v-chip.coming{
        background: #ccff12;
    }
</style>