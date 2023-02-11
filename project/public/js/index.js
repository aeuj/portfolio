

const db = firebase.firestore();
      db.collection('product').get().then((결과)=>{
        결과.forEach((doc)=>{
          console.log(doc.data());
          const 템플릿 = `    
          <div class="product">
            <div class="thumbnail" style="background-image: url('${doc.data().이미지}')"></div>
            <div class="flex-grow-1 p-4">
              <h5 class="title"><a href="./detail.html?id=${doc.id}">${doc.data().제목}</a></h5>
              <p class="date">${doc.data().날짜}</p>
              <p class="price">${doc.data().가격}원</p>
              <p class="float-end">❤️0</p>
            </div>
          </div>
          <hr class="index-line"/>`
          $('.container').append(템플릿)
        })
      })
      // .날짜.toDate()