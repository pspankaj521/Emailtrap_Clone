// Landing Page script
let logo_arr = [
    {
        img_url:"https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg", 
       
    },
    {img_url:"https://mailtrap.io/wp-content/uploads/2021/04/Python.svg", 
   
    },
    {img_url:"https://mailtrap.io/wp-content/uploads/2021/04/NET.svg",
  
    },
    {img_url:"https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg",
    
    },
    {img_url:"https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg",
    
    },
   
]

let pro_div = document.querySelector(".logo")
let bestSeller =function (logo_arr,container){
    container.innerText = ""
    logo_arr.forEach(function(el){
        // console.log(el)
        
        let div = document.createElement("div")
        div.className = "four_pro_div"

        let bsimg = document.createElement("img")
        bsimg.src = el.img_url
        bsimg.style.height="25px"
        bsimg.style.width = "100%"

        let pdiv = document.createElement("div")
        pdiv.className = "pdiv"         


        let img_name_price_div = document.createElement("div")
        img_name_price_div.className = "img_name_price_div"

        img_name_price_div.append(bsimg)
        div.append(img_name_price_div,)
        // console.log(div)
        container.append(div)
    })
   
}
bestSeller(logo_arr,pro_div)
