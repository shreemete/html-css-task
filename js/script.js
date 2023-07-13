function valid() {
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (mail == "") {
        document.getElementById("fillEmail").style.display = "flex";
        document.getElementById("invalidEmail").style.display = "none";
        if (pass == "") {
            document.getElementById("fillPass").style.display = "flex";
            document.getElementById("invalidPass").style.display = "none";
            return false;
        } else if (pass != "Pass@123") {
            document.getElementById("invalidPass").style.display = "flex";
            document.getElementById("fillPass").style.display = "none";
            return false;
        } else {
            return false;
        }
    }

    else if (mail != "sankey@gmail.com") {
        if (!mail.includes("@") || !mail.includes(".com")) {
            document.getElementById("invalidSyntax").style.display = "flex";
            document.getElementById("invalidEmail").style.display = "none";
            document.getElementById("fillEmail").style.display = "none";
        } else {
            document.getElementById("invalidEmail").style.display = "flex";
            document.getElementById("fillEmail").style.display = "none";
            document.getElementById("invalidSyntax").style.display = "none";

        }

        if (pass == "") {
            document.getElementById("fillPass").style.display = "flex";
            document.getElementById("invalidPass").style.display = "none";
            return false;
        } else if (pass != "Pass@123") {
            document.getElementById("invalidPass").style.display = "flex";
            document.getElementById("fillPass").style.display = "none";
            return false;

        } else {
            document.getElementById("invalidEmail").style.display = "none";
            return false;
        }
    }
    else if (mail == "sankey@gmail.com") {

        document.getElementById("invalidEmail").style.display = "none";
        document.getElementById("fillEmail").style.display = "none";
        document.getElementById("invalidSyntax").style.display = "none";
        if (pass == "") {
            document.getElementById("fillPass").style.display = "flex";
            document.getElementById("invalidPass").style.display = "none";
            return false;
        } else if (pass != "Pass@123") {
            document.getElementById("invalidPass").style.display = "flex";
            document.getElementById("fillPass").style.display = "none";
            return false;

        }
    }


}
