body {
    font-family: Arial, sans-serif;
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    width: 100%;
    text-align: center;
    background-color: #f9f9f9;
    padding: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 100%;
    width: 100%;
    border-top: 1px solid #ccc;
}

.video-section {
    flex: 1;
    background-color: #f9f9f9;
    overflow-y: auto;
    padding: 10px;
}

.description-section {
    flex: 1;
    background-color: #fff;
    overflow-y: auto;
    padding: 10px;
    border-left: 1px solid #ccc;
}

.video-container {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.description-container {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.description {
    white-space: pre-wrap; /* This handles new line characters */
}
