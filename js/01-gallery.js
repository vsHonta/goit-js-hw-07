

import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const images = galleryItems.reduce((acc, item) => {
    const result =
        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}" 
                    alt="${item.description}"
                    data-source="${item.original}"
                />
            </a>
        </div>`;
    return acc += result
}, ``)

gallery.insertAdjacentHTML('afterbegin', images)



const onClick = evt => {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return
    }
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `)
    console.log(evt.target.dataset.source);
    return instance.show()
}

// const onEscapeClose = evt => {
//     return instance.close()
// }



gallery.addEventListener('click', onClick)

// gallery.addEventListener('keydown', onEscapeClose)




































// const arr = [];
// galleryItems.forEach(item => {
//     const result = `<img src="${item.preview}" alt="${item.description}">`
//     arr.push(result)
// })
// gallery.innerHTML = arr.join('')
