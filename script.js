// READ the giphy API docs: https://developers.giphy.com/
// Declare our variables
const giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = 'leq3UOTMaEZl6Um4OEfeh0KCMw6cJxea'
var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector('input')
var results = document.querySelector('.results')




// define our functions
function getGifs(path, term){
    console.log(term)
    $.ajax({
        url: `${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data)
            for(var i=0; i<data.data.length; i++){
               results.innerHTML +=`
                 <img class="image" src="${data.data[i].images.preview_gif.url}">
               `
            }

        },
        error: function(error){
            console.log("There was an error")

        }
    })
}



//Call functions and/or add eventlisteners
searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    results.innerHTML = ''
    getGifs("search", searchInput.value)
})
