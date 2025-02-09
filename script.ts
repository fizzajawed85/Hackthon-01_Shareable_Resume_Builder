/* Access references for the input and display zones */

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;
const shareableLinkContiainer = document.getElementById(
  "shareable-link-container"
) as HTMLDivElement;
const shareableLinkElement = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement;
const downloaPdfButton = document.getElementById(
  "download-pdf"
) as HTMLButtonElement;

/* Handle Form Submission */

form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // prevent page reload

  // Collect input values
  const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;

  const userName = (document.getElementById("user-name") as HTMLButtonElement)
    .value;
  const firstName = (document.getElementById("first-name") as HTMLInputElement)
    .value;
  const lastName = (document.getElementById("last-name") as HTMLInputElement)
    .value;
  const emailAdress = (
    document.getElementById("email-address") as HTMLInputElement
  ).value;
  const phoneNumber = (
    document.getElementById("phone-number") as HTMLInputElement
  ).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Save form data in localStorage with the username as the key's
  const resumData = {
    profilePictureInput,
    userName,
    firstName,
    lastName,
    emailAdress,
    phoneNumber,
    education,
    experience,
    skills,
  };

  localStorage.setItem(userName, JSON.stringify(resumData)); // Saving data in locally.

  // Picture Elements Shareable
  const profilePictureFile = profilePictureInput.files?.[0];
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
   

  // Generate resume content 

  const resumeHTML = `
       <h2><b>Shareable Resume</b></h2>
       ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
       <h3>Personal Information</h3>
       <p><b>FirstName:</b><span contenteditable="true">${firstName}</span></p>
       <p><b>LastName:</b><span contenteditable="true">${lastName}</span</p>
       <p><b>Email:</b><span contenteditable="true">${emailAdress}</span</p>
       <p><b>Phone:</b><span contenteditable="true">${phoneNumber}</span</p>

       <h3>Education</h3>
       <p contenteditable="true">${education}</p>

       <h3>Experience</h3>
       <p contenteditable="true">${experience}</p>

       <h3>Skills</h3>
       <p contenteditable="true">${skills}</p>
      
     `;

  // Display generated resume
  resumeDisplayElement.innerHTML = resumeHTML;

  // Generate Shareable URL with username

  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    userName
  )}`;

  // Display shareable linl
  shareableLinkContiainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download

downloaPdfButton.addEventListener("click", () => {
  window.print(); // This will open the print dialog and allow the user to save as PDF.
});

// Prefill the form based on the username in the URL.
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("username");

  if (userName) {
    // Autofill from if datais found in localStorage
    const savedResumeData = localStorage.getItem(userName);

    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("profile-picture") as HTMLInputElement).value = resumeData.profilePictureFile;
      (document.getElementById("user-name") as HTMLButtonElement).value = resumeData.userName;
      (document.getElementById("first-name") as HTMLInputElement).value = resumeData.firstName;
      (document.getElementById("last-name") as HTMLInputElement).value = resumeData.lastName;
      (document.getElementById("email-address") as HTMLInputElement).value = resumeData.email;
      (document.getElementById("phone-number") as HTMLInputElement).value = resumeData.phoneNumber;
      (document.getElementById("education") as HTMLInputElement).value = resumeData.education;
      (document.getElementById("experience") as HTMLInputElement).value = resumeData.education;
      (document.getElementById("skills") as HTMLInputElement).value = resumeData.experience;
    }
  }
});

   