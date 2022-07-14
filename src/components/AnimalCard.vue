<template>
  <router-link
    class="event-link"
    :to="{ name: 'AnimalDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      Display event data
      <span> @{{ event.time }} on {{ event.date }} </span>
      <h4>{{ event.title }}</h4>
      <!-- <h4>{{ animal.name }}</h4>
      <span>{{ animal.type }}</span>
      <span>{{ animal.description }}</span>
      <span>{{ animal.birthdate }}</span>
      <span>{{ animal.imageLink }}</span> -->
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
