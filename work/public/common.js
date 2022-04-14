const sendData =(path,data)=>{
    console.log(data);
    fetch(path, {
        method:'post',
        headers:newheader({'Content-type':'appLication/json'}),
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => processData(data));
}

const processData = (data) => {
    console.log(data);
}





const showFormError = (error)=>{
    let errorEle =document.querySelector('.error')
    errorEle.innerHTML = error;
    errorEle.classList.add('show')
}

