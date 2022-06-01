const inputs = document.querySelectorAll('input.input-formul');
        inputs.forEach(input => {
            if (input.value.trim().length != 0 && !input.previousElementSibling.classList.contains('top')) {
                input.previousElementSibling.style.transition='0s';
                input.previousElementSibling.classList.add('top');
            }
            input.onfocus = () => {
                input.previousElementSibling.classList.add('top');
                input.previousElementSibling.classList.add('focus');
            }
            input.onblur = () => {
                if (input.value.trim().length == 0) {
                    input.previousElementSibling.classList.remove('top');
                }
                input.previousElementSibling.classList.remove('focus');
            }
});

/*---------------------------------------------------------------------
Secition Json
-----------------------------------------------*/

const requestURL = 'https://github.com/ispipa/Proyecto/blob/main/JS/table.js';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }

  function populateHeader(jsonObj)
   {
       var div2= document.getElementById("json");
    const myDiv = document.createElement('div');
    myDiv.textContent = jsonObj['squadName'];
    div2.appendChild(myDiv);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }

  function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }