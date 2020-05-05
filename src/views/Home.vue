<template>
  <div class="home" style="background-color:#F0F0F7">
    
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="row">
      <div class="container">
        <div class="col s6">
          <div
            class="card-panel z-depth-4"
            style="background-color:#3F78DF;padding:10px;border-radius:15px"
          >
            <i class="material-icons Tiny left white-text">adjust</i>
            <h5 class="white-text">
              Total
              Toilets
              <br />
              <br />
              <span style="font-size:40px">{{user.data}}</span>
            </h5>
          </div>
        </div>
        <div class="col s6">
          <div
            class="card-panel z-depth-4"
            style="background-color:#62D48C;padding:10px;border-radius:15px"
          >
            <i class="material-icons Tiny left white-text">person</i>
            <h5 class="white-text">
              Total Janitors
              <br />
              <br />
              <span style="font-size:40px">{{user.data}}</span>
            </h5>
          </div>
        </div>
        <div class="col s6">
          <div
            class="card-panel z-depth-4"
            style="background-color:#CEC3B4;padding:10px;border-radius:15px"
          >
            <i class="material-icons Tiny left white-text">featured_play_list</i>
            <h5 class="white-text">
              Total Tickets
              <br />
              <br />
              <span style="font-size:40px">{{user.data}}</span>
            </h5>
          </div>
        </div>
        <div class="col s6">
          <div
            class="card-panel z-depth-4"
            style="background-color: #ed8a0a;padding:10px;border-radius:15px"
          >
            <i class="material-icons Tiny left white-text">work</i>
            <h5 class="white-text">
              Work Orders
              <br />
              <br />
              <span style="font-size:40px">{{user.data}}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div class="contacts" style="padding:10px">
      <h5 class="white-text">Quick Contacts</h5>
    </div>
    <div class="white">
      

      <div class="card-panel white z-depth-0" v-for="item in items" :key="item.name">
        <img src="../assets/sahil.jpeg" alt class="circle left" width="10%" />
        <!-- <div>
          <a href="#!" class="secondary-content">
            <i class="material-icons" style="margin-left:30px">message</i>
          </a>
        </div>-->
        <div>
          <a href="tel:9822540168" class="secondary-content" onclick="toast()">
            <i class="material-icons">phone</i>
          </a>
        </div>
        <h5 style="margin-top:0">{{item.name}}</h5>
        <p>Description</p>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  name: 'Home',
  data() {
    return {
      user: {
        data: 2334
      },
      items: [
        { name: 'sahil' },
        { name: 'sahil1' },
        { name: 'sahil2' },
        { name: 'sahil3' },
        { name: 'sahil4' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' },
        { name: 'sahil5' }
      ]
    }
  },
  mounted() {
    // $(document).ready(function() {
    //   if ($(window).scrollTop() > 150) {
    //     $('nav').addClass('sticky-nav')
    //   }
    // })
  }
}
</script>


<style scoped>
.contacts {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: #4169e1;
  padding: 50px;
  font-size: 20px;
  border-radius: 15px 15px 0 0;
}

/* .contacts{
  position: fixed;
  top: 0;
} */
</style>