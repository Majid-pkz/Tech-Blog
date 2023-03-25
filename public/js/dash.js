const dash = document.querySelector('#dash-link')


dash.addEventListener('click', ()=> {
    let origin = window.location.origin
    window.location.href = `${origin}/api/dashboard`
})


