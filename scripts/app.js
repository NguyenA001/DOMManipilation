let BG = document.getElementById('BG');
let shrek = document.getElementById('shrek');
let title = document.getElementById('title');
let titleChangeBtn = document.getElementById('titleChangeBtn');
let changeBG = document.getElementById('changeBG');
let shrekRoll = document.getElementById('shrekRoll');
let evolve = document.getElementById('evolve');
let bigShrek = document.getElementById('bigShrek');
let smallShrek = document.getElementById('smallShrek');
let moveLeft = document.getElementById('moveLeft');
let moveRight = document.getElementById('moveRight');
let change = document.getElementById('change');

let boolAll = true;

let wiggleBtn = document.getElementById('wiggleBtn');
wiggleBtn.addEventListener('click',function(e){
    if(boolAll)
    {
        title.classList.add('wiggle', 'purple');
    }
    else
    {
        title.classList.remove('wiggle', 'purple');
    }
    boolAll = !boolAll;
});

titleChangeBtn.addEventListener('click',function(e){
    if(boolAll)
    {
        title.textContent = "noitalupinaM MOD";
        title.classList.add('red');
    }
    else{
        title.textContent = "DOM Manipulation";
        title.classList.remove(title.classList);
    }
    boolAll = !boolAll;
});

changeBG.addEventListener('click',function(e){
    if(boolAll)
        {
            BG.classList.add('BGblue');
        }
    else
    {
        BG.classList.remove(BG.classList);
    }
    boolAll = !boolAll;
});

shrekRoll.addEventListener('click', function(e){
    if(boolAll)
        {
            shrek.classList.add('barrelRoll');
        }
    else
    {
        shrek.classList.remove('barrelRoll');
    }
    boolAll = !boolAll;
})

evolve.addEventListener('click', function(e){
    if(boolAll)
    {
        shrek.innerHTML="<img src=\"./images/DorisTransparent.png\" height=\"400px\">";
    }
    else
    {
        shrek.innerHTML = "<img src=\"./images/purepng.com-shrekshrekcomputer-animatedfantasy-filmfairy-talebook-1701528653667zkisp.png\" width=\"500px\">";
    }
    boolAll = !boolAll;
});

bigShrek.addEventListener('click', function(e){
    if(boolAll)
    {
        shrek.innerHTML="<img src=\"./images/purepng.com-shrekshrekcomputer-animatedfantasy-filmfairy-talebook-1701528653667zkisp.png\" height=\"800px\">";
    }
    else
    {
        shrek.innerHTML = "<img src=\"./images/purepng.com-shrekshrekcomputer-animatedfantasy-filmfairy-talebook-1701528653667zkisp.png\" width=\"500px\">";
    }
    boolAll = !boolAll;
});
smallShrek.addEventListener('click', function(e){
    if(boolAll)
    {
        shrek.innerHTML="<img src=\"./images/purepng.com-shrekshrekcomputer-animatedfantasy-filmfairy-talebook-1701528653667zkisp.png\" height=\"200px\">";
    }
    else
    {
        shrek.innerHTML = "<img src=\"./images/purepng.com-shrekshrekcomputer-animatedfantasy-filmfairy-talebook-1701528653667zkisp.png\" width=\"500px\">";
    }
    boolAll = !boolAll;
});

moveLeft.addEventListener('click',function(e){
    if(boolAll)
    {
        title.classList.add('moveTitleLeft')
    }
    else
    {
        title.classList.remove(title.classList)
    }
    boolAll = !boolAll;
});
moveRight.addEventListener('click',function(e){
    if(boolAll)
    {
        title.classList.add('moveTitleRight')
    }
    else
    {
        title.classList.remove(title.classList)
    }
    boolAll = !boolAll;
});

change.addEventListener('click',function(e){
    if(boolAll)
        {
            title.classList.add('changeTitle','heartbeat');
        }
    else
    {
        title.classList.remove('changeTitle','heartbeat');
    }
    boolAll = !boolAll;
});
