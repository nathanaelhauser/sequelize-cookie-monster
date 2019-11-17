document.addEventListener('click', e => {

  if (e.target.id === 'cookie-btn') {
    e.preventDefault()
    
    const cookieName = document.querySelector('#cookie-name').value
    if (cookieName) {
      axios.post('/cookies', {
        name: cookieName
      })
        .then(() => window.location.reload())
        .catch(e => console.error(e))
    }
  }

  if (e.target.className === 'cookie') {
    axios.put(`/cookies/${e.target.dataset.cookieid}`,
      { devoured: parseInt(e.target.dataset.devoured) ? 0 : 1 })
      .then(() => window.location.reload())
      .catch(e => console.error(e))
  }

})