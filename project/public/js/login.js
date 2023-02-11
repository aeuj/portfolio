  const storage = firebase.storage();

  // 유저 정보 확인
  const 뺀거 = localStorage.getItem('user')
    if(localStorage.getItem('user') != null){
      $('#userName').html(JSON.parse(뺀거).displayName) 
    }
  
  /* 로그인 확인 */
  /* 유저 정보가 없으면 업로드버튼을 숨기기 만들자 */
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      console.log(user.uid);
      console.log(user.email);
      // 이름이 너무 늦게 떠서 로컬스토리지에 저장
      // localStorage.setItem('정보이름', '값')
      localStorage.setItem('user', JSON.stringify(user))
    }
  })

  /* 로그인 */
    $('#login').click(function(){
      const 이메일 = $('#email').val();
      const 패스워드 = $('#pw').val();

      firebase.auth().signInWithEmailAndPassword(이메일, 패스워드)
      .then((result)=>{
        console.log(result.user);
        window.location.href = './index.html';
      })
    })

  /* 로그아웃 */
  $('#logout').click(function(){
    firebase.auth().signOut()
    localStorage.removeItem('user')
  })