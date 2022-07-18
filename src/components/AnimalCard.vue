<template>
  <router-link
    class="event-link"
    :to="{ name: 'AnimalDetails', params: { id: animal.id } }"
  >
    <div class="event-card">
      <h4>{{ animal.name }}</h4>
      <img
        v-if="animal.imageLink != null"
        class="image"
        :src="thumbUrl(animal.imageLink)"
      />
      <img v-if="animal.image != null" class="image" :src="animal.image" />
      <div>{{ animal.image }}</div>
      <div>Type of animal: {{ animal.type }}</div>
      <div>{{ animal.description }}</div>
      <div>Birthdate: {{ animal.birthdate }}</div>
      <div>{{ animal.imageLink }}</div>
    </div>
  </router-link>
</template>

<script>
import testImage from "@/assets/images/logo.png";
export default {
  name: "AnimalCard",
  image: testImage,
  imageNash:
    "https://firebasestorage.googleapis.com/v0/b/petting-zoo-c54f3.appspot.com/o/animals?alt=media&token=d8795d0d-1b59-4712-ac5d-e901fd8231b4",
  props: {
    animal: {
      type: Object,
      required: true,
    },
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/${filename}`);
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

.image {
  border: 1px solid black;
  width: 100%;
  height: 100%;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
