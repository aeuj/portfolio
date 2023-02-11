const storage = firebase.storage();
// 원래 var 인데 내가 const 라고 쓴거임
const 쿼리스트링 = new URLSearchParams(window.location.search);
쿼리스트링.get('id');

db.collection('product').doc(쿼리스트링.get('id')).get().then((result)=>{
  console.log(result.data())
  $('#title').val(result.data().제목);
  $('#content').val(result.data().내용);
  $('#price').val(result.data().가격);
})

$('#send').click(function(){
  var 바꿀거 = {
    제목 : $('#title').val(),
    내용 : $('#content').val(),
    가격 : $('#price').val(),
  }
  db.collection('product').doc(쿼리스트링.get('id')).update(바꿀거)
})
