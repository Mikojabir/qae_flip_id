class popUpTrx {
    public void() {

        //element 
        word1 = element1;
        word2 = element2;
        btn1 = elBtn1;
        btn2 = elBtn2;

        //wording
        String a = "Yakin ingin melanjutkan transaksi ?"
        String b = "Kamu melakukan request transaksi di luar jam operasional Flip. Transaksimu akan di proses pada jam operasional Flip. Senin-Minggu, pukul 07:00-20:00 WIB"
        String btnBatal = "BATAL"
        String btnYakin = "Yakin"

        //Verify wording
        if (word1 === a && word2 === b) {
            println("Passed " + a)
            println("Passed " + b)
        } else {
            Println("ERROR..!! check lagi ya")
        }
        
        //Verify Label Button
        if (btn1 === btnBatal && btn2 === elBtn2) {
            println("Passed " + btnBatal)
            println("Passed " + btnYakin)
        } else {
            Println("ERROR..!! check lagi ya")
        }
    }
}