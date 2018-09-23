
<template>
  <div class="exNine">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>

    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p>Exercise</p>
                <p>Build a Custom Directive which works like v-on (Listen for Events) which accepts a function as the parameter</p>
                <p>Eg - v-custom-on:click="function"</p>
                <!-- Hint - Think about native addEventListener -->
                <button v-custom-on:click="triggerThisFunction" class="btn btn-primary">Click on this button!!</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exNine",
  directives: {
    customOn: {
      bind(el, binding) {
        el.addEventListener(binding.arg, binding.value);
      }
    }
  },
  methods: {
    triggerThisFunction() {
      console.info("button is working Fine!!!");
      alert("button is working fine");
    }
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  list-style: none;
}
a {
  color: #42b983;
}
.custom-directive-container {
  margin: 5px;
  padding: 5px;
  border: 5px solid #42b983;
  width: 500px;
  position: relative;
}
</style>