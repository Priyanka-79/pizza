		
		var bool;
		function pay(){
			var card = document.getElementById('card_num').value;

			var name = document.getElementById('name').value;
			var cvv = document.getElementById('cvv').value;
			var month = document.getElementById('month').value;
			var year = document.getElementById('year').value;
			if (card == "" || isNaN(card) || card.length!=16) {
				alert("Please Enter valid Card Number");
				document.getElementById('card_num').style.backgroundColor = "red";
				document.getElementById('name').style.backgroundColor = "white";
				document.getElementById('cvv').style.backgroundColor = "white";
				document.getElementById('month').style.backgroundColor = "white";
				document.getElementById('year').style.backgroundColor = "white";
			}else if (name == "") {
				alert("Please Enter Name on the Card");
				document.getElementById('card_num').style.backgroundColor = "white";
				document.getElementById('name').style.backgroundColor = "red";
				document.getElementById('cvv').style.backgroundColor = "white";
				document.getElementById('month').style.backgroundColor = "white";
				document.getElementById('year').style.backgroundColor = "white";
			}else if (cvv == "" || cvv.length!= 3) {
				alert("Please Enter Valid CVV");
				document.getElementById('card_num').style.backgroundColor = "white";
				document.getElementById('name').style.backgroundColor = "white";
				document.getElementById('cvv').style.backgroundColor = "red";
				document.getElementById('month').style.backgroundColor = "white";
				document.getElementById('year').style.backgroundColor = "white";
			}else if (month == "") {
				alert("Please Enter Month");
				document.getElementById('card_num').style.backgroundColor = "white";
				document.getElementById('name').style.backgroundColor = "white";
				document.getElementById('cvv').style.backgroundColor = "white";
				document.getElementById('month').style.backgroundColor = "red";
				document.getElementById('year').style.backgroundColor = "white";
			}else if (year == "") {
				alert("Please Enter Year");
				document.getElementById('card_num').style.backgroundColor = "white";
				document.getElementById('name').style.backgroundColor = "white";
				document.getElementById('cvv').style.backgroundColor = "white";
				document.getElementById('month').style.backgroundColor = "white";
				document.getElementById('year').style.backgroundColor = "red";
			}else{
				alert("Your order has been Placed Successfully \n Pickup in 9 -20 minutes");
				window.location = "index.html"
			}
			
		}
		function back(){
			/*document.getElementsByClassName('result')[1].setAttribute("hidden","");
			document.getElementsByClassName('result')[0].removeAttribute("hidden");*/
			$(document).ready(function(){
						$(".result:first").show(1000);
						$(".result:nth-child(3)").hide(1000);

					});
		}
		function checkOut(){
			bool = 1;
			price();
		}
		function checkCount(count){
			if (count < 2) {
				alert("Please choose atleast 2 toppings");
				document.getElementById('errors').innerHTML = "*Select atleast 2 toppings (One extra topping is equal to 2 Regular toppings)";		
			}else if(count > 5){
				if (confirm("Our Pizza is best cooked with 5 toppings\n Press Ok to proceed or Cancel to modify your order")) {
					/*document.getElementsByClassName('result')[0].setAttribute("hidden","");
					document.getElementsByClassName('result')[1].removeAttribute("hidden");*/
					$(document).ready(function(){
						$(".result:first").hide(1000);
						$(".result:nth-child(3)").show(1000);

					});
				}else{
					document.getElementById('errors').innerHTML = "*Our Pizza is best cooked with 5 toppings";
				}
			}
			else{
				document.getElementById('errors').innerHTML = "";
				/*document.getElementsByClassName('result')[0].setAttribute("hidden","");
				document.getElementsByClassName('result')[1].removeAttribute("hidden");*/
				$(document).ready(function(){
						$(".result:first").hide(1000);
						$(".result:nth-child(3)").show(1000);

					});
			}
		}
		function price(){
			var count = 0;
			var total = 0;
			var toppings = "";
			//size
			var size = document.getElementById('size').value;
			if (size == "large") {
				total = total + 113;

			}else if (size == "medium") {
				total = total + 103;
			}else if (size == "small") {
				total = total + 93;
			}else{
				/*alert("please select size of your pizza");
				window.location = "index.html";*/
			}

			//CRUST
			var crust = document.getElementById('crust').value;
			if (crust == "ORIGINAL STUFFED") {
				total = total + 1.99;
			}

			//SAUCE
			var sauce = document.getElementById('sauce').value;

			//CHEESE
			var cheese = document.getElementById('cheese').value;
			if (cheese == "NO CHEESE") {
				
			}else if(cheese == "0"){
				cheese = "REGULAR CHEESE";
				
			}else if(cheese == "2"){
				cheese = "EXTRA CHEESE";
				total = total + 2;	
			}

			//PEPPERONI
			var pep = document.getElementsByName('pepperoni');
			for(i=0;i<pep.length;i++){
				if (pep[i].checked) {
					pep_val = pep[i].value;
					if (pep_val == 1) {
						total = total + 1.49;
						toppings += "PEPPERONI<br>";
						count++;
						 
					}if (pep_val == 2) {
						total = total + 2.49;
						toppings += "PEPPERONI (EXTRA)<br>";
						count+=2;
						 
					}
				}
			}

			//SALAMI
			var salami = document.getElementsByName('salami');
			for(i=0;i<salami.length;i++){
				if (salami[i].checked) {
					salami_val = salami[i].value;
					if (salami_val == 1) {
						total = total + 1.49;
						toppings += "SALAMI<br>";
						count++;
						 
					}if (salami_val == 2) {
						total = total + 2.49;
						toppings += "SALAMI (EXTRA)<br>";
						count+=2;
						 
					}
				}
			}

			//HAM
			var ham = document.getElementsByName('ham');
			for(i=0;i<ham.length;i++){
				if (ham[i].checked) {
					ham_val = ham[i].value;
					if (ham_val == 1) {
						total = total + 1.49;
						toppings += "HAM<br>";
						count++;
						 
					}if (ham_val == 2) {
						total = total + 2.49;
						toppings += "HAM (EXTRA)<br>";
						count+=2;
						 
					}
				}
			}

			//BACON
			var bacon = document.getElementsByName('bacon');
			for(i=0;i<bacon.length;i++){
				if (bacon[i].checked) {
					bacon_val = bacon[i].value;
					if (bacon_val == 1) {
						total = total + 1.49;
						toppings += "BACON<br>";
						count++;
						 
					}if (bacon_val == 2) {
						total = total + 2.49;
						toppings += "bacon (EXTRA)<br>";
						count+=2;
					}
				}
			}

			//GRILLED CHICKEN
			var chicken = document.getElementsByName('chicken');
			for(i=0;i<chicken.length;i++){
				if (chicken[i].checked) {
					chicken_val = chicken[i].value;
					if (chicken_val == 1) {
						total = total + 1.49;
						toppings += "chicken<br>";
						count++;
						 
					}if (chicken_val == 2) {
						total = total + 2.49;
						toppings += "chicken (EXTRA)<br>";
						count+=2;
					}
				}
			}

			//MUSHROOMS
			var mushrooms = document.getElementsByName('mushrooms');
			for(i=0;i<mushrooms.length;i++){
				if (mushrooms[i].checked) {
					mushrooms_val = mushrooms[i].value;
					if (mushrooms_val == 1) {
						total = total + 1.49;
						toppings += "mushrooms<br>";
						count++;
						 
					}if (mushrooms_val == 2) {
						total = total + 2.49;
						toppings += "mushrooms (EXTRA)<br>";
						count+=2;
					}
				}
			}

			//ROASTED SPINACH
			var spinach = document.getElementsByName('spinach');
			for(i=0;i<spinach.length;i++){
				if (spinach[i].checked) {
					spinach_val = spinach[i].value;
					if (spinach_val == 1) {
						total = total + 1.49;
						toppings += "spinach<br>";
						count++;
						 
					}if (spinach_val == 2) {
						total = total + 2.49;
						toppings += "spinach (EXTRA)<br>";
						count+=2;
					}
				}
			}

			//ONIONS
			var onions = document.getElementsByName('onions');
			for(i=0;i<onions.length;i++){
				if (onions[i].checked) {
					onions_val = onions[i].value;
					if (onions_val == 1) {
						total = total + 1.49;
						toppings += "onions<br>";
						count++;
						 
					}if (onions_val == 2) {
						total = total + 2.49;
						toppings += "onions (EXTRA)<br>";
						count+=2;
					}
				}
			}

			//OLIVES
			var olives = document.getElementsByName('olives');
			for(i=0;i<olives.length;i++){
				if (olives[i].checked) {
					olives_val = olives[i].value;
					if (olives_val == 1) {
						total = total + 1.49;
						toppings += "olives<br>";
						count++;
						 
					}if (olives_val == 2) {
						total = total + 2.49;
						toppings += "olives (EXTRA)<br>";
						count+=2;
					}
				}
			}

			//BELL PEPPERS
			var bell = document.getElementsByName('bell');
			for(i=0;i<bell.length;i++){
				if (bell[i].checked) {
					bell_val = bell[i].value;
					if (bell_val == 1) {
						total = total + 1.49;
						toppings += "bell peppers<br>";
						count++;
						 
					}if (bell_val == 2) {
						total = total + 2.49;
						toppings += "bell peppers (EXTRA)<br>";
						count+=2;
					}
				}
			}

			//JALAPENOS
			var jalapenos = document.getElementsByName('jalapenos');
			for(i=0;i<jalapenos.length;i++){
				if (jalapenos[i].checked) {
					jalapenos_val = jalapenos[i].value;
					if (jalapenos_val == 1) {
						total = total + 1.49;
						toppings += "jalapenos<br>";
						count++;
						 
					}if (jalapenos_val == 2) {
						total = total + 2.49;
						toppings += "jalapenos (EXTRA)<br>";
						count+=2;
					}
				}
			}
			document.getElementById('price').innerHTML = "$" + total.toFixed(2);
			document.getElementById('details').innerHTML = size.toUpperCase() + " PIZZA" + "<br>" + crust + "<br>" + sauce + "<br>" + cheese + "<br>" + toppings.toUpperCase() + "<p style='color:red'>Total Number of Toppings: " + count + "</p>" + "<p style='color:red'>One extra topping is equal to 2 Regular toppings";
			if (bool == 1) {
				if (size == "") {
					alert("Please select your pizza size");
				}else{
					checkCount(count);
				}
				
				bool = 0;
			}
		}