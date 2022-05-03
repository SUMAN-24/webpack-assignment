let getData = async(url) => {
    let res = await fetch(url);
    let data = await res.json();

    return data;
}

let append = (data,container) => {
    data.forEach(({title})=>{      //destructuring // instead of el
        let p = document.createElement("p");
        p.innerText = title;      //instead of el.title

        container.append(p);
    })
}

export {getData, append}