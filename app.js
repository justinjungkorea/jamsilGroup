const leaders = document.getElementsByClassName('leader');
const jamsilBr = document.getElementsByClassName('jamsilBr');
const jamsilSr = document.getElementsByClassName('jamsilSr');
const attendanceLeader = document.getElementById('attendanceLeader');
const attendanceBr = document.getElementById('attendanceBr');
const attendanceSr = document.getElementById('attendanceSr');
const absence = document.getElementById('absence');

let currentBrs = [];
let currentSrs = [];
let currentLeaders = [];

///////// 버튼 이벤트 관련 method /////////
for(var i=0; i<leaders.length; ++i){
  const leader = leaders[i].innerText;
  const buttonId = leaders[i].id;

  leaders[i].addEventListener('click', () => {
    const temp = currentLeaders.indexOf(leader);
    if(temp>=0){
      document.getElementById(buttonId).style.border = '2px solid #000000'
      currentLeaders.splice(temp, 1);
    } else {
      document.getElementById(buttonId).style.border = '2px solid #ff0000'
      currentLeaders.push(leader);
    }
    
    attendanceLeader.innerText = currentLeaders.toString();
  })
}

for(var i=0; i<jamsilBr.length; ++i){
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

for(var i=0; i<jamsilSr.length; ++i){
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


