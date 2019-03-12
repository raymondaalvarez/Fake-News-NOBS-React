const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9e3ac01f44214b3e8f0bcf5c572dc0de');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  from: '2019-02-15',
  to: '2019-03-07',
  language: 'en'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
}).catch(function (response) {
  console.log(response);
});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2019-02-15',
  to: '2019-03-07',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
}).catch(function (response) {
  console.log(response);
});
// To query sources
// All options are optional
newsapi.v2.everything({
  q:"Donald Trump",
  phrase:'Donald Trump',
  from: '2019-02-15',
  to: '2019-03-07',
  language: 'en'
}).then(response => {
  console.log('split');
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
}).catch(function (response) {
  console.log(response);
});

newsapi.v2.everything({
  q: 'Donald Trump is laying the groundwork to de-legitimize the 2020 election'
}).then(response => {
  console.log("testing#1");
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
}).catch(function (response) {
  console.log(response);
});