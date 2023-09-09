 const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        
  const today = new Date();
        
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
        
  const utcTime = today.getTime()
        
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${dayOfWeek}`;
        
        
 function updateUTCTime() {
    const today = new Date();
    const utcTimeMilliseconds = today.getTime(); // Get current UTC time in milliseconds
      
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (Milliseconds): ${utcTimeMilliseconds} ms`;
  }
  setInterval(updateUTCTime, 1);
