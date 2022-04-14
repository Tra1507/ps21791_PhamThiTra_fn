function kiemtra(){
    var loi = "";
    // KT MSSV
    var masv = document.getElementById("masv");
        if(masv.value==""){
            masv.className = "loi";
            loi += "Mã sinh viên không được bỏ trống <br>";
        }else if(masv.value.length != 7){
            masv.className = "loi";
            loi += "Mã sinh viên không đúng 7 ký tự <br>";
        }else{
            masv.className = "txt";
        }
    // KT ho ten
    var hoten = document.getElementById("hoten");
        if(hoten.value == ""){
            hoten.className = "loi";
            loi += "Họ tên không được bỏ trống <br>";
        }else if(hoten.value.length>30){
            hoten.className = "loi";
            loi += "Họ tên quá dài";
        }else{
            hoten.className = "txt";
        }
    // KT email
    var email = document.getElementById("email");
        if(email.value == ""){
            email.className = "loi";
            loi += "Email không đươc bỏ trống <br>";
        }else{
            email.className = "txt";
        }
    // KT gioi tinh
    dem = 0;
    var arr_gioitinh = document.getElementsByName("gioitinh");
    for(var i=0; i<arr_gioitinh.length; i++){
        if(arr_gioitinh[i].checked == true) dem++;
    }
    if(dem==0){
        document.getElementById("fs1").className = "loi";
        loi += "Phải chọn giới tính <br>";
    }else{
        document.getElementById("fs1").className = "";
    }
    // KT so thich
    arr_sothich = document.getElementsByName("st");
    dem =0;
    for(var i=0; i<arr_sothich.length; i++){
        if(arr_sothich[i].checked == true) dem++;
    }
    if(dem==0){
        document.getElementById("fs2").className = "loi";
        loi += "Phải chọn ít nhất 1 sở thích <br>";
    }else{
        document.getElementById("fs2").className = "";
    }
    // KT quoc tich
    var quoctich = document.getElementById("quoctich");
        if(quoctich.value == 0){
            quoctich.className = "loi";
            loi += "Phải chọn quốc tịch <br>";
        }else{
            quoctich.className = "txt";
        }
    // KT ghi chu
    var ghichu = document.getElementById("ghichu");
    if(ghichu.value.length>200){
        ghichu.className = "loi";
        loi += "Ghi chú dưới 200 ký tự <br>";
    }else{
        ghichu.className = "txt";
    }
    // Tra ve
    if(loi != ""){
        document.getElementById('baoloi').innerHTML = loi;
        return false;
    }
}