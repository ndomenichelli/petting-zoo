<template>
  <b-card>
    <div class="admin">
      <h1>This is an admin page to add Animals</h1>
    </div>
    <div id="chat" class="container"></div>
    <form @submit.prevent="storeMessage">
      <div class="form-group">
        <label>Name:</label>
        <input v-model="name" class="form-control" />
      </div>
      <div class="form-group">
        <label>Type:</label>
        <input v-model="type" class="form-control" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <textarea v-model="messageText" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label>Birthdate:</label>
        <input v-model="birthdate" class="form-control" />
      </div>
      <div class="form-group">
        <label>imageLink:</label>
        <input v-model="imageLink" class="form-control" />
      </div>
      <button class="btn btn-primary">Send</button>
    </form>
  </b-card>
</template>

<script>
// @ is an alias to /src
// import EventCard from "@/components/EventCard.vue";
// import EventService from "@/services/EventService.js";
// import { getDb } from "@/main.js";

export default {
  // mixins: [getDb],
  name: "Admin",
  components: {
    // EventCard,
  },
  data() {
    return {
      events: null,
      animals: [],
    };
  },
  created() {
    // EventService.getEvents()
    //   .then((response) => {
    //     console.log("events: ", response.data);
    //     this.events = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  // mounted() {
  //   this.getDb()
  //     .ref("animals")
  //     .on("value", (snapshot) => console.log(snapshot.val()));
  // },
};

// const newAnimal = await firebase.firestore().collection('animals').add(animal);
</script>