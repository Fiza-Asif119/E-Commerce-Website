var beautyProducts = {
    skincare: {
        vaseline: {
            "Lip Balm": {
                name: "Vaseline® Lip Therapy® Original Stick",
                src: "https://assets.unileversolutions.com/v1/1903495.png",
                price: 100,
                size: 16,
                description: "Made with Vaseline® Jelly, it provides essential moisturization to the lips, locking in moisture, and making your lips look healthier and feel softer."
            },
            lotion: {
                name: "Vaseline® Calm Healing Lotion",
                src: "https://assets.unileversolutions.com/v1/143720370.png?im=Resize,width=538,height=538",
                price: 3000,
                size: 20.3,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            }
        },
        "The Derma Lab": {
            "Facial Cream": {
                name: "Spreme Facial Cream",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrMexPjcsKBUWq0eZssJyQkm06RlTnLSI9A&s",
                price: 1500,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            },
            Serum: {
                name: "Derma Lab Serum",
                src: "https://www.dermalab.com.sg/wp-content/uploads/2024/07/2-BHA-Exfoliating-Liquid_810x855.jpg",
                price: 1500,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            }
        },
        "Earth's Essence": {
            "Body Butter": {
                name: "Body Butter",
                src: "https://earths-essence.com.au/cdn/shop/files/Earths-Essence-Body-Butter_bfe0afa9-0aed-495c-8c57-a7be725efb9f.jpg?v=1724986253&width=500",
                price: 1500,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            },
            "Face and Body Cleanser": {
                name: "Face and Body Cleanser",
                src: "https://earths-essence.com.au/cdn/shop/files/Earths-Essence-Face-Body-Cleanser_1b6012ae-211d-4e0a-b93f-03e8651f4109.jpg?v=1724986251&width=500",
                price: 1500,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            }

        },
        "Nutrogena": {
            "Lip Oil": {
                name: "Neutrogena® Hydro Boost Lip Oil, Light Pink, .2 Fl. Oz",
                src: "https://images.ctfassets.net/bcjr30vxh6td/7ltjdglk1PgrcJC1x0YU3S/e84ac1efaf8d7f2d752511e0fa4acc91/NTG_086800160885_US_Hydro_Boost_Lip_Oil_Light_Pink_p2OZ_00000.webp?fm=webp&w=384",
                price: 1500,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            },
            "Cleansing Mask": {
                name: "Neutrogena Evenly Clear™ Acne Cleansing Mask, 4.2 Fl oz",
                src: "https://images.ctfassets.net/bcjr30vxh6td/A5jxYYETpRF1J7Lsp8nyt/7905dea06a5d60c0a16ef8638dc5da12/6807894_Carousel1.webp?fm=webp&w=384",
                price: 1500,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            }

        },
        "Organic Traveler": {
            sunscreen: {
                name: "Barier Hydrate Sunscreen",
                src: "https://organictraveller.store/cdn/shop/files/Artboard_2_2_e50245e9-1122-4a73-b3f2-7d2d502ce857.png?v=1773216404&width=1000",
                price: 1500,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            },
            moisturizer: {
                name: "Brightening Moisturizer",
                src: "https://organictraveller.store/cdn/shop/files/Artboard_4_2.png?v=1773216070&width=1000",
                price: 1999,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            }
        }
    },
    haircare: {
        meclay: {
            shampoo: {
                name: "Meclay Thick and Dense Shampoo",
                src: "https://meclaylondon.pk/cdn/shop/files/Meclay_London_Thick_Dense_Shampoo_185ml.webp?v=1724233964&width=360",
                price: 1999,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            },
            conditioner: {
                name: "Brightening Moisturizer",
                src: "https://meclaylondon.pk/cdn/shop/files/Meclay_London_Thick_Dense_Shampoo_660ML.webp?v=1724147112&width=360",
                price: 1999,
                size: 16,
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, assumenda?"
            }
        },
    },
}

var selectProduct = document.getElementById("selectProduct");
var selectBrand = document.getElementById("selectBrand");
var allProducts = document.getElementById("allProducts");
// selectProduct.innerHTML = `<option value="">Select Category</option>`;
for (products in beautyProducts) {
    // console.log(products);
    selectProduct.innerHTML += `<option value="${products}">${products.toUpperCase()}</option>`
    for (brands in beautyProducts[products]) {
        for (items in beautyProducts[products][brands]) {
            // console.log(beautyProducts[products][brands][items].name);
            allProducts.innerHTML +=

                `<div class="col">
                    <div class="card h-100">
                        <img src="${beautyProducts[products][brands][items].src}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title price fs-4">${beautyProducts[products][brands][items].name}</h5>
                            <p class="card-text">${beautyProducts[products][brands][items].description}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary price fs-5">Rs: ${beautyProducts[products][brands][items].price}/=</small>
                        </div>
                    </div>
                </div>`
        }
    }
}

function productChange(){
  selectBrand.innerHTML = `<option value="">Select Brand</option>`;

  var selected = selectProduct.value;

  for (brands in beautyProducts[selected]) {
    selectBrand.innerHTML += `
      <option value="${brands}">${brands.toUpperCase()}</option>
    `;
  }
}