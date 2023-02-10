  /* 로그인 확인 */
  /* 유저 정보가 없으면 업로드버튼을 숨기기 만들자 */
  /* js파일로 모든파일 연결 */
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      console.log(user.uid);
      console.log(user.displayName);
      $('#userName').html(user.displayName)
    }
  })


      /* 로그인이 안되어 있으면 로그인 버튼으로 보이기 = 성공*/
    /* 참고 : https://friedegg556.tistory.com/29 */
    /* 로그인페이지로 이동, 로그아웃페이지로 이동 = 성공*/
    /* 참고 : https://shanepark.tistory.com/206 */
    const saveUserName = localStorage.getItem('user');
    if(saveUserName == null){
      /* 로그인이 안되어 있으면 글쓰기 메뉴가 보이지 않게 = 성공 */
      /* 참고 : https://blogpack.tistory.com/683 */
      document.querySelector('.write').remove('.write');
      document.querySelector('.loginCanWatch').remove('.loginCanWatch');
      document.querySelector('.loginCanWatch').remove('.loginCanWatch');

      document.querySelector('.logout').innerHTML = '로그인';
      document.querySelector('.logout').addEventListener('click', function(){
        window.location.href = './login.html';
      })
    }else{
      document.querySelector('.logout').innerHTML = '로그아웃';
      document.querySelector('.logout').addEventListener('click', function(){
        window.location.href = './logout.html';
      })
    }


    /* 로그아웃 */
    $('.logout').click(function(){
    firebase.auth().signOut()
    localStorage.removeItem('user')
  })