/* Access references for the input and display zones */
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContiainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloaPdfButton = document.getElementById("download-pdf");
/* Handle Form Submission */
form.addEventListener("submit", function (event) {
<<<<<<< HEAD
    event.preventDefault(); // prevent page reload
    // Collect input values
=======
    var _a;
    event.preventDefault(); // prevent page reload
    // Collect input values
    var profilePictureInput = document.getElementById("profile-picture");
>>>>>>> 958d4c5 (Updated resume for better responsiveness)
    var userName = document.getElementById("user-name")
        .value;
    var firstName = document.getElementById("first-name")
        .value;
    var lastName = document.getElementById("last-name")
        .value;
    var emailAdress = document.getElementById("email-address").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    // Save form data in localStorage with the username as the key's
    var resumData = {
<<<<<<< HEAD
=======
        profilePictureInput: profilePictureInput,
        userName: userName,
>>>>>>> 958d4c5 (Updated resume for better responsiveness)
        firstName: firstName,
        lastName: lastName,
        emailAdress: emailAdress,
        phoneNumber: phoneNumber,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(userName, JSON.stringify(resumData)); // Saving data in locally.
<<<<<<< HEAD
    // Generate resume content dynamically
    var resumeHTML = "\n       <h2><b>Editable Resume</b></h2>\n       <h3>Personal Information</h3>\n       <p><b>FirstName:</b><span contenteditable=\"true\">".concat(firstName, "</span></p>\n       <p><b>LastName:</b><span contenteditable=\"true\">").concat(lastName, "</span</p>\n       <p><b>Email:</b><span contenteditable=\"true\">").concat(emailAdress, "</span</p>\n       <p><b>Phone:</b><span contenteditable=\"true\">").concat(phoneNumber, "</span</p>\n\n       <h3>Education</h3>\n       <p contenteditable=\"true\">").concat(education, "</p>\n\n       <h3>Experience</h3>\n       <p contenteditable=\"true\">").concat(experience, "</p>\n\n       <h3>Skills</h3>\n       <p contenteditable=\"true\">").concat(skills, "</p>\n      \n     ");
=======
    // Picture Elements Shareable
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Generate resume content 
    var resumeHTML = "\n       <h2><b>Shareable Resume</b></h2>\n       ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n       <h3>Personal Information</h3>\n       <p><b>FirstName:</b><span contenteditable=\"true\">").concat(firstName, "</span></p>\n       <p><b>LastName:</b><span contenteditable=\"true\">").concat(lastName, "</span</p>\n       <p><b>Email:</b><span contenteditable=\"true\">").concat(emailAdress, "</span</p>\n       <p><b>Phone:</b><span contenteditable=\"true\">").concat(phoneNumber, "</span</p>\n\n       <h3>Education</h3>\n       <p contenteditable=\"true\">").concat(education, "</p>\n\n       <h3>Experience</h3>\n       <p contenteditable=\"true\">").concat(experience, "</p>\n\n       <h3>Skills</h3>\n       <p contenteditable=\"true\">").concat(skills, "</p>\n      \n     ");
>>>>>>> 958d4c5 (Updated resume for better responsiveness)
    // Display generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate Shareable URL with username
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(userName));
    // Display shareable linl
    shareableLinkContiainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloaPdfButton.addEventListener("click", function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF.
});
// Prefill the form based on the username in the URL.
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var userName = urlParams.get("username");
    if (userName) {
        // Autofill from if datais found in localStorage
        var savedResumeData = localStorage.getItem(userName);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
<<<<<<< HEAD
            document.getElementById("user-name").value = userName;
=======
            document.getElementById("profile-picture").value = resumeData.profilePictureFile;
            document.getElementById("user-name").value = resumeData.userName;
>>>>>>> 958d4c5 (Updated resume for better responsiveness)
            document.getElementById("first-name").value = resumeData.firstName;
            document.getElementById("last-name").value = resumeData.lastName;
            document.getElementById("email-address").value = resumeData.email;
            document.getElementById("phone-number").value = resumeData.phoneNumber;
            document.getElementById("education").value = resumeData.education;
            document.getElementById("experience").value = resumeData.education;
            document.getElementById("skills").value = resumeData.experience;
        }
    }
});
