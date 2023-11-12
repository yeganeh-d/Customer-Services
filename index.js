//header date
let today = new Date().toLocaleDateString('fa-IR');
document.getElementById("todayDate").innerHTML = today;  


//navbar
document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show')
                    // change icon
                toggle.classList.toggle('bx-x')
                    // add padding to body
                bodypd.classList.toggle('body-pd')
                    // add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))
});

//levelUser
// function changeLevelColor(){
//     var levelNum = $("#levelUserNumber").val();

//     if (levelNum>= 100) {
//         document.getElementById("levelColor").style.color = "#e8c515";      
//     }
//       else
//         if (levelNum== 100) {
//             document.getElementById("levelColor").style.color = "#a39a96";
//         }
//       else
//         if (levelNum< 100) {
//            document.getElementById("levelColor").style.color = "#ad4b1a";
//         }
// }
const userlevelView = document.querySelector('#userLevel');
   let userLevelShow = function(){
    userlevelView.style.display = 'block';
   }
   function hideBox(){
    $(".modal-content").hide();
   }


///wallet
   const myModal = document.querySelector('#wallet');
   let show = function(){
    myModal.style.display = 'block';
   }
   function hideBox(){
    $(".modal-content").hide();
   }

  function gatewayPath(){ 
    var chargeInput = $("#input-charge").val();

    if(chargeInput != ''){
       window.open('https://www.google.com/');
     }else{
        swal({
          title: " لطفا مبلغ را وارد نمایید ",
          icon: "error",
          button:"باشه"
        });
      }
    }
  //transaction
  const modalTransaction = document.querySelector('#modalTrans');
  const closeWindow = document.querySelector('.btn-close');
  
   let transactionShow = function(){
    modalTransaction.style.display = 'block';
   }
   function hideBox(){
    $(".modal-content").hide();
   }

   //show all rows
   function addRow(){
    var tableRow = document.getElementById("table");
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
   
    
    cell1.innerHTML = "1402/3/10";
    cell2.innerHTML = "جوجه کباب";
    cell3.innerHTML = "150 تومان";
    cell4.innerHTML = "پرداخت شد";
    cell5.innerHTML = "ارسال شد";
    cell5.style.color = "green";

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    
    tableRow.appendChild(row)
   }


 //user-info
 const userInfo = document.querySelector('#user');
   let showUser = function(){
    userInfo.style.display = 'block';
   }

   //edit user
   const editUserForm = document.querySelector('#editUser');
   let editUserInfo = function(){
    editUserForm.style.display = 'block';
   }
   //add address
   const AddAdress = document.querySelector('#addAdressModal');
   let addAdressModal = function(){
    AddAdress.style.display = 'block';
   }
   //submit address
   function submitAdress(){ 
    var locationBox = $("#location").val();

    if(locationBox != ''){
        swal({
                title: "آدرس شما با موفقیت ثبت گردید",
                icon: "success",
                button:"باشه"
            });
     }else {
        swal({
          title: " لطفا آدرس را وارد نمایید ",
          icon: "error",
          button:"باشه"
        });
      }
    }
    function hideBox2(){
        $("#address-content").hide();
    }
    //add phone
   const AddPhone = document.querySelector('#addPhoneModal');
   let addPhoneModal = function(){
    AddPhone.style.display = 'block';
   }
   function submitPhone(){ 
    var phoneInput = $("#phone").val();

    if(phoneInput != ''){
        swal({
                title: "شماره شما با موفقیت ثبت گردید",
                icon: "success",
                button:"باشه"
            });
     }else {
        swal({
          title: " لطفا شماره تلفن را وارد نمایید ",
          icon: "error",
          button:"باشه"
        });
      }
    }
    function hideBox3(){
        $("#phone-content").hide();
    }