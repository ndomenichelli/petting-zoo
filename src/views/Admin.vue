<template>
  <div>
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
      <!-- <div class="form-group">
        <label>imageLink:</label>
        <input v-model="imageLink" class="form-control" />
      </div> -->
      <!-- <div class="image-uploader">
        <div>
          <div>
            <div>
              <button @click="click1">choose a photo</button>
              <input
                type="file"
                ref="input1"
                style="display: none"
                @change="previewImage"
                accept="image/*"
              />
            </div>

            <div v-if="imageData != null">
              <img class="preview" height="268" width="356" :src="img1" />
              <br />
            </div>
          </div>
        </div>
      </div> -->
      <div>
        <DropZone />
        <span class="file-info">File {{ dropzoneFile.name }}</span>
      </div>
    </form>
    <div>
      <button @click="onSubmitForm">Upload Data</button>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref as dbRef, push, set } from "firebase/database";
import {
  getStorage,
  uploadBytesResumable,
  ref as storRef,
  getDownloadURL,
} from "firebase/storage";
import DropZone from "@/components/DropZone.vue";
import { ref as vueRef } from "vue";

export default {
  name: "Admin",
  components: {
    DropZone,
  },
  setup() {
    let dropzoneFile = vueRef("");
    return { dropzoneFile };
  },
  data() {
    return {
      events: null,
      animals: [],
      id: "a0",
      name: "",
      type: "",
      description: "",
      birthdate: "",
      imageLink: "",
      image: "",
      img1: "",
      imageData: null,
    };
  },
  methods: {
    onSubmitForm() {
      if (this.name == "") {
        alert("enter name");
        return;
      }
      const db = getDatabase();
      const animalsRef = dbRef(db, "animals");

      const newAnimalsRef = push(animalsRef);

      set(newAnimalsRef, {
        id: this.id,
        name: this.name,
        type: this.type,
        description: this.description,
        birthdate: this.birthdate,
        imageLink: this.imageLink,
        image: this.img1,
      });
    },

    click1() {
      this.$refs.input1.click();
    },

    previewImage(event) {
      console.log("previewImage");
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      // console.log("onUpload");

      this.img1 = null;
      const storage = getStorage();

      // console.log("onUpload getstorage");

      const storageRef = storRef(storage, `animals/${this.imageData}`);

      const uploadTask = uploadBytesResumable(storageRef, this.imageData);

      // console.log("onUpload 2");

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      console.log("upload task check");
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log("Unsuccessful Upload: " + error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          this.uploadValue = 100;
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            this.img1 = downloadURL;
            console.log(this.img1);
          });
        }
      );
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
</script>
<style scoped lang="scss">
</style>