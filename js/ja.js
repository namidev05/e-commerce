/*const todos = [
    {id: 'Naim', price: 100},
    {id: 'Bryan', price: 50},
    {id: 'Kobe', price: 120},
    {id: 'Paul', price: 500},
    {id: 'Durant', price: 1000}
]
const arrayFilter = todos.filter(todo => {
    return todo.price < 1000;
});

console.log(arrayFilter);*/

const header = document.querySelector(".nav-container");
const fader1 = document.querySelectorAll(".fade-in1");
const fader2 = document.querySelectorAll(".fade-in2");
const faders = document.querySelectorAll(".fade");
const fades = document.querySelectorAll(".fades");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const appearOptions = {
    thread: 0,
    rootMargin: "0px 0px -250px 0px"
  
      
};

const appearsOnscroll = new IntersectionObserver(
    function(
        entries,
        appearsOnscroll)
        {entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add("appear");
                appearsOnscroll.unobserve(entry.target);
            }
        })

        },
appearOptions);

fader1.forEach(fader1 => {
    appearsOnscroll.observe(fader1);
});
fader2.forEach(fader2 => {
    appearsOnscroll.observe(fader2);
});

faders.forEach(faders => {
    appearsOnscroll.observe(faders);
});

fades.forEach(fades => {
    appearsOnscroll.observe(fades);
})








  
