function showOptions(event) {
    
    event.preventDefault(); 
  
    
    event.target.disabled = true;
  
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('dropdown-options');
  
     // Create the "Pay" text element
     const payText = document.createElement('span');
     payText.textContent = 'Pay';
     payText.style.position = 'absolute';
    ;
     payText.style.left = '10px'; 
     payText.style.color = 'white'; 
    
     payText.style.top = '20px'; 
     optionsContainer.appendChild(payText);
     optionsContainer.style.padding = '45px 0';
    // Create close button with "X" symbol
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '0px';
    closeButton.addEventListener('click', () => {
      optionsContainer.remove();
      event.target.disabled = false; 
    });
    optionsContainer.appendChild(closeButton);

    // Add the search bar to the options container
    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search Token';
    searchBar.style.textAlign = 'center';
    searchBar.style.border = 'none';
    searchBar.style.padding = '10px';
    searchBar.style.margin = '10px';
    searchBar.style.backgroundColor = '#101832'; 
    searchBar.style.color = '#9699BA';
    searchBar.style.fontSize = '16px'; 
    searchBar.style.fontWeight = 'bold'; 
    searchBar.style.width = '90%';
    searchBar.style.border = '1px solid white'; 
    searchBar.style.borderRadius = '20px';

   searchBar.addEventListener('mouseover', () => {
   searchBar.style.backgroundColor = '#151E3E'; 
   searchBar.style.color = '#ABB5BD'; 
});

searchBar.addEventListener('mouseout', () => {
  searchBar.style.backgroundColor = '#101832'; 
  searchBar.style.color = '#8B8FB0'; 
});
    optionsContainer.insertBefore(searchBar, closeButton);


const separatorLine = document.createElement('hr');

separatorLine.style.width = '100%'; 
separatorLine.style.color = '#343B51'; 
separatorLine.style.margin = '10px 0'; 
optionsContainer.appendChild(separatorLine);
  
   


     // Add options to the container
  const options = event.target.querySelectorAll('option');
  options.forEach(option => {
    const optionElement = document.createElement('div');

    const [text, subscriptText] = option.textContent.split('(');

  
    optionElement.innerHTML = `${text}<span style="font-size: 0.6em; color: #8A8EAE;">(${subscriptText})</span>`;


    optionElement.addEventListener('click', () => {
      event.target.value = option.value;
      optionsContainer.remove();
      event.target.disabled = false; 
    });
    optionsContainer.appendChild(optionElement);
  });
  
    // Position the options container on the right side of the screen
    optionsContainer.style.position = 'fixed';
    optionsContainer.style.top = '0';
    optionsContainer.style.right = '0';
    optionsContainer.style.width = '29vw';
    optionsContainer.style.height = '100vh';
    optionsContainer.style.background = '#0D1530';
    optionsContainer.style.border = '1px solid #ccc';
    optionsContainer.style.zIndex = '1';
    optionsContainer.style.color = '#5A87CB'
  
    document.body.appendChild(optionsContainer);


    



  }

  

  //trading chart------------------

  document.addEventListener('DOMContentLoaded', function () {
      const tvWidget = new TradingView.widget({
          symbol: 'BTCUSD',
          interval: '15',
          container_id: 'tv_chart_container',
          library_path: '/charting_library/',
          locale: 'en',
          fullscreen: false,
          autosize: true,
          studies_overrides: {},
          theme: 'Dark',
      });
  });

  