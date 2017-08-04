$(document).ready(function() {
  var quotes = ['Try not to become a man of success, but rather try to become a man of value', 
  'What we think, we become', 
  'The secret of getting ahead is getting started'];
  var author = ['Albert Einstein', 'Buddha', 'Mark Twain'];
  getQuote(quotes, author);
  $('#randQuote').click(function() {
    getQuote(quotes, author);
    $('#quote').fadeOut('slow').fadeIn('slow');
  });

  function getQuote(quote, author) {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    $('#quote').text('" ' + quote[randomQuote] + ' "');
    $('#author').text('- ' + author[randomQuote]);
    $('.tweet-btn').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote[randomQuote] + '."' + 'by - ' + author[randomQuote]));
  }
});