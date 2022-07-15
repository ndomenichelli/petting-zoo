<template>
  <b-card>
    <div class="admin">
      <h1>This is an admin page to add Animals</h1>
    </div>
    <div id="chat" class="container"></div>
    <form @submit.prevent="onSubmit">
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
        <textarea v-model="description" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label>Birthdate:</label>
        <input v-model="birthdate" class="form-control" />
      </div>
      <div class="form-group">
        <label>imageLink:</label>
        <input v-model="imageLink" class="form-control" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  </b-card>
</template>

<script>
// @ is an alias to /src
// import EventCard from "@/components/EventCard.vue";
// import EventService from "@/services/EventService.js";
import { getDatabase, ref, push, set } from "firebase/database";

export default {
  name: "Admin",
  components: {
    // EventCard,
  },
  data() {
    return {
      events: null,
      animals: [],
      id: 0,
      name: "",
      type: "",
      description: "",
      birthdate: "",
      imageLink: "",
    };
  },
  methods: {
    onSubmit() {
      // let newAnimal = {
      //   name: this.name,
      //   type: this.type,
      //   description: this.description,
      //   birthdate: this.birthdate,
      //   imageLink: this.imageLink,
      // }

      const db = getDatabase();
      const animalsRef = ref(db, "animals");

      const newAnimalsRef = push(animalsRef);

      set(newAnimalsRef, {
        id: this.id,
        name: this.name,
        type: this.type,
        description: this.description,
        birthdate: this.birthdate,
        imageLink: this.imageLink,
      });
    },
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
};

// const newAnimal = await firebase.firestore().collection('animals').add(animal);
</script>