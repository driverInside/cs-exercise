new Vue({
  el: '#index',
  data: {
    checkedOptions: [],
    defaultOptions: [ "tracks" ],
    searchQuery: '',
    q: '',
    result: {}
  },
  beforeMount: function () {
  },
  mounted: function () {
    
  },
  methods: {
    buildQuery: function () {
      var query = ''
      var opts = (!this.checkedOptions.length)? this.defaultOptions : this.checkedOptions
      
      query = opts[0] + '=true'
      if (opts.lenght === 1) {
        return query
      }

      for (var i = 1; i < opts.length; i++) {
        query += '&' + opts[i] + '=true'
      }

      return query
    },
    onSubmit: function (evt) {
      var self = this
      axios.get('/api/spotify?q=' + self.q + '&' + self.searchQuery)
        .then(function (response) {
          console.log(response.data)
          self.result = response.data.data
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    checkboxToggle: function (evt) {
      this.searchQuery = this.buildQuery()
    }
  }
})
