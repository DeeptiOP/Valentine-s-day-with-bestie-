const terminal = document.getElementById("terminal");

const messages = [
"> Initializing breach protocol...",
"> Bypassing firewall...",
"> Accessing device camera...",
"> Downloading embarrassing photos...",
"> Uploading to dark web...",
"> Transferring secrets...",
"> SYSTEM OVERRIDDEN.",
"> Identity confirmed.",
"> Congratulations...",
"> YOU JUST GOT HACKED BY YOUR BESTIE 😂💀"
];

function startHack(){
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("hacker-screen").classList.remove("hidden");
    
    let i = 0;

    const interval = setInterval(() => {
        if(i < messages.length){
            terminal.innerHTML += messages[i] + "\n";
            i++;
        } else {
            clearInterval(interval);
            flashScreen();
        }
    }, 1000);
}

function flashScreen(){
    let count = 0;
    const flash = setInterval(() => {
        document.body.style.background = count % 2 === 0 ? "red" : "black";
        count++;
        if(count > 6){
            clearInterval(flash);
            alert("Relax idiot 😂❤️ It’s just me!");
        }
    }, 200);
}
