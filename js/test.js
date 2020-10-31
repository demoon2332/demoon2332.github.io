$ = jQuery.noConflict();
var count = 0
function getWish(count){
if(count == 1)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Chúc thầy cô luôn giữ gìn sức khỏe và tinh thần tươi vui mỗi ngày.</span> '
if(count == 2)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Chúng em chúc thầy cô có những ngày đến trường đều là những ngày tràn đầy năng lượng và thật ý nghĩa dẫu cho nó là ngày thứ 2 đầy căng thẳng hay cuối tuần thật mỏi mệt.</span>'
if(count == 3)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Dù học online với nhiều khó khăn,cản trở hay những tiết học trên trường đôi lúc tẻ nhạt,chúng em cám ơn vì sự nhiệt tình , tận tâm của thầy cô bấy lâu nay.</span>  ' 
if(count == 4)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Mong sự nghiệp giảng dạy ngày càng thành công và có thêm nhiều kỉ niệm vui buồn cùng với mái trường , đồng nghiệp và cùng các em học sinh,sinh viên.</span>'
if(count == 5)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Chúc thầy cô ngày càng có thêm nhiều kinh nghiệm cũng như kiến thức mới lạ đề truyền đạt , giảng dạy cho các thế hệ sinh viên sau.</span>'
if(count == 6)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Mong rằng tóc thầy , cô đừng vội bạc đi theo năm tháng để dạy chúng em được nhiều điều hay lẽ phải hơn.</span> '
if(count ==7)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Gửi các thầy cô kính yêu , thầy cô luôn là người lái đò cần mẫn dìu dắt chúng em mỗi ngày và người truyền lửa cho các sinh viên trẻ như chúng em sau này có hành trang thật tốt để bước đời <3.</span>'
}
function begin_catch(){
///////////////////
$(document).ready(function() {
  Swal.fire({
    title: '<span style="color:#333333 ; font-family: Pacifico ; font-size:50px "> ~ Catch Wish Stars ~ <span><img src="./img/rule1.png" width= 500px height= 500px></img> \n<img src="./img/rule2.png" width= 500px height= 300px></img> ',
    text : '',
    imageUrl: './img/star.png',
    imageWidth: '100px',
    showCancelButton :true,
    showDenyButton: true,
    confirmButtonText : '<span style="color:#333333 ;font-family: Sofia ;font-size:35px ; ">Bắt đầu</span>',
    confirmButtonColor: '#FF3333',
    cancelButtonText : '<span style="color:#333333 ;font-family: Sofia ;font-size:35px ;  ">Quay lại</span>',
    denyButtonText :  '<span style="color:#333333 ;font-family: Sofia ;font-size:35px" ;  >Tự động</span>',
    background: '#FF9966',
    backdrop: `
    rgba(0,0,123,0.4)
    url("./img/rainbow_cat.gif")
    left top
    no-repeat
    `
  }).then((result) => {
    if(result.isDenied)  {
      //Swal.fire('Saved!', '', 'success')
      Swal.fire({
        title: '<span style="color:#333333 ; font-family: Pacifico ; font-size:50px ">Stars are automatically catched !',
        timer: '1500',
      });
      setTimeout(auto,1200);
    }
  });

  // if --> wish 
  // if --> wish
  // arr to make sure that alert wont show when star was clicked
  var arr = [false,false,false,false,false,false,false]
/////////////////////
$('.correct li:nth-child(1)').click(function(){
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    if(arr[0]==false)
    {
      count ++;
      $('.correct li:nth-child(1)').removeClass(".star li:hover");
      $('.correct li:nth-child(1)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text : "stars :"+count + "/ " + 7,
        timer: '8500',
        background: 'url(img/background2.jpg)',
      })
      arr[0]=true;
    }
});
$('.correct li:nth-child(2)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[1]==false)
    {
      count ++;
      $('.correct li:nth-child(2)').removeClass(".star li:hover");
      $('.correct li:nth-child(2)').addClass("active");
      if(parseInt(count) == 5)
      {
        str = 'You almost fininished, only 2 stars left';
      };
      Swal.fire({
        title: ""+getWish(count),
        text : "stars :"+count + "/ " + 7,
        timer : '8000',
        background:'url(img/dreamcatcher.jpg)'
      })
      arr[1]=true;
    }
});
$('.correct li:nth-child(3)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[2]==false)
    {
      count ++;
      $('.correct li:nth-child(3)').removeClass(".star li:hover");
      $('.correct li:nth-child(3)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text :"stars :"+ count + "/ " + 7,
        timer : '9000',
        background: 'url(img/s2.jpg)'
      })
      arr[2]=true;
    }
});
$('.correct li:nth-child(4)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[3]==false)
    {
      count ++;
      $('.correct li:nth-child(4)').removeClass(".star li:hover");
      $('.correct li:nth-child(4)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text : "stars :"+count + "/ " + 7,
        timer : '9000',
      })
      arr[3]=true;
    }
});
$('.correct li:nth-child(5)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[4]==false)
  {
    count ++;
    $('.correct li:nth-child(5)').removeClass(".star li:hover");
    $('.correct li:nth-child(5)').addClass("active");
    Swal.fire({
      title: ""+getWish(count),
      text : "stars :"+count + "/ " + 7,
      timer : '9000',
    })
    arr[4]=true;
  }
});
$('.correct li:nth-child(6)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[5]==false)
  {
    count ++;
    $('.correct li:nth-child(6)').removeClass(".star li:hover");
    $('.correct li:nth-child(6)').addClass("active");
    Swal.fire({
      title: ""+getWish(count),
      text : "stars :"+count + "/ " + 7,
      timer : '9000',
    })
    arr[5]=true;
  }
});
$('.correct li:nth-child(7)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[6]==false)
    {
      count ++;
      $('.correct li:nth-child(7)').removeClass(".star li:hover");
      $('.correct li:nth-child(7)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text : "stars :"+count + "/ " + 7,
        timer : '9000',
      })
      arr[6]=true;
    }
})
/////////////////////

