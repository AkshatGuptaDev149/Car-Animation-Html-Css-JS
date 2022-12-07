// declaring DOM and other variables
let container=document.getElementById('AnimContainer')
let carBody=document.getElementById('body')
let carLogo=document.getElementById('logo')
let FrontWheel=document.getElementById('FrontWheel')
let RearWheel=document.getElementById('RearWheel')
let car=document.getElementById('carSvg')
let startBtn=document.getElementById('startORstop')
let sound=new Audio('sound/accelerate.mp3')



//Handling start and stop btn
startBtn.addEventListener('click',()=>{
    let EngSound=new Audio('sound/engine.mp3')
    if(startBtn.textContent=='Start'){        
        EngSound.play()
        setTimeout(()=>{EngSound.pause()},2000)
        setTimeout(()=>{sound.play()},1500)
        setTimeout(()=>{sound.pause()},14000)
        setTimeout(()=>{
            FrontWheel.style.removeProperty('animation')
            RearWheel.style.removeProperty('animation')}
            ,19000)
        startBtn.style.transform='translate(-14vh,-45vh)'
        startBtn.style.backgroundColor= 'red'
        startBtn.style.color=' white'
        startBtn.textContent='Stop'
        container.style='animation:motionForward  ease 22s  1s  both'
        carBody.style='animation:shake linear 0.23s 1s   alternate both'
        carLogo.style='animation:shake linear 0.23s 1s   alternate both'
        car.style='animation:motionCar 22s ease 1s  both'
        FrontWheel.style='animation:rotation linear 1s 1s infinite both'
        RearWheel.style='animation:rotation linear 1s 1s  infinite both'
    }
    else{
        startBtn.style.transform='translateY(50%)'
        startBtn.style.transform='translateX(-4vw)'
        startBtn.style.backgroundColor= 'white'
        startBtn.style.color=' red'
        startBtn.textContent='Start'
        container.style.removeProperty('animation')
        carBody.style.removeProperty('animation')
        carLogo.style.removeProperty('animation')
        car.style.removeProperty('animation')
        FrontWheel.style.removeProperty('animation')
        RearWheel.style.removeProperty('animation')
        sound.pause()
        
    }
})