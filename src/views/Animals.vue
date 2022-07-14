<template>
  <!-- <div class="gallery">
    <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
      <img :src="thumbUrl(photo.filename)" />
    </div>
  </div> -->

  <div class="events">
    <AnimalCard v-for="event in events" :key="event.id" :event="event" />
  </div>

  <!-- <div class="animals">
    <AnimalCard v-for="animal in animals" :key="animal.id" :animal="animal" />
  </div> -->
</template>

<script>
// @ is an alias to /src
import AnimalCard from "../components/AnimalCard.vue";
import EventService from "@/services/EventService.js";
// import { getDb } from "@/main.js";
// import { onValue } from "@firebase/database";

export default {
  // mixins: [getDb],
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
  mounted() {
    // const animalsDb = this.getDb().ref("animals");
    // onValue(animalsDb, (snapshot) => {
    //   const data = snapshot.val();
    //   this.animals.push(data);
    // });
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
