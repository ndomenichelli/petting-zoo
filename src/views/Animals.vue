<template>
  <!-- <div class="gallery">
    <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
      <img :src="thumbUrl(photo.filename)" />
    </div>
  </div> -->

  <div class="events">
    <AnimalCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import AnimalCard from "../components/AnimalCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "Animals",
  components: {
    AnimalCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        console.log("events: ", response.data);
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
/* .events {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.events {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  /* grid-gap: 1rem; */
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 10rem;
  align-items: center;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>
