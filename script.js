function myFunction(){
    var dots = document.getElementById('dots');
    var readMore = document.getElementById('more');
    var readText = document.getElementById('myTag');

    if(dots.style.display === 'none') {
        dots.style.display = 'inline';
        readText.innerHTML = 'Read More';
        readMore.style.display = 'none';
    } else{
        dots.style.display = 'none';
        readText.innerHTML = 'see less';
        readMore.style.display = 'inline'        
         
    }
}

function theFunction(){
    var dot = document.getElementById('dot');
    var readMore = document.getElementById('big');
    var readText = document.getElementById('theTag');

    if(dot.style.display === 'none') {
        dot.style.display = 'inline';
        readText.innerHTML = 'Read More';
        readMore.style.display = 'none';
    } else{
        dot.style.display = 'none';
        readText.innerHTML = 'see less';
        readMore.style.display = 'inline'        
         
    }
}

function yourFunction(){
    var dotss = document.getElementById('dotss');
    var readMore = document.getElementById('large');
    var readText = document.getElementById('yourTag');

    if(dotss.style.display === 'none') {
        dotss.style.display = 'inline';
        readText.innerHTML = 'Read More';
        readMore.style.display = 'none';
    } else{
        dotss.style.display = 'none';
        readText.innerHTML = 'see less';
        readMore.style.display = 'inline'        
         
    }
}

function ourFunction(){
    var dotts = document.getElementById('dotts');
    var readMore = document.getElementById('fat');
    var readText = document.getElementById('ourTag');

    if(dotts.style.display === 'none') {
        dotts.style.display = 'inline';
        readText.innerHTML = 'Read More';
        readMore.style.display = 'none';
    } else{
        dotts.style.display = 'none';
        readText.innerHTML = 'see less';
        readMore.style.display = 'inline'        
         
    }
}

function herFunction(){
    var dottss = document.getElementById('dottss');
    var readMore = document.getElementById('small');
    var readText = document.getElementById('herTag');

    if(dottss.style.display === 'none') {
        dottss.style.display = 'inline';
        readText.innerHTML = 'Read More';
        readMore.style.display = 'none';
    } else{
        dottss.style.display = 'none';
        readText.innerHTML = 'see less';
        readMore.style.display = 'inline'        
         
    }
}





// Not Interested command for Paris
const buttonId = document.getElementById('myBtn')
const cardId = document.getElementById('paris')

buttonId.addEventListener('click', function(){
     cardId.style.display ="none";
})


// Not Interested command for Ireland
const btnId = document.getElementById('theBtn');
const cadId = document.getElementById('ireland');

btnId.addEventListener('click', function(){
     cadId.style.display ="none";
})




// Not Interested command for Vienna
const buttonnId = document.getElementById('yourBtn')
const carddId = document.getElementById('vienna')

buttonnId.addEventListener('click', function(){
     carddId.style.display ="none";
})


// Not Interested command for Rome
const butonnId = document.getElementById('ourBtn')
const cardddId = document.getElementById('rome')

butonnId.addEventListener('click', function(){
     cardddId.style.display ="none";
})



// Not Interested command for Poland

const butonnnId = document.getElementById('herBtn')
const carrdId = document.getElementById('poland')

butonnnId.addEventListener('click', function(){
     carrdId.style.display ="none";
})


// Page reload command

const refreshButton = document.querySelector('.refreshBtn');


const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)




//  const mainTag = document.getElementById('main-tag')

//  if (mainTag == ''){
//     refreshButton.style.display ='block'
//  } else{
//     refreshButton.style.display ='none'
//  }




// Failed Script 

// function removeFunction(){
//     var removeBtn = document.getElementById('myBtn')
//     var paRis = document.getElementsByClassName('paris')

//     myBtn.addEventListener("click", function() {
//         tour.style.display = "none";
//       });
// }



// Failed Refresh Tag Command 
// const refreshTag = document.querySelector('.refreshBtn');
// var ourTours = document.querySelector('.our-tours')


// const refreshIt = () =>{
//     if(refreshTag.style.display == 'none'){
//         refreshTag.style.display =='block'
//     }

//     else{
//         refreshTag.style.display == 'none'
//     }
// }

// Faild scripts

// const buttonId = document.getElementById('myBtn')
// const cardId = document.getElementById('paris')

// buttonId.addEventListener('click', function(){
//      cardId.style.display ="none";
// })





// Failed script

// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

// document.getElementById('myBtn').addEventListener('click', function(){
//     this.style.backgroundColor = "red";
// })






// const buttonId = document.getElementById('myBtn')
// const cardId = document.getElementById('paris')

// buttonId.addEventListener('click', function(){
//      cardId.style.display ="none";
// })