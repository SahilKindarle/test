<template>
  <div class="div1" :style="{'background-image': 'url(' + require('../assets/green22.jpg') + ')'}">
    <div class="row">
      <div class="container con">
        <div class="col s12 valign-wrapper">
          <div class="card z-depth-5">
            <br />
            <img src="../assets/humblee2.png" alt="humbleshit" class="logo" />
            <br />
            <div class="card-content" style="padding-top:0">
              <div class="input-field">
                <input type="text" id="username" placeholder="username" />
              </div>
              <div class="input-field">
                <input type="password" id="password" placeholder="password" />
              </div>
              <!-- <div class="input-field">
                <label>
                  <input id="indeterminate-checkbox" type="checkbox" />
                  <span>Remember me</span>
              </label>-->
              <!-- </div> -->
              <br />
              <button id="login">login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#username {
  border-radius: 15px;
  background: #f2f2f2;
  margin: 0 0 15px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
}
#password {
  border-radius: 15px;
  background: #f2f2f2;
  margin: 0 0 15px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
}
#login {
  background: lightblue;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 30px;
  text-transform: uppercase;
  outline: 0;
  width: 60%;
  border: 0;
  padding: 13px;
}
/* .con {
  background-image: url('../assets/background.png');
} */
.card {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.154);
   /* background: rgba(0, 0, 0, 0);  */
  align-items: center;
  /* margin-top: 100px; */
  width: 250px;
  margin: auto;
  border-radius: 20px;
}
.div1 .row {
  margin: 0 auto;
}
.div1 {
  /* background-image: url('../assets/background.jpg'); */
  min-height: 100vh;
}
.con {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.logo {
  width: 125px;
  align-items: center;
  /* padding-right: 10px; */
  /* padding-top: 50px; */
}
</style>