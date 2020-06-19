<template>
    <div>
        <v-btn  class="ma-4" depressed text x-large>
           <div class="text-decoration-underline text-lg "> Plans:</div>
        <v-icon right class="blue--text">mdi-select-all</v-icon>
    </v-btn>
        <v-container>
<v-card dense wrap :class="`pa-3 project ${project.status}`" v-for='project in projects' :key='project.Destination' >
<v-row no-gutters wrap >
    <v-col cols='12' md="3" >
        <div class="caption grey--text">Destination</div>
<div>{{project.Destination}}</div>
        </v-col>
         <v-col cols='6' md='6'>
<div>
<span class='grey--text'>Gangs:</span>{{project.Gangs.first}} | {{project.Gangs.second}} | {{project.Gangs.third}} | {{project.Gangs.fourth}}
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
        </v-container>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                projects:[
                    {Destination:'Sikkim',Gangs:{first:'bishal',second:'Vanja',third:'Rai',fourth:'Suman'},Date:'2019',status:'coming'},
                                        {Destination:'pokhara',Gangs:{first:'kobra',second:'Vanja',third:'Rai',fourth:'Suman'},Date:'2019',status:'complete'},
                                        {Destination:'darjelling',Gangs:{first:'raju',second:'Vanja',third:'Rai',fourth:'Suman'},Date:'2019',status:'ongoing'},

                    {Destination:'ghandhruk',Gangs:{first:'ukn',second:'Vanja',third:'Rai',fourth:'Suman'},Date:'2019',status:'complete'},

                    
                    ]
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