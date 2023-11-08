const languageBtn = document.getElementById("language-btn");
const htmlTag = document.getElementsByTagName("html")[0];

languageBtn.addEventListener("click", function() {
  if (htmlTag.lang === "en") {
    htmlTag.lang = "el";
    languageBtn.textContent = "Switch to English";
    document.querySelector("h1").textContent = "Το Προφίλ Μου";
    document.querySelector("a[href='#about']").textContent = "Σχετικά Με Εμένα";
    document.querySelector("a[href='#services']").textContent = "Οι Υπηρεσίες Μου";
    document.querySelector("a[href='#portfolio']").textContent = "Πορτφόλιο";
    document.querySelector("a[href='#contact']").textContent = "Επικοινωνία";
    document.querySelector("label[for='name']").textContent = "Όνομα:";
    document.querySelector("label[for='email']").textContent = "Ηλεκτρονική Διεύθυνση:";
    document.querySelector("label[for='message']").textContent = "Μήνυμα:";
    document.querySelector("input[type='submit']").value = "Αποστολή";
  } else {
    htmlTag.lang = "en";
    languageBtn.textContent = "Ελληνικά";
    document.querySelector("h1").textContent = "My Freelance Portfolio";
    document.querySelector("a[href='#about']").textContent = "About Me";
    document.querySelector("a[href='#services']").textContent = "My Services";
    document.querySelector("a[href='#portfolio']").textContent = "Portfolio";
    document.querySelector("a[href='#contact']").textContent = "Contact Me";
    document.querySelector("label[for='name']").textContent = "Name:";
    document.querySelector("label[for='email']").textContent = "Email:";
    document.querySelector("label[for='message']").textContent = "Message:";
    document.querySelector("input[type='submit']").value = "Send";
  }
});