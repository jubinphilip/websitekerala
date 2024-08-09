

console.log(close)
function evalQuiz()
{
    const popup=document.querySelector('.popup')
    const close=document.querySelector('.closebtn')
    popup.style.display='block'
    close.addEventListener('click',()=>
        {
            popup.style.display='none';
        })
    const resulthead=document.getElementById('resulthead')
    const resulttxt=document.getElementById('resulttxt')
    try
    {
   var ans1=document.querySelector('input[name="ans1"]:checked').value
   var ans2=document.querySelector('input[name="ans2"]:checked').value
   var ans3=document.querySelector('input[name="ans3"]:checked').value
   var ans4=document.querySelector('input[name="ans4"]:checked').value
   var ans5=document.querySelector('input[name="ans5"]:checked').value
   var ans6=document.querySelector('input[name="ans6"]:checked').value
   var ans7=document.querySelector('input[name="ans7"]:checked').value
   var ans8=document.querySelector('input[name="ans8"]:checked').value
   var ans9=document.querySelector('input[name="ans9"]:checked').value
   var ans10=document.querySelector('input[name="ans10"]:checked').value
    }
    catch
    {
        alert("Select answer for every question");
    }
    console.log(ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10)
    let correctAnswers = [
        'Keralaputra',
        'Righteousness and moral governance',
        'Mauryan Empire',
        '1st century CE',
        'Kulashekhara dynasty',
        'Marthanda Varma',
        '15th century',
        'Dutch',
        '1956',
        'Travancore and Cochin'
    ];
    
    let userAnswers = [ans1, ans2, ans3, ans4, ans5, ans6,ans7, ans8, ans9, ans10];
    let count = 0;
    
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            count++;
        }
    }
    console.log(count)
    if(count>7)
    {
        
        resulthead.innerHTML="Congratulations";
        resulttxt.innerHTML=`You have Scored ${count} marks`
    }else
    {
        resulthead.innerHTML="Try Again you have to improve";
        resulttxt.innerHTML=`You have Scored ${count} marks`
    }
}



