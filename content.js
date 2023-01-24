
document.body.addEventListener('click', function(elem) {
    let classList = elem.target.classList;
    if(classList.contains("merge-box-button")) {
        alert('Have you done atlantis apply?')
    }
})
