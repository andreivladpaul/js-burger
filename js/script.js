
function calculatePrice () {
    let coupons = ['94224GEORGI', '95196BURGER', '67117BURGER'];
        let defaultPrice = 50; 
        let ingredientPrice = 0;
        let element = document.getElementsByClassName('ingredients');
        
        for (let i = 0; i < element.length; i++) {
            if (element[i].checked)
                ingredientPrice += parseInt(element[i].value);
        }

        let discount = document.getElementById('discount-code').value;
        if (coupons.includes(discount)) {
            finalPrice = (ingredientPrice + defaultPrice) * 0.8;
            document.getElementById("applied-discount").innerHTML = "20% Discount"
        } else {
            finalPrice = ingredientPrice + defaultPrice;
        } 

        document.getElementById('price').innerHTML = '$' + finalPrice.toFixed(2);
}

document.getElementById('calculate').addEventListener('click',
    function() {
        let burgerName = document.getElementById("burger-name").value;
            if (burgerName == null || burgerName == "") {
                alert("Chose a name for your burger!")
            } else {
               calculatePrice()
            }
        
    } 
)

  
      


