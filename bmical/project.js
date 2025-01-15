 const form = document.querySelector('form')

 form.addEventListener('submit' , function(e){
    e.preventDefault() // this is used to prevent all default action
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }

    else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML =`<span>${bmi}</span>`;
    }

})

/*if(result < 18.6){
    result.innerHTML = `<span>Under weight = Less than 18.6</span>`
}
else if(result >18.6 || result < 24.9){
    result.innerHTML = `<span>Normal Range = </span>`
}*/

