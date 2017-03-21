new Vue({
  el: '#app',
  data: {
    object: {
      FirstName: 'Name1',
      LastName: 'LastName1',
      Age: 30
    }
  }
});

new Vue({
  el: '#app2',
  data: {
    object: {
      FirstName: 'Name1',
      LastName: 'LastName1',
      Age: 30
    }
  }
});

new Vue({
  el: '#app3',
  data: {
    object: {
      FirstName: 'Name1',
      LastName: 'LastName1',
      Age: 30
    }
  }
});

new Vue({
  el: '#app4',
  data: {
    object: {
      set1: {
        FirstName: 'Name1',
        LastName: 'LastName1',
        Age: 30
      },
      set2: {
        FirstName: 'Name2',
        LastName: 'LastName2',
        Age: 32,
        Likes: ["item1", "item2"]
      }
    }
  }
});