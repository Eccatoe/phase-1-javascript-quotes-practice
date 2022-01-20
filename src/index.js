const submitButton=document.querySelector('button')

function fetchQuotesWithLikes(){
    fetch('http://localhost:3000/quotes?_embed=likes')
.then(response=>response.json())
.then(quotesArray=>(quotesArray.quote))
}
document.addEventListener('DOMContentLoaded', ()=>{
    const form=document.querySelector('form')
    form.addEventListener('submit', (e)=>{ 
        e.preventDefault()
        buildForm(e.target.quote.value, e.target.author.value)
        console.log(e.target.quote.value, e.target.author.value)
        form.reset()
})
})

function buildForm(quoteSubmission, authorSubmission){
    const quoteList=document.querySelector('#quote-list')
    quoteList.innerHTML=`
    <li class='quote-card'>
    <blockquote class="blockquote">
    <p class="mb-0"></p>
    <footer class="blockquote-footer"></footer>
    <br>
    <button class='btn-success'>Likes: <span class="count">0</span></button>
    <button class='btn-danger'>Delete</button>
    </blockquote>
    </li>`
    const deleteButton=document.querySelector('.btn-danger')
    deleteButton.addEventListener('click', ()=>quoteList.remove())
    const likeButton=document.querySelector('.btn-success')
    likeButton.addEventListener('click', handleLike)
    const quote=document.querySelector('.mb-0')
    const author=document.querySelector('.blockquote-footer')
    quote.textContent=quoteSubmission
    author.textContent=authorSubmission
}

function handleLike(e){
    let count=e.target.textContent
    let countNumber=parseInt(count.charAt(count.length-1),0)
        function increment(){
            countNumber++
            count.textContent=countNumber
            console.log(countNumber)
        }
}


fetchQuotesWithLikes()

  // fetch('http://localhost:3000/likes', {
    //     method: 'POST',
    //     headers: {
    //        'Content-type': 'application/json'
    //     }
    // })
    // .then(response=>response.json())
    // .then(likesArray=>console.log(likesArray))