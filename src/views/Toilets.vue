<template>
  <div>
    <!-- <navbar></navbar> -->

    <div class="row">
      <div class="col s12">
        <ul class="tabs bottom-tabs">
          <li class="tab col s3">
            <a href="#test1">
              <i class="material-icons left" style="margin:10px 0 0 0">assignment</i>To Do
            </a>
          </li>
          <li class="tab col s3">
            <a href="#test2">
              <i class="material-icons left" style="margin:10px 0 0 0">slow_motion_video</i>Doing
            </a>
          </li>
          <li class="tab col s3">
            <a href="#test3">
              <i class="material-icons left" style="margin-top:10px">done_all</i>
              Done
            </a>
          </li>
        </ul>
      </div>
      <div id="test1" class="col s12" style="padding-bottom:50px">
        <div class="contacts" style="padding:10px">
          <h5 class="white-text">To Do</h5>
        </div>
        <div class="card-panel white z-depth-0" style="margin:0" v-for="one in ones" :key="one.id">
          <img src="../assets/toilets.png" alt class="circle left" width="10%" />

          <div>
            <a href="tel:9822540168" class="secondary-content" onclick="toast()">
              <i class="material-icons" v-on:click="showSnackbar = true">phone</i>
            </a>
          </div>

          <router-link v-bind:to="'/toiletview/'+one.id">
            <h5 style="margin-top:0">{{one.name}}</h5>
          </router-link>
          <p>Location: {{one.location}}</p>
        </div>
      </div>
      <div id="test2" class="col s12" style="padding-bottom:50px">
        <!-- <div v-for="post in posts" :key="post.id">{{ post.name}}</div> -->
        <div class="contacts" style="padding:10px">
          <h5 class="white-text">Doing</h5>
        </div>
        <div
          class="card-panel white z-depth-0"
          style="margin:0"
          v-for="post in posts"
          :key="post.id"
        >
          <img src="../assets/toilets.png" alt class="circle left" width="10%" />

          <div>
            <a href="tel:9822540168" class="secondary-content" onclick="toast()">
              <i class="material-icons" v-on:click="showSnackbar = true">phone</i>
            </a>
          </div>
          <h5 style="margin-top:0">{{post.name}}</h5>
          <p>Location: {{post.location}}</p>
        </div>
      </div>
      <div id="test3" class="col s12" style="padding-bottom:50px">
        <div class="contacts" style="padding:10px">
          <h5 class="white-text">Done</h5>
        </div>
        <div
          class="card-panel white z-depth-0"
          style="margin:0"
          v-for="post in posts"
          :key="post.id"
        >
          <img src="../assets/toilets.png" alt class="circle left" width="10%" />

          <div>
            <a href="tel:9822540168" class="secondary-content" onclick="toast()">
              <i class="material-icons" v-on:click="showSnackbar = true">phone</i>
            </a>
          </div>
          <h5 style="margin-top:0">{{post.name}}</h5>
          <p>Location: {{post.location}}</p>
        </div>
      </div>
    </div>
    <div class="fixed-action-btn" style="bottom:53px">
      <a class="btn-floating btn-large" style="background-color:#00c9ff">
        <i class="large material-icons">mode_edit</i>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'

export default {
  name: 'Home',
  methods: {
    getfulldata() {
      var that = this
      axios
        .get('https://sahilkindarle.github.io/db.json')
        .then(function(response) {
          that.posts = response.data
          console.log(response.data)
        })
    },

    getfulldata2() {
      var that = this
      axios
        .get('https://sahilkindarle.github.io/one.json')
        .then(function(response) {
          that.ones = response.data
          console.log(response.data)
        })
    }
  },
  mounted() {
    $(document).ready(function() {
      $('.tabs').tabs({ swipeable: true })
    })

    this.getfulldata(), this.getfulldata2()
  },
  data() {
    return {
      //   info: null,
      posts: [],
      ones: []
    }
  }
}
</script>

<style scoped>
.bottom-tabs {
  position: fixed;
  left: 0;
  border-top: 2px solid#ffca3a;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}
.contacts {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: #ffca3a;
  padding: 50px;
  font-size: 20px;
  border-radius: 15px 15px 0 0;
}

.tabs .tab a:hover,
.tabs .tab a.active {
  color: #ffca3a;
}

.tabs .tab a {
  color: #ffca3a;
}
</style>