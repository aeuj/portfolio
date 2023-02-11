const storage = firebase.storage();

$('#send').click(function(){

  const file = document.querySelector('#image').files[0];
  
  if(file != null){
      const storageRef = storage.ref();
      const 저장할경로 = storageRef.child('image/' + file.name);
      const 업로드작업 = 저장할경로.put(file)

      업로드작업.on('state_changed',
      // 변화시 동작하는 함수
      null,
      //에러시 동작하는 함수
      (error) => {
        console.error('실패사유는', error);
      },
      // 성공시 동작하는 함수
      () => {
        업로드작업.snapshot.ref.getDownloadURL().then((url) => {
          console.log('업로드된 경로는', url);
          const today = new Date();
          const newtoday = today.toLocaleString()

          const 저장할거 = { 
            제목 : $('#title').val(),
            가격 : Number($('#price').val()),
            내용 : $('#content').val(),
            날짜: newtoday,
            이미지 : url,
            uid : JSON.parse(localStorage.getItem('user')).uid,
            이름 : JSON.parse(localStorage.getItem('user')).displayName,
          }
          db.collection('product').add(저장할거).then((result)=>{
            window.location.href = './index.html'
          }).catch((error)=>{
            console.log(error);
          })
        });
        }
        );
  }else{
    const today = new Date();
    const newtoday = today.toLocaleString()

    var 저장할거 = {
      제목: $("#title").val(),
      가격: Number($('#price').val()),
      내용: $("#content").val(),
      날짜: newtoday,
      uid: JSON.parse(localStorage.getItem("user")).uid,
      이름: JSON.parse(localStorage.getItem("user")).displayName,
    }

    db.collection("product").add(저장할거).then((result) => {
      window.location.href = './index.html'
      console.log(result);
    }).catch((err) => {
      console.log(err)
    })
  }
});

/* 시간순서대로 오름차순정렬로 자동으로 되게 하기 */
/* 이미지 안보임 */