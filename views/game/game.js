let pointer = 0;
let alphabet = ['#ans_1','#ans_2','#ans_3','#ans_4'];
let order = ['first', 'second', 'third', 'fourth'];
let question = [];
let fail = 0;
$(document).ready(() => {
     question = generateAns(4)
     orderAns();
     $('#a').on('click',function(){
          ranCharString('A');
     })
     $('#b').on('click',function(){
          ranCharString('B');
     })
     $('#c').on('click',function(){
          ranCharString('C');
     })
     $('#d').on('click',function(){
          ranCharString('D');
     })
     $('#popup').on('click',()=>{
          $('.popup-player').css({'visibility':'visible','background':'white','color':'black'})
          $('#end-game').text('You Won\nYou got '+fail+' fail(s).');
     })
})

const ranCharString = (char) => {
     if (char === question[pointer]){
          let remainNum = 3;
          remainNum -= pointer;
          $(alphabet[pointer]).text(char)
          $('#'+char.toLowerCase()).attr('disabled', true)
          $('#remain-num').text(remainNum);
          pointer++;
          orderAns();
     }
     else{
          fail+=1;
          $('#fail-num').text('Fail: '+fail);
     }
     endGame()
}

function orderAns(){
     $('#order-answer').text(order[pointer]);
}

function generateAns(length){
     let characters = 'ABCD'
     const random = ()=>Math.floor(Math.random()*charactersLength)
     const charactersLength = characters.length;
     const randomCharAns =[]
          
     for ( let i = 0; i < length; i++ ){
          let index = random()
          while(randomCharAns.includes(characters[index]))
               index = random()
          randomCharAns.push(characters[index]);
          
     }
          return randomCharAns;
       
}

function endGame(){
     if (pointer === 4){
          $('.popup-player').css({'visibility':'visible','background':'#ffff66','color':'black'})
          $('#fail-num2').text(fail);
          setTimeout(()=>{     
               $('#post-name').val($('#name').text())
               $('#post-fail').val(fail)
               $('#post-form').submit()
          },3500)
     }
}
