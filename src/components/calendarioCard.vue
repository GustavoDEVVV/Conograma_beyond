<template>
    <v-row>
      <h1 class="titulo">Calendario</h1>
      <v-col cols="12">
        <v-sheet>
          <v-calendar 
            ref="calendar"
            v-model="today"
            :events="events"
            color="primary"
            type="week"
          ></v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </template>
  <script>
    export default {
      data: () => ({
        today: '2019-01-08',
        weekday: [0, 1, 2, 3, 4, 5, 6],
        weekdays: [
          { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
          { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
          { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
          { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
        ],
        events: [
          {
            title: 'Weekly Meeting',
            start: new Date('2019-01-07 09:00'),
            end: new Date('2019-01-07 10:00'),
          },
          {
            title: `Thomas' Birthday`,
            start: new Date('2019-01-10'),
            end: new Date('2019-01-10'),
            allDay: true,
          },
          {
            title: 'Mash Potatoes',
            start: new Date('2019-01-09 12:30'),
            end: new Date('2019-01-09 15:30'),
          },
        ],
      }),
    }
  </script>
  
  <style scoped>

  .titulo{
    margin-left: 90vh;
    color: orange;
  }

  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: transparent;
    color: #ffffff;
    font-size: 5px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;
    border-radius: 0.5rem;
  }
  
  .my-event.with-time {
    position: absolute;
    color: rebeccapurple;
    right: 4px;
    margin-right: 0px;
  }
  
  .v-calendar{

    width: 800px;
    height: 500px;
    margin: auto;
    padding: 0;
    color: rebeccapurple;
    border-radius: 0.5rem;
    background-color: transparent;
    border: 2px solid #6918c0;
  }

  .v-sheet{
    width: 800px;
    padding: 0;
    color: rebeccapurple;
    border-radius: 0.5rem;
    margin: 3px auto 0;
  }

  </style>