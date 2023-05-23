//Task 6
//#1
class Clock {
  constructor(elementId) {
    //Get id element
    this.element = document.getElementById(elementId);
    this.updateTime(); // update methods
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    this.element.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>`;
  }
}

// Create a new instance of the Clock class and start it
const clock = new Clock('clock');
