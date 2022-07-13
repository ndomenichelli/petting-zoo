<template>
  <div class="about">
    <h1>This is an about page for the events</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import EventCard from "@/components/EventCard.vue";
// import EventService from "@/services/EventService.js";

export default {
  name: "Admin",
  components: {
    // EventCard,
  },
  data() {
    return {
      events: null,
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
};
</script>