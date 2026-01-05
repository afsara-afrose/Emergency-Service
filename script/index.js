console.log(document);

function getElement(id){
    const element = document.getElementById(id);
    return element;
}


document.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    const heartCount = Number(getElement("heart-count").innerText);
    getElement("heart-count").innerText = heartCount + 1;
  }
});

//  copy count
document.addEventListener("click", function (e) {
  const copyBtn = e.target.closest(".copy-btn");

  if (copyBtn) {
   
    alert("copied successfully!");

    // 2️⃣ Increase copy count
    const copyCountEl = getElement("copy-count");
    const copyCount = Number(copyCountEl.innerText);
    copyCountEl.innerText = copyCount + 1;
  }
});

//copy hotline Number
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("hotline-number")) {
    const number = e.target.innerText;
    navigator.clipboard.writeText(number);
    alert("Hotline number copied: " + number);
  }
});



document.addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const callBtn = e.target;

    // card reference
    const card = callBtn.parentNode.parentNode;

    // service info
    const serviceName = card.children[1].children[0].innerText;
    const serviceNumber = card.children[1].children[2].innerText;

    // coin
    let coins = Number(getElement("coin-count").innerText);

    // validation
    if (coins < 20) {
      alert("❌ You don't have enough coins to make a call");
      return;
    }
    alert(`📞 Calling ${serviceName}\nNumber: ${serviceNumber}`);

    // cut coin
    coins = coins - 20;
    getElement("coin-count").innerText = coins;

    // add to call history
    const historyContainer = getElement("call-history");

    const historyItem = document.createElement("div");
    historyItem.innerHTML = `
      <div class="bg-gray-100 rounded-xl p-3">
        <h3 class="font-bold">${serviceName}</h3>
        <p class="text-sm">${serviceNumber}</p>
      </div>
    `;

    historyContainer.append(historyItem);
  }
});

// History Clear
getElement("clear-history").addEventListener("click", function () {
  getElement("call-history").innerHTML = "";
});
