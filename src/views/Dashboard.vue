<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>
      Loading events
    </p>
  </div>
</template>

<script>
// import axios from 'axios'
import EventCard from '../components/EventCard'
import EventService from '@/services/EventService.js'

export default {
  components: { EventCard },
  data () {
    return {
      isLoading: true,
      events: []
    }
  },
  created () {
    EventService.setAuthToken()
    EventService.getEvents().then(({ data }) => {
      this.events = data.events.events
      this.isLoading = false
    })
  }
}
</script>
