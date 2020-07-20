const jamsilBr = document.getElementsByClassName('jamsilBr');
const jamsilSr = document.getElementsByClassName('jamsilSr');
const attendanceBr = document.getElementById('attendanceBr');
const attendanceSr = document.getElementById('attendanceSr');
const absence = document.getElementById('absence');

let currentBrs = [];
let currentSrs = [];

///////// 버튼 이벤트 관련 method /////////
for(i=0;i<jamsilBr.length;++i){
  const brother = jamsilBr[i].innerText;
  const buttonId = jamsilBr[i].id;
  jamsilBr[i].addEventListener('click', () => {
    const temp = currentBrs.indexOf(brother);
    if(temp>=0){
      document.getElementById(buttonId).style.border = '2px solid #000000'
      currentBrs.splice(temp, 1);
    } else {
      document.getElementById(buttonId).style.border = '2px solid #ff0000'
      currentBrs.push(brother);
    }
    
    attendanceBr.innerText = currentBrs.toString();
  })
}

for(i=0;i<jamsilSr.length;++i){
  const sister = jamsilSr[i].innerText;
  const buttonId = jamsilSr[i].id;
  jamsilSr[i].addEventListener('click', () => {
    const temp = currentSrs.indexOf(sister);
    if(temp>=0){
      document.getElementById(buttonId).style.border = '2px solid #000000'
      currentSrs.splice(temp, 1);
    } else {
      document.getElementById(buttonId).style.border = '2px solid #ff0000'
      currentSrs.push(sister);
    }
    
    attendanceSr.innerText = currentSrs.toString();
  })
}


