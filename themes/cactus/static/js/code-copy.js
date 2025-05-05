(() => {

  function createCopyButton(codeNode) {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.type = 'button';
    copyBtn.innerText = 'copy';
  
    let resetTimer;
    copyBtn.addEventListener('click', () => {
      // --- MODIFICATION START ---
      // Find all the spans representing individual lines within the code block
      const lineSpans = codeNode.querySelectorAll(':scope > span[style*="display:flex"]');
      let textToCopy = '';
  
      // Iterate through each line span
      lineSpans.forEach(lineSpan => {
        // Find all spans within the line *except* the first one (which is the line number)
        const codeParts = lineSpan.querySelectorAll('span:not(:first-child)');
        let lineText = '';
        // Concatenate the text content of the actual code spans for this line
        codeParts.forEach(part => {
          lineText += part.textContent; // Use textContent for raw text
        });
        // Add the reconstructed line text and a newline character
        textToCopy += lineText + '\n';
      });
  
      // Trim any trailing newline that might have been added
      textToCopy = textToCopy.trim();
      // --- MODIFICATION END ---
  
      // Use the reconstructed text for the clipboard
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.innerText = 'copied!';
        // Clear existing timer logic remains the same
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          copyBtn.innerText = 'copy';
        }, 1000);
      }).catch(err => { // Optional: Basic error handling
         console.error("Failed to copy code to clipboard:", err);
         copyBtn.innerText = 'Error';
         clearTimeout(resetTimer);
         resetTimer = setTimeout(() => {
           copyBtn.innerText = 'copy';
         }, 2000);
      });
    });
  
    return copyBtn;
  }

  document.querySelectorAll('pre > code')
  .forEach((codeNode) => {
    const copyBtn = createCopyButton(codeNode);
    const preNode = codeNode.parentNode
    codeNode.parentNode.insertBefore(copyBtn, codeNode)
  })

  document.querySelectorAll('.highlight table > tbody > tr > td:first-child .code-copy-btn')
  .forEach((btn) => {
    btn.remove()
  })

})()