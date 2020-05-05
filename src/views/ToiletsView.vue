<template>
  <div>
    <!-- <navbar></navbar> -->
    <!-- {{id}} -->
    <!-- <div v-if="person">{{person.name}}</div> -->
    <div class="home">
      <div class="row">
        <div class="container">
          <div>
            <h4 class="left">Toilet Name:</h4>
            <br />
            <p>{{id}}</p>
            <br />
            <br />
            <h5
              class="right"
              style="margin:0;margin-bottom:10px"
              v-if="person"
            >{{person.address.suite}}</h5>
          </div>

          <div style="margin-bottom:10px">
            <table class="centered">
              <thead>
                <tr>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <!-- <th>Item Price</th> -->
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1200</td>
                  <td>-</td>
                  <!-- <td>$0.87</td> -->
                </tr>
              </tbody>
            </table>
          </div>

          <div style="margin-bottom:10px">
            <p>Scheduled Time : 1150</p>
          </div>
          <div style="margin-bottom:10px">
            <h5 class="left">Janitor Name:</h5>
            <br />
            <br />
            <!-- <br /> -->
            <div class="row">
              <h6 class="right" style="margin:0;margin-bottom:10px" v-if="person">{{person.name}}</h6> 
            </div>
          </div>

          <div>
            <a class="waves-effect waves-light btn blue" style="border-radius:15px">
              <i class="material-icons left">phone</i>Call
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import navbar from './Nav'
import axios from 'axios'

export default {
  props: ['id'],
  data: function() {
    return {
      person: null
    }
  },
  methods: {
    getdata() {
      var that = this
      axios
        .get('https://jsonplaceholder.typicode.com/users/' + this.id)
        .then(function(response) {
          // handle success
          that.person = response.data
          console.log(response)
        })
    }
  },
  mounted: function() {
    this.getdata()
  }
}
</script>