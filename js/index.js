// document.getElementById("showcart").style.display = "none";
var k = 0;
var hinh = [];
var vth = 0;
for (var i = 0; i < 6; i++) {
    hinh[i] = new Image();
    hinh[i].src = "./images/ss" + (i + 1) + ".png";
}

function loadAnh() {
    var t = document.getElementById("slideshow");
    t.src = hinh[k].src;
    if (k == hinh.length) {
        k = 0;
    } else {
        k++;
    }
    document.getElementById("soanh").innerHTML = k + 1 + "/8";
}

function next() {
    if (k > hinh.length - 1) {
        k = 0;
    } else {
        k++;
    }
    var hinhh = document.getElementById("slideshow");
    hinhh.src = hinh[k].src;
    document.getElementById("soanh").innerHTML = k + 1 + "/8";

}

function back() {
    if (k == 0) {
        k = hinh.length - 1;
    } else {
        k--;
    }
    var hinhb = document.getElementById("slideshow");
    hinhb.src = hinh[k].src;
    document.getElementById("soanh").innerHTML = k + 1 + "/8";

}

var arrsp = new Array();

function themvaogiohang(x) {
    var nodeSP = x.parentElement.children;
    var hinh = nodeSP[0].children[0].src;
    var gia = nodeSP[1].children[0].innerText;
    var ten = nodeSP[2].innerText;
    var soluong = nodeSP[3].value;
    var spdm = [hinh, ten, gia, soluong];
    arrsp.push(spdm);
    sessionStorage.setItem("sp", JSON.stringify(arrsp));
    demsoluongsp();


    // console.log(arrsp);

}



function demsoluongsp() {
    var a = arrsp.length;
    document.getElementById("countsp").innerText = a;
}

// function showcart() {
//     var x = document.getElementById("showcart");
//     // if(x.style.display == none){
//     //     x.style.display = "block";
//     // }else{
//     //     x.style.display = "none";
//     // }
//     showmycart();
// }

function xoa(x) {
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    var sp = JSON.parse(sessionStorage.getItem("sp"));
    // Xoa sp khoi mang
    for (var k = 0; k < sp.length; k++) {
        if (sp[k][1] == tensp) {
            sp.splice(k, 1);
            sessionStorage.setItem("sp",JSON.stringify(sp));
        }
    }
    tr.remove();
    var tongdon=0;
    var h = document.querySelectorAll("#tt");
    console.log(h);
    for (let i = 0; i < h.length; i++) {
        tongdon += Number(h[i].innerText);
    }
    document.getElementById("tongtien").innerText = tongdon;
    stt();
}
function tinhlaidon(x) {
    var gh_str = sessionStorage.getItem("sp");
    var giohang = JSON.parse(gh_str);
    var tr = x.parentElement.parentElement;
    var dg = parseInt(tr.children[3].innerHTML);
    var tt = 0;
    var sl = Number(tr.children[4].children[0].value);
    var td = document.getElementById("tongtien").innerHTML;
    console.log(td);
    var tongdon = 0;
    // console.log(sl);

    var tensp = tr.children[2].innerText;
    if (sl == null) {
        dongy = confirm("xóa sản phẩm khỏi giỏ hàng. OK?");
        // Xoa tren giao dien
        if (dongy == true)
            tr.remove();
        // Xoa sp khoi mang
        for (let i = 0; i < giohang.length; i++) {
            if (giohang[i][1] == tensp) {
                giohang.splice(i, 1);
            }
            console.log(...giohang);
        }
    } else {
        for (let i = 0; i < giohang.length; i++) {
            if (giohang[i][1] == tensp) {
                giohang[i][3] = Number(sl);
            }
        }
        tt = Number(dg) * Number(sl);
        tr.children[5].innerHTML = tt;
    }
    var h = document.querySelectorAll("#tt");
    for (let i = 0; i < h.length; i++) {
        tongdon += Number(h[i].innerText);
    }
    document.getElementById("tongtien").innerText = tongdon;
    sessionStorage.setItem("sp", JSON.stringify(giohang));
}
function stt(){
    var stt = document.querySelectorAll("#stt");
    for(var i=0;i<stt.length;i++){
        stt[i].innerText=(i+1);
    }
}
