const jamsilBr = document.getElementById('jamsilBr');
const jamsilSr = document.getElementById('jamsilSr');
const attendance = document.getElementById('attendance');
const absence = document.getElementById('absence');

///////// 버튼 이벤트 관련 method /////////
for(i=0;i<jamsilBr.length;++i){
    jamsilBr[i].addEventListener('click', () => {
		console.log(jamsilBr[i].value)
    })
}