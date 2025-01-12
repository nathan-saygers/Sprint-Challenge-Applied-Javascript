// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: 
// https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    let lambdaTopics = response.data.topics;
    let topicsEntry = document.querySelector('.topics');
    lambdaTopics.forEach(item => {
      const tab = createsTab(item);
      topicsEntry.appendChild(tab);
    })
    })
  .catch(error => {
    console.log('The data you are looking for ISNT there', error);
  })

  function createsTab(topic) {
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = topic;
    return newTab;
  } 
