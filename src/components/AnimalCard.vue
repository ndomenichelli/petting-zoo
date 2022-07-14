<template>
  <router-link
    class="event-link"
    :to="{ name: 'AnimalDetails', params: { id: animal.id } }"
  >
    <div class="event-card">
      <h4>{{ animal.name }}</h4>
      <div>{{ animal.type }}</div>
      <div>{{ animal.description }}</div>
      <div>{{ animal.birthdate }}</div>
      <div>{{ animal.imageLink }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AnimalCard",
  props: {
    animal: {
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
