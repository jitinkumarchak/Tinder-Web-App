let  users  = [  
    {
        profilePic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwaW5kaWFuc3xlbnwwfHwwfHx8MA%3D%3D ",
        displaypic: " https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwaW5kaWFuc3xlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage :3 ,
        location: " Bhopal , INDIA",
        Fullname: " Kashish",
        age:29,
        interests: [{
            icon: `<i class=" ri-quill-pen-fill text-white"></i>`,
            interest : "writing"
        },{
            icon: `<i class="ri-music-2-fill text-white"></i>`,
            interest : "music"
        }],
        bio: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis nam voluptates? , nostrum!",
        friends: null 
    },

    {
        profilePic: "https://images.pexels.com/photos/7208636/pexels-photo-7208636.jpeg?auto=compress&cs=tinysrgb&w=600 ",
        displaypic: "https://images.pexels.com/photos/7208636/pexels-photo-7208636.jpeg?auto=compress&cs=tinysrgb&w=600",
        pendingMessage :4 ,
        location: " Delhi , INDIA",
        Fullname: " Priya",
        age:23,
        interests: [{
            icon: `<i class="ri-quill-pen-fill text-white"></i>`,
            interest : "writing"
        },{
            icon: `<i class="ri-music-2-fill text-white"></i>`,
            interest : "music"
        }],
        bio: " l Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis nam voluptates? , nostrum!",
        friends: null 
    },


    {
        profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600 ",
        displaypic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
        pendingMessage :2 ,
        location: " Mumbai , INDIA",
        Fullname: " Rani",
        age:20,
        interests: [{
            icon: `<i class="ri-quill-pen-fill text-white"></i>`,
            interest : "writing"
        },{
            icon: `<i class="ri-music-2-fill text-white"></i>`,
            interest : "music"
        }],
        bio: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis nam voluptates? , nostrum!",
        friends: null ,
    },


{
    profilePic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    displaypic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage:7,
    location:"Chandigarh, INDIA",
    Fullname: "Ankita",
    age:20,
    interests:[{
        icon:`<i class="ri-quill-pen-fill text-white"></i>`,
        interest:"writing",
    },{
        icon:`<i class="ri-music-2-fill text-white"></i>`,
        interest:"music",
    }],
    bio: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis nam voluptates? , nostrum!",
    friends: null,
},

];


function select(elem){
   return document.querySelector(elem);
}
let  curr = 0;
let isAnimating = false ; 

function setData(index){

    select(".profileimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;

    select(".location h3 ").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].Fullname;
    select(".name h1:nth-child(2)").textContent = users[index].age;
    

    let  clutter = " ";
    users[index].interests.forEach(function(interests){
        clutter += `<div class="tag flex gap-2 items-center bg-white/30  rounded-full px-2 py-0.5">
        ${interests.icon}
        <h3 class="text-xl tracking-normal text-white font-semibold capitalize">${interests.interest}</h3>
    </div>
    </div>`
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[index].bio;

}

(function setInitial(){
    select(".maincard img").src = users[curr].displaypic;
    select(".incomingcard img").src = users[curr+1]?.displaypic; 
    
   setData(curr);

    curr = 2;  
})();

function imagechange() {
    if(!isAnimating){
        isAnimating = true;
         let tl = gsap.timeline({
        onComplete: function(){
            isAnimating = false ;
          let main =  select(".maincard");
           let incoming =  select(".incomingcard");

           incoming.classList.remove("z-[2]");
           incoming.classList.add("z-[3]");
           incoming.classList.remove("incomingcard");
        
        
        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
            scale: 1,
            opacity:1

        })

        if(curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displaypic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
    
    }

    });
 

    tl.to(".maincard",{
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: .9 
    },"a")
    tl.from(".incomingcard",{
        scale: .9,
        opacity: 0,
        ease: Circ,
        duration: 1.1
    }, "a")
    } 
}


let deny = select(".deny");
let accept = select(".accept");

    deny.addEventListener("click",function(){
        imagechange();
        setData(curr-1);
        gsap.from(".details .element", {
            y: "100%",
            stagger: 0.06,
            ease: Power4.easeInOut,
            duration:1.5
        })
    });


    accept.addEventListener("click",function(){
        imagechange();
        setData(curr-1);
        gsap.from(".details .element", {
            y: "100%",
            stagger: 0.06,
            ease: Power4.easeInOut,
            duration:1.5
        })
    });



(function containerCreater(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, `overflow-hidden`);
        div.appendChild(element);
        select(".details").appendChild(div);   
    })
})();







// https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww
