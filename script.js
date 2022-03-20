easy=document.getElementById('easy');
medium=document.getElementById('medium');
hard=document.getElementById('hard');
let rand;

document.getElementById('easy').addEventListener('click',function (){document.getElementById('head').innerText='Guess A Number between 1 to 50';level=1});
document.getElementById('medium').addEventListener('click',function (){document.getElementById('head').innerText='Guess A Number between 1 to 100';level=2});
document.getElementById('hard').addEventListener('click',function (){document.getElementById('head').innerText='Guess A Number between 1 to 500';level=3});

easy.addEventListener('click',start);
medium.addEventListener('click',start);
hard.addEventListener('click',start);

function start(){
    console.log('hello')
    document.getElementById('level').style.display='none';
    document.getElementById('screen').style.display='block';
    if(level==1) rand=randomnumber(1,50);
    else if(level==2) rand=randomnumber(1,100);
    else if(level==3) rand=randomnumber(1,500);
}   

function randomnumber(min,max){
    return Math.floor(Math.random()*(max-min)+1);
}
hint=document.getElementById('hint');
sub=document.getElementById('sub');
let level;
let c=0;
let hscore={'easy':0,'medium':0,'hard':0};

sub.addEventListener('click',function check(){
    c=c+1;
    console.log(rand);
    guess=document.getElementById('guess').value
    document.getElementById('guess').value='';
        if(guess<rand) hint.innerHTML=`<p>Try a larger number</p>`
        else if(guess>rand) hint.innerHTML=`<p>Try a smaller number</p>`
        else if(guess==rand) {
            hint.innerHTML=`<p>Congratulations!You guessed it</p>`;
                if(level==1) {
                hscore.easy=c;
                localStorage.setItem("Highscore",JSON.stringify(hscore));
            }
            else if(level==2) {
                hscore.medium=c;
                localStorage.setItem("Highscore",JSON.stringify(hscore));}
            else if(level==3) {
                hscore.hard=c;
                localStorage.setItem("Highscore",JSON.stringify(hscore));}
        } 
    
    console.log(guess);
    score.innerText=`Number of guesses:${c}`
})
 