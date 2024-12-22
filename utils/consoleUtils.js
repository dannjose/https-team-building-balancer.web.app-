//Function to capture console errors
export function captureConsoleErrors(page) {
    const errorMessages = [];
  
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errorMessages.push(msg.text());
      }
    });
  
    return errorMessages;
  }
  