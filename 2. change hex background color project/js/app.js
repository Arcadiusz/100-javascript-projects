(function() {
    const button = document.querySelector('#btn')
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

    button.addEventListener('click', () => {
        let finalValue = '#';
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * 16);
            let element = hexValues[index];
            finalValue =  finalValue.concat(element);
            
        }
        console.log(finalValue);
        value.textContent = finalValue;
        body.style.backgroundColor = finalValue.toString();
    })

    
} )()