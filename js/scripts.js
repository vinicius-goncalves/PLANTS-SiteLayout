let getScroll = document.getElementById('scroll-indicator')

window.addEventListener('scroll', () => {
    let scrollY = document.documentElement.scrollTop
    let heightClient = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let percentage = (scrollY / heightClient) * 100
    getScroll.style.width = percentage + "%"
})