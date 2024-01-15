/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let articless = ["the", "our", "them", "they", "she"];
  let adjectives = ["great", "big", "thrilling", "funny", "huge"];
  let nouns = ["jogger", "racoon", "car", "spaceship", "tiger"];
  let tlds = [".com", "org", ".io", ".gov", ".app"];

  let domainNames = [];

  for (let article of articless) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }
  document.body.innerHTML = `<ul> ${domainNames
    .map(domainNames => `<li>${domainNames}</li>`)
    .join(" ")} </ul>`;
};

//articles.foreach(articles);

//console.log(`${pronoun[0]}${adj[0]}${noun[0]}${tlds[0]}`);
