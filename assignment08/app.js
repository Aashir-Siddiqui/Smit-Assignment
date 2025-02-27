function changeContent(action, value) {
    var screen = document.querySelector('.screen');
    var img = document.querySelector('#img');

    if (action === 'color') {
        screen.style.backgroundColor = value;
        img.style.display = 'none';
        screen.innerHTML = '';
    } else if (action === 'image') {
        if (value === 'audi') {
            img.src = 'https://nar.media.audi.com/is/image/audinar/country/us/en/assets/MY23---Q3---Side-Profile---Driving-1920x1920.jpg';
        } else if (value === 'cartoon') {
            img.src = 'https://img.freepik.com/premium-vector/8000-110_138676-7697.jpg?semt=ais_hybrid';
        } else if (value === 'flower') {
            img.src = 'https://cms.interiorcompany.com/wp-content/uploads/2024/01/aster-attractive-flower-images.jpg';
        }
    } else if (action === 'video') {
        img.style.display = 'none';
        screen.innerHTML = `
           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HI2wRPQb34E?si=9IvfYydhAdQSWPwi"></iframe>
        `;
    } else if (action === 'map') {
        img.style.display = 'none';
        screen.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                frameborder="0" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.1417021892!2d66.49601564592707!3d25.19174065536782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1735425666796!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `;
    } else if (action === 'website') {
        img.style.display = 'none';
        screen.innerHTML = `
            <iframe 
                width="100%" 
                height="100%"
                src="https://amazon-aashir.netlify.app/">
            </iframe>
        `;
    }
}