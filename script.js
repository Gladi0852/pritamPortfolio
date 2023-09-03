window.onload = ()=>{
    const menu_icon = document.querySelector('.menu-bar .icon');
    const mob_menu = document.querySelector('#header .mob-menu');
    console.log(mob_menu);
    mob_menu.addEventListener('click',(e)=>{
        const tag = e.target.tagName;
        if(tag=='A'){
            mob_menu.classList.remove('clicked');
            menu_icon.classList.remove('clicked');
        }
    })
    menu_icon.addEventListener('click',()=>{
        menu_icon.classList.toggle('clicked');
        mob_menu.classList.toggle('clicked');
    });
};
// 6cd875e5-1972-4e8d-a20c-0fa3f3a8e4ba
function sendEmail(){
    Email.send({
        SecureToken: "42014e63-955d-4a96-ba67-055823a99b98",
        To : "pb72381@gmail.com",
        From : "frompritam@outlook.com",
        Subject : "New Message from Portfolio Contact",
        Body : "Name: "+document.getElementById("fname").value+" "+document.getElementById("lname").value+
                "<br>Email: "+document.getElementById("email").value+
                "<br>Email Subject: "+document.getElementById("email-sub").value+
                "<br>Message: "+document.getElementById("textarea").value
    }).then(
      message => alert("Message Sent")
    );
}

