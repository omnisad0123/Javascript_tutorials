const outer = document.getElementById("outer");
  const inner = document.getElementById("inner");
  const button = document.getElementById("button");

  function handleCapture(e) {
    console.log("Capture: ", this.id);
    // e.stopPropagation()
  }

  function handleBubble() {
    console.log("Bubble: ", this.id);

  }

  outer.addEventListener("click", handleCapture, true);
  inner.addEventListener("click", handleCapture, true);
  // button.addEventListener("click", handleCapture, true);

  // outer.addEventListener("click", handleBubble);
  // inner.addEventListener("click", handleBubble);
  // button.addEventListener("click", handleBubble);