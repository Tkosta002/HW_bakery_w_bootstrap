//Help Button and Message Display
document.addEventListener("DOMContentLoaded", function () {
  const helpbutton = document.getElementById("helpButton");
  const helpMessageContainer = document.getElementById("helpMessageContainer");
  const bakeryPhoneNumber =
    document.getElementById("bakeryPhoneNumber").innerText;
  helpbutton.addEventListener("click", function (event) {
    helpMessageContainer.innerHTML = "";
    const newMessage = document.createElement("p");
    newMessage.textContent =
      "Need assistance with your order or have questions about our bakery products? Please don't hesitate to call us at " +
      bakeryPhoneNumber +
      ". Our friendly staff are on hand to help you with any inquiries, provide recommendations, or assist with special requests. We're here to ensure your experience with Pure Grain Bakehouse is delightful and satisfying!";
    helpMessageContainer.appendChild(newMessage);
  });
});
//remove by click the help message
document.addEventListener("DOMContentLoaded", function () {
  const helpMessage = document.getElementById("helpMessageContainer");

  helpMessage.addEventListener("click", function (event) {
    if (helpMessage.contains(event.target)) {
      helpMessage.removeChild(event.target);
    }
  });
});
//offer Module
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bakeryOrderForm");
  const offerModal = document.getElementById("offerModule");

  const closeSpan = offerModal.getElementsByClassName("close")[0];
  closeSpan.addEventListener("click", function () {
    offerModal.style.display = "none";
  });
  //Interactive Form Validation
  form.addEventListener("submit", function (event) {
    const customerName = document.getElementById("customerName")?.value || "";
    const customerDate = document.getElementById("pickupDeliveryDate").value;
    const customerTime = document.getElementById("pickupDeliveryTime").value;
    const customerAreaCode = document.getElementById("areaCode").value;
    const customerPhone = document.getElementById("phoneNumber").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerEmail = document.getElementById("customerEmail").value;
    //validate Email
    function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
    }
    //
    function validateAreaCode(code) {
      const regex = /^[0-9]{1,3}$/;
      return regex.test(code);
    }
    //
    function validatePhone(number) {
      const regex = /^[0-9]{10}$/;
      return regex.test(number);
    }
    //
    function isDateTodayOrFuture(inputDateString) {
      const inputDate = new Date(inputDateString);
      inputDate.setHours(0, 0, 0, 0); 
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
      return inputDate.getTime() >= today.getTime();
    }
    //
    function isTimeNowOrFuture(inputTimeString) {
      const currentTime = new Date();
      const inputTime = new Date(
        currentTime.toDateString() + " " + inputTimeString
      );
      return inputTime >= currentTime;
    }
    const checkPhone = validatePhone(customerPhone);
    const checkArea = validateAreaCode(customerAreaCode);
    const checkEmail = validateEmail(customerEmail);
    const checkDate = isDateTodayOrFuture(customerDate);
    const checkTime = isTimeNowOrFuture(customerTime);

    const errorMessage = [];
    if (!customerName) {
      errorMessage.push("Please enter your name.");
    }
    if (!checkDate) {
      errorMessage.push(
        "Please enter a date of delivery that is today or in the future."
      );
    }
    if (!checkTime) {
      errorMessage.push("Please enter convient time for yourdelivery");
    }
    if (!checkArea) {
      errorMessage.push("Pleaseenter your valid code area");
    }
    if (!checkPhone) {
      errorMessage.push("Please enter your valid phone number");
    }
    if (!customerAddress) {
      errorMessage.push("Please enter your address");
    }
    if (!checkEmail) {
      errorMessage.push("Please enter your email");
    }
    if (errorMessage.length > 0) {
      alert(errorMessage.join("\n"));
      event.preventDefault();
    } else {
      const customerName = document.getElementById("customerName").value;
      offerModal.style.display = "flex";
      document.getElementById(
        "personalizedMessage"
      ).textContent = `Dear ${customerName}, thank you for your order`;
      offerModal.style.display = "block";
      event.preventDefault();
      setTimeout(function () {
        form.submit();
      }, 5000);
    }
  });
});

window.onclick = function (event) {
  if (event.target == offerModal) offerModal.style.display = "none";
};
//Mouse Hover Effects
document.addEventListener("DOMContentLoaded", function () {
  const Logo = document.getElementById("logoId");
  Logo.addEventListener("mouseover", function (event) {
    Logo.style.opacity = "0.5";
  });
  Logo.addEventListener("mouseout", function (event) {
    Logo.style.opacity = "1";
  });
});
//Interactive To-Do List
document.addEventListener("DOMContentLoaded", function () {
  const Logo = document.getElementById("insideBakery");
  Logo.addEventListener("mouseover", function (event) {
    Logo.style.filter = "blur(5px) grayscale(100%)";
    Logo.addEventListener("mouseout", function (event) {
      Logo.style.filter = "blur(0) grayscale(0)";
    });
  });
});
//Mouse Hover Effects
document.addEventListener("DOMContentLoaded", function () {
  const nameBakery = document.getElementById("nameID");

  if (!nameBakery) {
    console.error("Element with ID 'nameID' was not found.");
    return;
  }

  nameBakery.addEventListener("mouseover", function (event) {
    nameBakery.style.color = "#007BFF";
    nameBakery.style.fontWeight = "normal"; 
    nameBakery.style.fontSize = "62px"; 
  });

  nameBakery.addEventListener("mouseout", function (event) {
    nameBakery.style.color = "#333";
    nameBakery.style.fontWeight = "normal"; 
    nameBakery.style.fontSize = "60px"; 
  });
});
//Interactive To-Do List
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".form-check-input");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const label = this.nextElementSibling;
      if (this.checked) {
        label.style.textDecoration = "bold";
        label.style.color = "red";
      } else {
        label.style.textDecoration = "none";
        label.style.color = "rgb(255, 153, 0)";
      }
    });
  });
});

