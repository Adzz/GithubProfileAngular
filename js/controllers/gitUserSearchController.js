githubUserSearch.controller("GitUserSearchController", ["Search", function(Search) {

  var self = this;
  self.doSearch = function(){

    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      });
        .then(function(searchResult){
          for (i=0; i <searchResult.length; i++) {
            Search.repos(searchResult.items.login);
          }
        });
     }
   }
]);
