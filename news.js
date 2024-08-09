
  const API_KEY = '300a07e6438840378e518526f71d8fef';
  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

  const newsContainer = document.getElementById('news-container');
  
  async function fetchNews() {
      try {
          const response = await fetch(NEWS_API_URL);
          const data = await response.json();
          displayNews(data.articles);
      } catch (error) {
          console.error('Error fetching news:', error);
      }
  }
  
  function displayNews(articles) {
      newsContainer.innerHTML = ''; 
      articles.forEach(article => {
          const newsItem = document.createElement('div');
          newsItem.classList.add('news-item');
          newsItem.innerHTML = `
              <h4>${article.title}</h4>
              <p>${article.description?article.description:"No Description available"}</p>
              <a href="${article.url}" target="_blank">Read more</a>
          `;
          newsContainer.appendChild(newsItem);
      });
  }
  
  // Fetch news initially
  fetchNews();
  
  // Refresh news every 5 minutes (300,000 milliseconds)
  setInterval(fetchNews, 300000);
  
const popup=document.querySelector('.popup')
const close=document.querySelector('.closebtn')
window.onload=function(){
    setTimeout(function(){
        popup.style.display='block'
    },1000)
}
close.addEventListener('click',()=>
{
    popup.style.display='none';
})
