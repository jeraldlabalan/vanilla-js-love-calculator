function calculateLove() {
    const result = document.getElementById('result');
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    

    if(name1 === '' || name2 === '') {
        loadingText(result, () => {
            result.innerHTML = 'Please enter both names.';
            result.style.display = 'block';
            result.style.color = 'red';
            result.style.fontStyle = 'normal';
        })
        return;
    }

    loadingText(result, () => {
        const loveScore = Math.floor(Math.random() * 101);
        result.innerHTML = `<b>You</b> and <b>${name2}</b> have a love score of <b>${loveScore}%</b>.`;

        if (loveScore < 50) {
            result.innerHTML += `<br>Sorry, your love score is quite low. Better luck next time!`;
        }
        else if (loveScore < 80) {
            result.innerHTML += `<br>Not bad! You have a decent love score.`;
        } else {
            result.innerHTML += `<br>Wow! You two are a perfect match! ❤️`;
        }

        result.style.display = 'block';
        result.style.color = 'black';

        document.getElementById('name1').value = '';
        document.getElementById('name2').value = '';
    })

}

function loadingText(result, callback) {
    const button = document.getElementById('calculate');
    const loader = button.querySelector('.loader');
    const btnText = button.querySelector('.btn-text');

    // Hide result at start
    result.style.display = 'none';

    // Add loading class to button
    button.classList.add('loading');
    button.disabled = true;

    // Show loader, hide button text
    btnText.style.display = 'none';
    loader.style.display = 'inline-block';

    // Simulate loading delay
    setTimeout(() => {
        // Hide loader, show button text again
        loader.style.display = 'none';
        btnText.style.display = 'inline';

        // Remove loading class and re-enable button
        button.classList.remove('loading');
        button.disabled = false;

        callback(); // Call the callback function to update the result
    }, 2000);
}
