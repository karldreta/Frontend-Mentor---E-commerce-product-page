const productThumbnail = document.querySelectorAll('.productThumbnail');
productThumbnail.forEach(thumbnail => thumbnail.addEventListener('click', expandThumbnail));

export default function expandThumbnail() {
    // Add lightbox mode class to thumbnails and container
    productThumbnail.forEach(thumbnail => thumbnail.classList.add('lightboxMode'));
    const thumbnailContainer = document.querySelector('.additionalProductPicture');
    thumbnailContainer.classList.add('lightboxMode');

    // Get product picture HTML content
    const productPicture = document.querySelector('.productPicture');

    // Create dialog
    const lightbox = document.createElement('dialog');
    lightbox.classList.add('lightbox');

    // Create close button
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('closeModal');
    closeBtn.innerHTML = `
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"/>
        </svg>
    `;

    // Append close button and product picture to the dialog
    lightbox.appendChild(closeBtn);
    lightbox.innerHTML += productPicture.innerHTML;

    // Append dialog to the body
    document.body.appendChild(lightbox);
    lightbox.style.display = 'flex';
    lightbox.showModal();


    function closeModal() {
        alert('hello')
        lightbox.close();
        lightbox.style.display = '';
    }

    closeBtn.addEventListener('click', closeModal);    

    lightbox.addEventListener("click", e => {
        const dialogDimensions = lightbox.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
            lightbox.style.display = 'none';
            lightbox.close();
        }
      })
}