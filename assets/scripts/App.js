$(document).ready(function() {
  var data = {
    "quote": "",
    "author": "",
    "html": ""
  };

  $(".messagese").ready(function() {
    setData();
  });

  $("#getMessage").on("click", function() {
    setData();
  });

  $('#btnTweet').click(function(e) {
    var textToTweet = data.quote + "\n - " + data.author;
    if (textToTweet.length > 140) {
      alert('Tweet should be less than 140 Chars');
    } else {
      var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
      window.open(twtLink, '_blank');
    }
  });

  function setData() {
    $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
      data.quote = json.quote;
      data.author = json.author;
      var $quote_block = $("<h3>").addClass("quote").text(data.quote);
      var $author_block = $("<h5>").addClass("author").text("-- " + data.author + " --");
      $(".message").html($quote_block).append($author_block);
    });
  }
});