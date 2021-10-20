$(function(){
    $('.form__btn').on('click',function(){
      $('.result').text(ArrayChallenge(ConvertString( $('.form__input').val())));
      $('.form__input').text('');
    });
});

function ArrayChallenge(arr){
  return [...arr.slice(arr[0]), ...arr.slice(0,arr[0])].join('');
}

function ConvertString(str){
  let localStr = str;

  if(localStr[0] == '['){
    localStr = localStr.slice(1);
  }

  if(localStr[localStr.length-1] == ']'){
    localStr = localStr.slice(0,localStr.length-1);
  }

  return localStr.split(',');
}
