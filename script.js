const timezones = {
    nyc: 'America/New_York',
    london: 'Europe/London',
    paris: 'Europe/Paris',
    dubai: 'Asia/Dubai',
    india: 'Asia/Kolkata',
    bangkok: 'Asia/Bangkok',
    tokyo: 'Asia/Tokyo',
    sydney: 'Australia/Sydney',
    la: 'America/Los_Angeles',
    toronto: 'America/Toronto',
    'sao-paulo': 'America/Sao_Paulo',
    singapore: 'Asia/Singapore'
};

function updateClocks() {
    const now = new Date();

    for (const [id, timezone] of Object.entries(timezones)) {
        const element = document.getElementById(id);
        
        // Get time in the specific timezone
        const options = {
            timeZone: timezone,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
        element.textContent = timeString;
    }
}

// Update clocks immediately and then every second
updateClocks();
setInterval(updateClocks, 1000);

// Optional: Add active pulse effect
document.querySelectorAll('.clock-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
