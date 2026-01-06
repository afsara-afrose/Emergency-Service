function getElement(id){
    return document.getElementById(id);
}

document.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    const heartCount = Number(getElement("heart-count").innerText);
    getElement("heart-count").innerText = heartCount + 1;
  }
});

document.addEventListener("click", function (e) {
  const copyBtn = e.target.closest(".copy-btn");
  if (copyBtn) {
    alert("copied successfully!");
    const copyCountEl = getElement("copy-count");
    copyCountEl.innerText = Number(copyCountEl.innerText) + 1;
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("hotline-number")) {
    const number = e.target.innerText;
    navigator.clipboard.writeText(number);
    alert("Hotline number copied: " + number);
  }
});

document.addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const card = e.target.closest(".bg-white");
    const serviceName = card.querySelector("h2").innerText;
    const serviceNumber = card.querySelector(".hotline-number").innerText;
    let coins = Number(getElement("coin-count").innerText);
    if (coins < 20) {
      alert("❌ You don't have enough coins to make a call");
      return;
    }
    coins -= 20;
    getElement("coin-count").innerText = coins;
    alert(`📞 Calling ${serviceName}\nNumber: ${serviceNumber}`);
    const now = new Date();
    const localTime = now.toLocaleString();
    const historyContainer = getElement("call-history");
    const historyItem = document.createElement("div");
    historyItem.classList.add("bg-gray-100", "rounded-xl", "p-3");
    historyItem.innerHTML = `
     <div class='flex justify-between gap-3 p-3'> 
    <div>
    <h3 class="font-bold">${serviceName}</h3>
    <p class="text-sm">${serviceNumber}</p>
    </div>
    <div> 
    <p class="text-s opacity-70 font-bold">${new Date().toLocaleTimeString()}</p>
    </div>
    </div>
      
    `;
    historyContainer.appendChild(historyItem);
  }
});

getElement("clear-history").addEventListener("click", function () {
  getElement("call-history").innerHTML = "";
});
