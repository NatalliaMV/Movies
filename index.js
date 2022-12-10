const searchInput = document.querySelector('#search')
const divMovie = document.querySelectorAll('.movie')


searchInput.addEventListener('keyup', (event) => {
    const word = event.target.value.toLowerCase()

    divMovie.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none')
    })
})