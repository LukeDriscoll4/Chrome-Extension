// create menu element
const menuContainer = document.createElement('div');
const menu = document.createElement('button');
menu.setAttribute('class', 'dropdown');
menu.innerHTML = 'Modzilla';
menu.style.color = 'green';
// making add and remove buttons
const addRemContainer = document.createElement('div');
const addLinkContainer = document.createElement('button');
const remLinkContainer = document.createElement('button');
addLinkContainer.innerHTML = '+';
remLinkContainer.innerHTML = '-';
addLinkContainer.style.border = '2px solid black';
remLinkContainer.style.border = '2px solid black';
addLinkContainer.style.borderRadius = '50%';
remLinkContainer.style.borderRadius = '50%';
// addRemContainer.style.border = '2px solid red';

// create a placeholder list that drops down when hovering over menu
// make another div and stick it in the menuContain
const dropdown = document.createElement('ul');

//
// const chromeStorage = JSON.parse(chrome.storage.local);
const windowStorage = window.localStorage;
console.log(windowStorage);

if (windowStorage.modzilla) {
  let mz = JSON.parse(windowStorage.modzilla);
  // iterate over the storage, for every key
  for (let key in mz) {
    // create a new div
    const newURL = document.createElement('div');
    // create a new link
    const newLink = document.createElement('a');
    // set the inner text of the link to the value at current key
    newLink.innerText = mz[key];
    // append link to div
    newURL.appendChild(newLink);
    // append div to dropdown
    dropdown.appendChild(newURL);
  }
}

// in the new Contaier, add a list of links
// const list1 = document.createElement('div');
// list1.innerText = 'test';
// const list2 = document.createElement('div');
// list2.innerText = 'test';
// const list3 = document.createElement('div');
// list3.innerText = 'test';
// dropdown.appendChild(list1);
// dropdown.appendChild(list2);
// dropdown.appendChild(list3);

// add event listener to button that will reassign the visability to visible
dropdown.style.position = 'relative';
dropdown.style.display = 'none';
dropdown.style.position = 'absolute';
dropdown.style.backgroundColor = '#f9f9f9';
dropdown.style.minWidth = '160px';
dropdown.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
dropdown.style.padding = '12px 16px';
dropdown.style.zIndex = '1';

// adding event listener for hover
menu.addEventListener('mouseover', () => {
  dropdown.style.display = 'block';
});

dropdown.addEventListener('mouseover', () => {
  dropdown.style.display = 'block';
});

menu.addEventListener('mouseleave', () => {
  dropdown.style.display = 'none';
});

dropdown.addEventListener('mouseleave', () => {
  dropdown.style.display = 'none';
});

let test;

// add event listener to + when click, reassign list element to current url
addLinkContainer.addEventListener('click', () => {
  const newURL = document.createElement('div');
  const newLink = document.createElement('a');
  newLink.innerText = window.location.href;
  // if there's nothing at the 4th index of window storage, create an empty object
  if (!windowStorage.modzilla) {
    test = {};
    test.counter = 0;
    test[test.counter] = window.location.href;
    test.counter++;
    windowStorage.modzilla = JSON.stringify(test);
  } else {
    let obj = JSON.parse(windowStorage.modzilla);
    obj[obj.counter] = window.location.href;
    obj.counter++;
    windowStorage.modzilla = JSON.stringify(obj);
  }
  // otherwise, add a key (counter) and value (URL) to 4th index object
  //   windowStorage.modzilla[counter] = window.location.href;
  console.dir(windowStorage.modzilla);
  newURL.appendChild(newLink);
  dropdown.appendChild(newURL);
});

// add event listener to - when click, search list for current url and delete
remLinkContainer.addEventListener('click', () => {
  for (let a of document.querySelectorAll('a')) {
    if (a.textContent.includes(window.location.href)) {
      a.remove();
    }
  }
  counter--;
});

// append menu element to html
const area = document.querySelector('.main-menu');
area.appendChild(menuContainer);
area.appendChild(addRemContainer);
addRemContainer.appendChild(addLinkContainer);
addRemContainer.appendChild(remLinkContainer);
menuContainer.appendChild(menu);
menuContainer.appendChild(dropdown);

// chrome.storage.local.set({ key: value }, function () {
//   console.log('Value is set to ' + value);
// });

// chrome.storage.local.get(['key'], function (result) {
//   console.log('Value currently is ' + result.key);
// });
