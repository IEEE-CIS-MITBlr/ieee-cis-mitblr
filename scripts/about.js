document.addEventListener("DOMContentLoaded", () => {
    typeText();  
});

// Text to be displayed can be changed here
const aboutText = `We are IEEE CIS MIT-BLR, a student-led society dedicated to advancing the knowledge and application of computer science and information systems. We host a range of events, workshops, and projects to foster innovation and provide our members with opportunities to grow in their technical and professional journeys. Join us and be part of the exciting world of IEEE and Computer Science!
`;

function typeText() {
    const aboutTextElement = document.getElementById("about-text");
    let i = 0;
    let speed = 50; // speed of the displayed text can be changed here

    function typeWriter() {
        if (i < aboutText.length) {
            aboutTextElement.innerHTML += aboutText.charAt(i);
            i++;
            setTimeout(typeWriter, speed); 
        }
    }

    typeWriter(); 
}