// search engine
const bakeryProducts = [
  "Croissant",
  "Baguette",
  "Sourdough Bread",
  "Ciabatta",
  "Rye Bread",
  "Brioche",
  "Danish Pastry",
  "Cinnamon Roll",
  "Pain au Chocolat",
  "Apple Pie",
  "Cheesecake",
  "Carrot Cake",
  "Banana Bread",
  "Blueberry Muffin",
  "Chocolate Chip Cookie",
  "Macarons",
  "Eclairs",
  "Cupcake",
  "Donut",
  "Pretzel",
  "Focaccia",
  "Pumpkin Pie",
  "Tiramisu",
  "Profiterole",
  "Opera Cake",
  "Lemon Tart",
  "Brownie",
  "Gingerbread",
  "Scones",
  "Challah",
];

document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchID");
  const suggestionBox = document.getElementById("suggestion");
  searchBox.addEventListener("input", function () {
    const inputVal = this.value;
    suggestionBox.innerHTML = "";
    if (inputVal.length > 0) {
      const filteredProducts = bakeryProducts.filter((product) =>
        product.toLowerCase().includes(inputVal.toLowerCase())
      );
      filteredProducts.forEach((product) => {
        const div = document.createElement("div");
        div.textContent = product;
        div.addEventListener("click", function () {
          searchBox.value = product;
          suggestionBox.innerHTML = "";
        });
        suggestionBox.appendChild(div);
      });
      suggestionBox.style.display = "block";
      const searchButton = document.getElementById("searchButton");
      searchButton.innerHTML = "Add";
    } else {
      suggestionBox.style.display = "none";
    }
  });
});
//Dynamic Content Generation
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchID");
  const searchButton = document.getElementById("searchButton");
  const resultBox = document.getElementById("result");
  const noteMessage = document.getElementById("note");

  searchButton.addEventListener("click", function () {
    const inputVal = searchBox.value;
    const existsInArray = bakeryProducts.some(
      (product) => product.toLowerCase() === inputVal.trim().toLowerCase()
    );

    if (existsInArray) {
      const newMessage = document.createElement("li");
      newMessage.textContent = inputVal;
      noteMessage.innerHTML = "";

      const newNote = document.createElement("p");
      newNote.textContent = "Click on an item in the list to remove it.";
      newNote.style.color = "brown";
      newNote.style.fontSize = "14px";
      newNote.style.marginTop = "5px";
      newMessage.style.margin = "20px";

      noteMessage.appendChild(newNote);
      resultBox.appendChild(newMessage);
      searchBox.value = "";
    } else {
      alert("Product does not exist in the bakery list.");
    }
  });
});
//removing by click the result from adding new item
document.addEventListener("DOMContentLoaded", function () {
  const resultBox = document.getElementById("result");

  resultBox.addEventListener("click", function (event) {
    if (resultBox.contains(event.target)) {
      resultBox.removeChild(event.target);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuArea = document.querySelector(".right-click-area");
  const menu = document.querySelector(".right-click-menu");
  const offerModule = document.getElementById("offerModule");
  const personalizedMessage = document.getElementById("personalizedMessage");
  const close = offerModule.querySelector(".close");

  // Function to show the offer module with a personalized message
  function showOffer(message) {
    personalizedMessage.textContent = message;
    offerModule.style.display = "block"; 
    menu.classList.remove("active"); 
  }

  // Close button for the offer module
  close.addEventListener("click", function () {
    offerModule.style.display = "none";
  });

  menuArea.addEventListener(
    "contextmenu",
    (event) => {
      event.preventDefault();
      menu.style.top = `${event.clientY}px`;
      menu.style.left = `${event.clientX}px`;
      menu.classList.add("active");
      menu.style.display = "";
    },
    false
  );

  document.addEventListener(
    "click",
    (event) => {
      if (!menu.contains(event.target)) {
        menu.classList.remove("active");
      }
    },
    false
  );

  menu.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
    },
    false
  );

  document.querySelector("#l1").addEventListener(
    "click",
    () => {
      showOffer(
        "Sweet choice! Let's bake your dream cake. Tell us your favorite flavors and decorations, and we'll create something magical."
      );
    },
    false
  );
  document.querySelector("#l2").addEventListener(
    "click",
    () => {
      showOffer(
        "Craving something unique? Share your pastry vision with us, and watch as we craft your perfect treat."
      );
    },
    false
  );
  document.querySelector("#l3").addEventListener(
    "click",
    () => {
      showOffer(
        "Ready for a visit? Find the closest bakery to you and come taste our delicious creations firsthand."
      );
    },
    false
  );
  document.querySelector("#l4").addEventListener(
    "click",
    () => {
      showOffer(
        "We're here to listen! Whether it's feedback, questions, or just saying hello, we're all ears. How can we help you today?"
      );
    },
    false
  );
});
