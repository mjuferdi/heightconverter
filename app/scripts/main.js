var vm = new Vue({
  el: '#app',
  data: {
    name: '',
    heightFrom: [{
        name: "m",
        desc: "Meter"
      },
      {
        name: "cm",
        desc: "Centimeter"
      },
      {
        name: "ft",
        desc: "Feet"
      },
      {
        name: "in",
        desc: "Inches"
      }
    ],
    convertFrom: "m",
    converTo: "cm",
    amount: ""
  },
  computed: {
    finalResult: function() {
      var to = this.converTo;
      var from = this.convertFrom;
      var final;
      switch (from) {
        case "m":
          if (to == "cm") {
            final = this.amount * 100;
          }
          if (to == "ft") {
            final = this.amount * 3, 28084;
          }
          if (to == "in") {
            final = this.amount * 39, 3701;
          }
          if (to == "m") {
            final = this.amount;
          }
          break;
        case "cm":
          if (to == "m") {
            final = this.amount / 100;
          }
          if (to == "ft") {
            final = this.amount / 30.48;
          }
          if (to == "in") {
            final = this.amount * 0.39;
          }
          if (to == "cm") {
            final = this.amount;
          }
          break;
        case "ft":
          if (to == "m") {
            final = this.amount / 3, 28;
          }
          if (to == "cm") {
            final = this.amount * 30, 48;
          }
          if (to == "in") {
            final = this.amount * 12;
          }
          if (to == "ft") {
            final = this.amount;
          }
          break;
        case "in":
          if (to == "m") {
            final = this.amount * 0, 0254;
          }
          if (to == "cm") {
            final = this.amount * 2, 54;
          }
          if (to == "ft") {
            final = this.amount * 0, 0833333;
          }
          if (to == "in") {
            final = this.amount;
          }
          break
      }
      return final;
    }
  }
});
