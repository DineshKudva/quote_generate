const quote_list = [ 'The purpose of our lives is to be happy' , 'Life is what happens when you’re busy making other plans.', 'If you want to live a happy life, tie it to a goal, not to people or things.','Never let the fear of striking out keep you from playing the game.','The big lesson in life, baby, is never be scared of anyone or anything.', 'You never really learn much from hearing yourself speak.','The healthiest response to life is joy.','Keep calm and carry on.','Every moment is a fresh beginning.','It is our choices that show what we truly are, far more than our abilities.','Your mind missed the shot not your body','The best way to predict your future is to create it.','There are no mistakes, only opportunities.','Sometimes you can’t see yourself clearly until you see yourself through the eyes of others.','Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.','Never take life seriously. Nobody gets out alive anyway.','Be happy for this moment. This moment is your life.'
]; 

var button = document.getElementById('btn');

button.addEventListener('click',runEvent);

// button.addEventListener('')

function runEvent(e){
    e.preventDefault();
    
    // generate random index
    var index = Math.floor(Math.random()*(quote_list.length-1-0)+0);
    
    // assign quote t variable
    var text = quote_list[index];

    // access display area
    var displaytext= document.getElementById('disp_text');
    
    // clear display area:
    displaytext.innerHTML="";
     
    // add quote text to display area: 
    displaytext.appendChild(document.createTextNode(`" `+text+` "`));
    
}