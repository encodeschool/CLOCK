const updateTime = () => {
    const now = new Date();
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let currentDay = days[now.getDay()];
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.querySelector('p').innerHTML = `
        ${currentDay} ${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}
    `
}

setInterval(updateTime, 1000);
updateTime();