const stories = [
  {
    title: 'Mission Statement',
    words: [
      'Adjective',
      'Verb 1',
      'Verb 2',
      'Plural Noun 1',
      'Plural Noun 2',
      'Plural Noun 3'
    ],
    output: function (words) {
      return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
    }
  },
  {
    title: 'Lunch Room!',
    words: [
      'Animal',
      'Adjective 1',
      'Adjective 2',
      'Vegetable 1',
      'Vegetable 2',
      'Noun',
      'Container'
    ],
    output: function (words) {
      return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
    }
  },

  {
    title: 'Weather Report',
    words: [
      'Adjective 1',
      'Adjective 2',
      'Article of Clothing',
      'Number 1',
      'Number 2',
      'Plural Noun 1',
      'Plural Noun 2'
    ],
    output: function (words) {
      return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
    }
  }
]

//declaring variables
const $btn = document.getElementById('btn')
const $form = document.getElementById('form')
const $storyOutput = document.getElementById('storyOutput')

//preventing page refresh
$btn.addEventListener('submit', function(event){
  event.preventDefault()
})

let wordInput = []       //array for words from the user
let storySelection            //user selecting one of three stories

$btn.addEventListener('click', function(event){                       //creating an event using story button
  wordInput.push(`<form id="input">`)
                  storySelection= stories[event.target.dataset.story]


for(const word of storySelection.words){                            //extracting words for the story
  wordInput.push(`<input type="text" name="${word}" placeholder="${word}" class="formInput">`)
}

wordInput.push(`<button type="submit" class="formButton">Create</button>`)
wordInput.push(`</form>`)
$form.innerHTML = wordInput.join('')
$btn.style.visibility = "hidden"
})

$form.addEventListener("submit", function(event){
  event.preventDefault() 
  const $input = document.getElementById("input")
  const $finalOutput = {}

  for(const formScan of $input.elements){
    if(formScan.name){
      $finalOutput[formScan.name] = formScan.value

      $input.remove()
    }
  }
$storyOutput.innerHTML = storySelection.output($finalOutput)

const $backButton = `<button type="submit" id="backButton">Home</button>`
$storyOutput.innerHTML = $storyOutput.innerHTML + $backButton

$storyOutput.addEventListener('click', function(){
    $storyOutput.style.visibility = "hidden"
    wordInput = []
    $btn.style.visibility = "visible"
  })
})