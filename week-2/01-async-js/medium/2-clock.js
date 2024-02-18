function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`);

    
    
    const formattedHours = hours % 12 || 12;

    
    if(hours >= 12)
    {
        period = 'PM'
    } 
    else{
        period='AM';
    }
    console.log(`${formattedHours}:${minutes}:${seconds} ${period}`);
}


setInterval(() => {
    updateClock();
}, 1000);
