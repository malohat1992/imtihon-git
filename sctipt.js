let user=document.querySelector('.user');
let color=document.querySelector('.color');
let body=document.body;
let nav=document.querySelector('.nav');
let definder=document.querySelector('.definder')
let container=document.querySelector('.container');
let moon=document.querySelector('.moon')
let h3bir=document.querySelector('.h3bir');
let pbir=document.querySelector('.pbir')
let pikki=document.querySelector('.pikki');
let repos=document.querySelector('.repos-wrapper')
let main=document.querySelector('.main')
let puch=document.querySelector('.puch');
let h3ikki=document.querySelector('.h3ikki');
let ptort=document.querySelector('.ptort');
let h3uch=document.querySelector('.h3uch');
let pbesh=document.querySelector('.pbesh');
let h3tort=document.querySelector('.h3tort');
let joyi=document.querySelector('.joyi');
let polti=document.querySelector('.polti');
let blogi=document.querySelector('.blogi');
let pyetti=document.querySelector('.pyetti');
let twti=document.querySelector('.twti');
let psakkiz=document.querySelector('.psakkiz');
let giti=document.querySelector('.giti');
let ptoqqiz=document.querySelector('.ptoqqiz');
let logn=document.querySelector('.logn');
let userInput=document.querySelector('.user-input');





function sun(){
    if(moon.classList.contains('fa-moon')){
    moon.classList.remove('fa-moon');
    moon.classList.add('fa-sun');
    moon.style.color='#F6F8FF';
    color.textContent='LIGHT';
    body.style.backgroundColor='#141D2F';
    nav.classList.remove('nav')
    user.classList.remove('user-input')
    nav.classList.add('nav1');
    user.classList.remove('user')
    user.classList.add('user1');
    definder.classList.remove('definder');
    definder.classList.add('definder1')
    color.classList.remove('color');
    color.classList.add('color1');
    h3bir.classList.add('h3color');
    pbir.classList.add('h3color');
    pikki.classList.add('h3color');
    repos.classList.remove('repos-wrapper');
    repos.classList.add('repos-wrapper1');
    main.classList.remove('main');
    main.classList.add('main1');
    h3ikki.classList.add('h3color');
    puch.classList.add('h3color');
    h3uch.classList.add('h3color');
    ptort.classList.add('h3color');
    h3tort.classList.add('h3color');
    pbesh.classList.add('h3color');
    joyi.classList.add('h3color');
    polti.classList.add('h3color');
    blogi.classList.add('h3color');
    pyetti.classList.add('h3color');
    twti.classList.add('h3color');
    psakkiz.classList.add('h3color');
    giti.classList.add('h3color');
    ptoqqiz.classList.add('h3color');
}else {
    moon.classList.remove('fa-sun');
    moon.classList.add('fa-moon');
    moon.style.color='#141D2F';
    color.textContent='DARK';
    body.style.backgroundColor=' #F6F8FF';
    nav.classList.remove('nav1')
    nav.classList.add('nav');
    user.classList.remove('user1')
    user.classList.add('user');
    definder.classList.remove('definder1');
    definder.classList.add('definder')
    color.classList.remove('color1');
    color.classList.add('color');
    repos.classList.remove('repos-wrapper1');
    repos.classList.add('repos-wrapper');
    main.classList.remove('main1');
    main.classList.add('main');
    h3bir.classList.remove('h3color');
    pbir.classList.remove('h3color');
    pikki.classList.remove('h3color');
    h3ikki.classList.remove('h3color');
    puch.classList.remove('h3color');
    h3ikki.classList.remove('h3color');
    puch.classList.remove('h3color');
    h3uch.classList.remove('h3color');
    ptort.classList.remove('h3color');
    joyi.classList.remove('h3color');
    polti.classList.remove('h3color');
    blogi.classList.remove('h3color');
    pyetti.classList.remove('h3color');
    twti.classList.remove('h3color');
    psakkiz.classList.remove('h3color');
    giti.classList.remove('h3color');
    ptoqqiz.classList.remove('h3color');
    h3tort.classList.remove('h3color');
    pbesh.classList.remove('h3color');
    };
};

 moon.addEventListener('click', sun);

color.addEventListener('click', sun);



localStorage.setItem('quyosh', sun);


let gitLinki='https://api.github.com/users/'

let input=document.querySelector('input');
let btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki + newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.name===null){
        pbir.innerHTML='Has no name';
    }else{
        h3bir.textContent=data.name;
     }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki + newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.login===null){
        pbir.innerHTML='Has no login';
    }else{
        logn.textContent=data.login;
     }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.bio===null){
        pbir.innerHTML='Has no bio';
    }else{
        pbir.textContent=data.bio;
    }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
    .then((res)=>res.json())
    .then((data)=>{
        if (data.created_at===null){
            pbir.innerHTML='Has no created_at';
        }else{
            pikki.textContent=data.created_at;
        }
    });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.public_repos===null){
        pbir.innerHTML='Has no public_repos';
    }else{
        h3ikki.textContent=data.public_repos;
    }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.followers===null){
        pbir.innerHTML='Has no followers';
    }else{
        h3uch.textContent=data.followers;
    }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.following===null){
        pbir.innerHTML='Has no following';
    }else{
        h3tort.textContent=data.following;
    }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.location===null){
        pbir.innerHTML='Has no location';
    }else{
        polti.textContent=data.location;
    }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.blog===null){
        pbir.innerHTML='Has no blog';
    }else{
        pyetti.textContent=data.blog;
    }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.twitter_username===null){
        pbir.innerHTML='Has no twitter_username';
    }else{
        psakkiz.textContent= data.twitter_username;
    }
   });
});
btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    if (data.company===null){
        pbir.innerHTML='Has no company';
    }else{
        ptoqqiz.textContent= data.company;
    }
   });
});
let rasm=document.querySelector('.rasm');

btn.addEventListener('click',()=>{
    let newuser = input.value;
    fetch(gitLinki+newuser)
   .then((res)=>res.json())
   .then((data)=>{
    rasm.setAttribute('src',`${data.avatar_url}`)
   });
});












