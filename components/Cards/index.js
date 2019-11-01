// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card 
// to the DOM.

const cardEntry = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response.data.articles);
    const articleTopicsObj = response.data.articles;
    const topicsArray = Object.keys(articleTopicsObj);
    topicsArray.forEach(topic => {
      const articleConnector = response.data.articles[topic];
      articleConnector.forEach(newArticle => {
        return cardEntry.appendChild(createsCard(newArticle));
      });
    })

      // forEach on response.data for each article (jquery, bootstrap)
      // within the forEach above select the individual topic 
      // and THEN call createsCard
  })

  // response.data.articles is an object containing article tops
  // paired with an array ie Topic: ArrayOfArticles.  I will need
  // each card to represent response.data.articles.TOPIC.articleHeadline
  // 

  function createsCard(article) {
    const newCard = document.createElement('div');
    const newHeadline = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newImgContainer = document.createElement('div');
    const newImg = document.createElement('img');
    const authorSpan = document.createElement('span');

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newImgContainer.classList.add('img-container');

    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newImgContainer);
    newImgContainer.appendChild(newImg);
    newAuthor.appendChild(authorSpan);

    newHeadline.textContent = article.headline;
    newImg.src = article.authorPhoto;
    authorSpan.textContent = `By ${article.authorName}`;

    return newCard;
  }