const accordionItemHeaders = document.querySelectorAll('.accordion-item-header')

accordionItemHeaders.forEach(accordionItemHeader => {
    console.log('im clicked')
    accordionItemHeader.addEventListener("click", event => {
      accordionItemHeader.classList.toggle("active");
    })
})