$('.incorrect li:nth-child(1)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(2)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(3)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(4)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(5)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(6)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(7)').click(function(){
  incorrect_star();
})
});

 ////////////////// 
}


function hello(){
  Swal.fire({
  title: 'Gửi đến thầy cô kính mến ! ',
  text: "Nhân ngày nhà giáo Việt Nam, chúc tất cả các thầy cô giáo sức khỏe, hạnh phúc và thành công. Đặc biệt chúc thầy cô đang đọc tin nhắn này ngày nhà giáo thật vui, thật thành công, mọi lời chúc tốt đẹp nhất. Và kính chúc các thầy cô vì đã và đang cố gắng hết mình cho thế hệ trẻ hôm nay.",
  showCancelButton: true,
  showCancelButton : true,
  showDenyButton : true,
  confirmButtonText :"Tiếp tục",
  denyButtonText : "Lùi lại",
  cancelButtonText : "Hủy",
  background: '#66FFCC',
}).then(function(){
  $('.content').show(200);
})
}
function mess()
{
    Swal.fire({
        title: 'Gửi đến thầy cô kính mến ! ',
        text: "Nhân ngày nhà giáo Việt Nam, chúc tất cả các thầy cô giáo sức khỏe, hạnh phúc và thành công. Đặc biệt chúc thầy cô đang đọc tin nhắn này ngày nhà giáo thật vui, thật thành công, mọi lời chúc tốt đẹp nhất. Và kính chúc các thầy cô vì đã và đang cố gắng hết mình cho thế hệ trẻ hôm nay.",
        size: '10px',
        showCancelButton: true,
        showCancelButton : true,
        showDenyButton : true,
        confirmButtonText :"Tiếp tục",
        denyButtonText : "Lùi lại",
        cancelButtonText : "Hủy",
        background: '#66FFCC',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */ 
         if (result.isConfirmed) {
          Swal.fire({
            title: 'Lời nhắn nhủ của thầy cô gửi đến các bạn : ',
            input: 'text',
            inputAttribute :{
              size: '32px',
            },
            width: 600,
            padding: '3em',
            background: '#FF9999',
            backdrop: `
              rgba(43, 165, 137, 0.45)
              url("img/rainbow_cat.gif")
              bottom left
              no-repeat
            `
          })     
        }
        if(result.isDenied)  {
          //Swal.fire('Saved!', '', 'success')
          Swal.fire({
            title: {
              tab1: {
                label: 'Tab 1'
              },
          
              tab2: {
                label: 'Tab 2'
              }
            },
          })
          //window.location.href = 'https://youtu.be/PwuJp0nFb0M?t=87';
        }
      });
}
function correct_star(){
  if(arr[parseInt(count)]==false)
    {
      count ++;
      $('.correct li:nth-child(1)').removeClass(".star li:hover");
      $('.correct li:nth-child(1)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text : count + "/ " + 7,
        timer: '8000',
        position : 'top-end',
      })
      arr[parseInt(count)]=true;
    }
}
function incorrect_star(){
  var audio = new Audio('sound/duck.mp3');
  audio.play();
  Swal.fire({
    title:'Sai rồi không phải cái này :<',
    icon: 'error',
    timer: '1400'
  });
}
function auto()
{
  var s = 4000;
  setTimeout(function(){
    $('.correct li:nth-child(1)').click();
}, 1000);
setTimeout(function(){
  $('.correct li:nth-child(2)').click();
}, s*2);
setTimeout(function(){
  $('.correct li:nth-child(3)').click();
}, s*3);
setTimeout(function(){
  $('.correct li:nth-child(4)').click();
}, s*4);
setTimeout(function(){
  $('.correct li:nth-child(5)').click();
}, s*5);
setTimeout(function(){
  $('.correct li:nth-child(6)').click();
}, s*6);
setTimeout(function(){
  $('.correct li:nth-child(7)').click();
}, s*7);


}
function goodbye(){
  Swal.fire({
    customClass: {
      popup: 'border-radius-10'
    },
    title:'<span style="color:#333333 ; font-family: Pacifico ; font-size:50px "> Cám ơn thầy cô đã ghé thăm ! <span> \nXin gửi đến các thầy , cô 1 bài hát.... ',
    timer: '4200',
    imageUrl: './img/goodbye.jpg',
    background: '#66FF33',
    confirmButtonText: '<3',
    confirmButtonColor: '#FF3333',
    width: '70rem',
    imageWidth: '600px',
    imageHeight: '370px',
  });
  setTimeout(function(){
    window.location.href = 'https://youtu.be/PwuJp0nFb0M?t=87';
  },7500);
 
}