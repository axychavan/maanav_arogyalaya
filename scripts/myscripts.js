function sendWhatsapp() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var age = document.getElementById("age").value;
    var location = document.getElementById("location").value;
    var batchTime = document.getElementById("batchTime").value;
    var disorders = document.getElementById("disorders").value;
    var treatment = document.getElementById("treatment").value;

    if (disorders == "") {
        disorders = "NA";
    }
    else {
        disorders = document.getElementById("disorders").value;
    }

    if (treatment == "") {
        treatment = "NA";
    }
    else {
        treatment = document.getElementById("disorders").value;
    }

    if (this.name !== "" && phone !== "" && height !== "" && weight !== "" && age !== "" && location !== "" && batchTime !== "") {
        var url = "https://wa.me/9881795173?text="
            + "Hi, I am interested and want to know more about the yog classes, here are my details:" + "%0a"
            + "Name: " + name + "%0a"
            + "Phone: " + phone + "%0a"
            + "Height: " + height + "%0a"
            + "Weight: " + weight + "%0a"
            + "Age: " + age + "%0a"
            + "Location: " + location + "%0a"
            + "Preferred Batch: " + batchTime + "%0a"
            + "disorders: " + disorders + "%0a"
            + "treatment: " + treatment + "%0a"

        window.open(url, '_blank').focus();
    } else {
        alert("Please fill all the details");
        console.log(name);
    }
}