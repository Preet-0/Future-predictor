document.getElementById('predict-btn').addEventListener('click', function() {
    var birthdate = document.getElementById('birthdate').value;
    var birthtime = document.getElementById('birthtime').value;
    var birthplace = document.getElementById('birthplace').value;

    var predictionResults = document.getElementById('prediction-results');
    predictionResults.innerHTML = `
        <h2>Your Future Prediction</h2>
        <p>Date of Birth: ${birthdate}</p>
        <p>Time of Birth: ${birthtime}</p>
        <p>Place of Birth: ${birthplace}</p>
        <p>areh gadho jake kuch kaam karle xD  "APRIL FOOL"</p>
    `;
});
