/* eslint-disable indent */
const path = require('path');

const { spawn } = require('child_process');

// Replace 'your-python-script.py' with the actual name of your Python script

// Listen for the Python script's stdout data

exports.getMainPage = (req, res) => {
    res.render('main', {
        page_name: 'home',
    });
};

exports.startTweet = (req, res) => {
    const pathpy = path.join(__dirname, 'twitter-bot', 'bot.py');
    // console.log(req.body)
    const pythonProcess = spawn('python3', [pathpy, req.body.api, req.body.api_secret, req.body.access_token, req.body.access_token_secret, req.body.bearer_token, req.body.hashtag]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python script output: ${data}`);
    });

    // Listen for any errors that might occur during the execution
    pythonProcess.on('error', (err) => {
        console.error(`Error occurred: ${err.message}`);
    });

    // Listen for the Python script to exit
    pythonProcess.on('close', (code) => {
        console.log(`Python script exited with code ${code}`);
        // Send a response to the client
        if (code === 0) {
            res.status(200).json({ message: 'Python script executed successfully' });
        } else {
            res.status(500).json({ error: 'Python script execution failed' });
        }
    });
}



