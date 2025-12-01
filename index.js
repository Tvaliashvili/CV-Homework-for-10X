document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('runawayLink');
    const container = link.parentElement;
    const chaseDistance = 100;

    function getDistance(x1, y1, x2, y2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    container.addEventListener('mousemove', (event) => {
        const linkRect = link.getBoundingClientRect();
        const linkCenterX = linkRect.left + linkRect.width / 2;
        const linkCenterY = linkRect.top + linkRect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distance = getDistance(mouseX, mouseY, linkCenterX, linkCenterY);

        if (distance < chaseDistance) {
            let newX = linkCenterX + (linkCenterX - mouseX) / distance * 10;
            let newY = linkCenterY + (linkCenterY - mouseY) / distance * 10;
            
            const containerRect = container.getBoundingClientRect();
            newX = Math.max(containerRect.left, Math.min(newX, containerRect.right - linkRect.width));
            newY = Math.max(containerRect.top, Math.min(newY, containerRect.bottom - linkRect.height));
            
            link.style.left = `${newX}px`;
            link.style.top = `${newY}px`;
        }
    });

    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        alert('იდეალურად იკლიკება ✨');

        link.textContent = '🥳 მაინც დამიჭირე!!!';
        
        link.classList.remove('bg-red-600', 'hover:bg-red-700', 'text-white');
        
        link.classList.add('bg-green-600', 'text-blue-200');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('runawayLink2');
    const container = link.parentElement;
    const chaseDistance = 100;

    function getDistance(x1, y1, x2, y2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    container.addEventListener('mousemove', (event) => {
        const linkRect = link.getBoundingClientRect();
        const linkCenterX = linkRect.left + linkRect.width / 2;
        const linkCenterY = linkRect.top + linkRect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distance = getDistance(mouseX, mouseY, linkCenterX, linkCenterY);

        if (distance < chaseDistance) {
            let newX = linkCenterX + (linkCenterX - mouseX) / distance * 10;
            let newY = linkCenterY + (linkCenterY - mouseY) / distance * 10;
            
            const containerRect = container.getBoundingClientRect();
            newX = Math.max(containerRect.left, Math.min(newX, containerRect.right - linkRect.width));
            newY = Math.max(containerRect.top, Math.min(newY, containerRect.bottom - linkRect.height));
            
            link.style.left = `${newX}px`;
            link.style.top = `${newY}px`;
        }
    });

    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        alert('ამდენი ხანი რას აკლიკავდი? 🤭');

        link.textContent = '🥳 გილოცავ მაინც დამეწიე!';
        
        link.classList.remove('bg-red-600', 'hover:bg-red-700', 'text-white');
        
        link.classList.add('bg-green-600', 'text-blue-200');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('runawayLink3');
    const container = link.parentElement;
    const chaseDistance = 100;

    function getDistance(x1, y1, x2, y2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    container.addEventListener('mousemove', (event) => {
        const linkRect = link.getBoundingClientRect();
        const linkCenterX = linkRect.left + linkRect.width / 2;
        const linkCenterY = linkRect.top + linkRect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distance = getDistance(mouseX, mouseY, linkCenterX, linkCenterY);

        if (distance < chaseDistance) {
            let newX = linkCenterX + (linkCenterX - mouseX) / distance * 10;
            let newY = linkCenterY + (linkCenterY - mouseY) / distance * 10;
            
            const containerRect = container.getBoundingClientRect();
            newX = Math.max(containerRect.left, Math.min(newX, containerRect.right - linkRect.width));
            newY = Math.max(containerRect.top, Math.min(newY, containerRect.bottom - linkRect.height));
            
            link.style.left = `${newX}px`;
            link.style.top = `${newY}px`;
        }
    });

    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        alert('ეს ლინკიც ნამდვილად მუშაობს 🥰!');

        link.textContent = '🥳 გილოცავ, აქაც მომაგენი!';
        
        link.classList.remove('bg-red-600', 'hover:bg-red-700', 'text-white');
        
        link.classList.add('bg-green-600', 'text-blue-200');
    });
});