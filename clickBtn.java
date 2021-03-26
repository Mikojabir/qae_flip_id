class clickBtn{
    public void btnClick() {
        btnBatal = elementbtn1;
        btnBatal2 = elementbtn2;

        //button Batal
        el_1 = webUI.verifyElement(btnBatal)
        if (el_1 == true) {
            webUI.click(btnBatal)
            println("click button successfully")
        } else {
            prinltn("ERROR..! Check lagi")
        }

        //button Yakin
        el_2 = webUI.verifyElement(btnYakin)
        if (el_2 == true) {
            webUI.click(btnYakin)
            println("click button successfully")
        } else {
            prinltn("ERROR..! Check lagi")
        }

    }
}
