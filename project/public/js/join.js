const storage = firebase.storage();

/* 회원가입 */
$('#register').click(function(){
  const 이메일 = $('#email-new').val();
  const 패스워드 = $('#pw-new').val();
  const 이름 = $('#name-new').val();

  firebase.auth().createUserWithEmailAndPassword(이메일, 패스워드)
  .then((result)=>{
    console.log(result);
    console.log(result.user);
    result.user.updateProfile({displayName : 이름})
  })
})
