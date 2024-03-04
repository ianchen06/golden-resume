document.getElementById('submitBtn').addEventListener('click', function() {
    var resumeText = document.getElementById('resumeText').value;
    if(resumeText.trim() === '') {
        alert('Please paste your resume in the text area.');
        return;
    }

    // Static suggestions for demonstration
    var suggestions = `
        <h2>Suggestions</h2>
        <ul>
            <li>Use action verbs to describe your job responsibilities.</li>
            <li>Quantify your achievements with numbers when possible.</li>
            <li>Keep your resume to one page if you have less than 10 years of experience.</li>
            <li>Customize your resume for the job you're applying to.</li>
        </ul>

        <img src="/golden_resume.webp" alt="Suggestion Image" />
    `;

    document.getElementById('suggestions').innerHTML = suggestions;
});
