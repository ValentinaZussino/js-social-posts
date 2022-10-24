// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3- Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
// Consigli del giorno:
// > Ragioniamo come sempre a step.
// > Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
// > console.log() è nostro amico.
// > Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

/* <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">Phil Mangione</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=171" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div> */

"use strict"

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// inizio a prendere il contenitore a cui appendere i posts
const container =  document.getElementById('container');
// per ogni oggetto in array posts devo printare la card con i relativi valori per ciascuno
posts.forEach(printPost);

function printPost(object){
    const post = document.createElement('div');
    post.className = 'post'
    post.innerHTML = `
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${object.author.image}" alt="${object.author.name}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${object.author.name}</div>
            <div class="post-meta__time">${object.created}</div>
        </div>                    
    </div>
    </div>
    <div class="post__text">${object.content}</div>
    <div class="post__image">
        <img src="${object.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#nogo" data-postid="${object.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${object.id}" class="js-likes-counter">${object.likes}</b> persone
            </div>
        </div> 
    </div>
    `;
    container.append(post);
}


// prendo btn mi piace per on click
const btnsLikes = document.querySelectorAll('a.js-like-button');
// prendo il counter dei i likes
let likesCounter = document.getElementsByClassName('js-likes-counter');
let likesCounterInnerHtml = parseInt(likesCounter.item(0).innerHTML); //adesso solo per il primo ma da sistemare per tutti
console.log(likesCounterInnerHtml)
// preparo array vuoto per mettere dentro id dei post piaciuti
const likedPostsArray = [];

// al click di ciascuno cambio classe colore e aumento il numero dei likes 
for(let element of btnsLikes){
    element.addEventListener('click', clickOnLike);
}
function clickOnLike(){
    if(!this.classList.contains('like-button--liked')){
        this.classList.add('like-button--liked');
        likesCounterInnerHtml += 1;
        likesCounter.item(0).innerHTML = likesCounterInnerHtml;
        // prendo id da pushare nel nuovo array
        let likedPost = this.dataset.postid;
        likedPostsArray.push(likedPost);
        // console.log(likedPost)
    }else {
        this.classList.remove('like-button--liked');
        likesCounterInnerHtml = likesCounterInnerHtml - 1;
        likesCounter.item(0).innerHTML = likesCounterInnerHtml;
        // tolgo id post non più piaciuto
        let likedPost = this.dataset.postid;
        let dislikedPost = likedPostsArray.indexOf(likedPost);
        likedPostsArray.splice(dislikedPost, 1);
        // console.log(dislikedPost)
    }
    console.log(likesCounterInnerHtml);
    console.log(likedPostsArray);
}