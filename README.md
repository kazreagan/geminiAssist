# geminiAssist
Gemini Assist is a Chrome extension designed to provide users with intelligent assistance by connecting directly to the Gemini AI model. Whether you need help with quick answers, insights or specialized knowledge, Gemini Assist offers a convenient way to interact with AI directly from your browser.

## Installation
# To install Gemini Assist locally
1. clone the repository
    ```bash
    git clone https://github.com/your-username/geminiAssist.git
    ```
    
2. Navigate to the Chrome Extensions page`(chrome://extenions)`

3. Enable Developer mode.

4. Click on Load unpacked and select the `geminiAssit/gemini_extension`

## Usage
    1. After laoding the extension, click on the Gemini Assist icon in the Chrome toolbar

    2. Enter your query in the input field and click `Send to Gemini`

    3. The response from Gemini AI will appear in the extension window.

## Technologies Used
    - JavaScript: For core functionality and background script processing.
    - HTML & CSS: To create a responsive and user friendly interface.
    - Chrome Extension APIs: For handling storage, messaging and UI components.
    - Gemini API: Integrated to process user queries and generate responses.

## Configuration
### To connect with the Gemini API, you need an API key.
    1. obtain your API key form the `Gemini Developer Portal`
    
    2. Save your in a `.env` file:
    
    3. load the `.env` file securely in `background.js` using chrome's storage API or an environment manager.

## Accomplishments
Creating Gemini Assist involved overcoming various challenges in Chrome extension development, particularly with secure API key management and aynchronous messaging. I am proud of delivering a responsive and effective user experience and ensuring data privacy.

## What I learned
This project taught me the complexities of chrome extension APIs, secure storage handling and API integration. I also refined my debugging and problem-solving skills, particularly in handling CORS errors and network resquests.

## Future Plans
### In the future, I plan to:
    - Add support for additional data sources
    - Provide more customization options for users
    - Optimizr performance and expand the extension to other browers
    - Publish Gemini Assist on the Chrome Web Store

## Contributing
I welcome contributions! Please for the repository, create a feature branch and submit a pull request with your changes.

