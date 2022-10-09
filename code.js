var resimdizisi = new Array();
var acilanresimdzisi = new Array();
var acilanresimsay = 0;

function baslangic() {
    var i, j, rasgele;
    var resimsayisi = 8;
    var rasgeleResimDizisi = new Array();

    for (i = 0; i < 2; i++) {
        for (j = 0; j < resimsayisi; j++) {
            resimdizisi.push(j + ".jpg");
        }
    }
    for (i = 0; i < resimsayisi * 2; i++) {
        rasgele = Math.round(Math.random() * (resimdizisi.length - 1));
        rasgeleResimDizisi[i] = resimdizisi[rasgele];
        resimdizisi.splice(rasgele, 1);
    }
    resimdizisi = rasgeleResimDizisi;
}
$(document).ready(function (e) {
    $(".ustdiv").click
        (
            function () {
                $("#saha").empty();
                resimdizisi = [];
                baslangic();
                var indis = 0;

                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++, indis++) {
                        $(".oyunalani").append("<div class='kutu'><img src='Pictures/arkaplan.jpg' id='" + resimdizisi[indis] + "'onclick='resimac(this)'></div>");
                    }
                    $("#saha").append("<div class='altsatir'></div>");
                }
            }
        )

});
function resimac(nesne) {
    if (acilanresimsay != 2) {
        if (acilanresimsay == 0) {
            nesne.src = "Pictures/" + nesne.id;
            acilanresimdzisi[0] = nesne;
            acilanresimsay = 1;
        }
        else if (nesne != acilanresimdzisi[0]) {
            nesne.src = "Pictures/" + nesne.id;
            acilanresimdzisi[1] = nesne;
            acilanresimsay = 2;
            setTimeout("bekle()", 1500);
        }
    }
}
function bekle() {
    if (acilanresimdzisi[1].src == acilanresimdzisi[0].src) {
        acilanresimdzisi[0].hidden = true;
        acilanresimdzisi[1].hidden = true;

    }
    else {
        acilanresimdzisi[0].src = "Pictures/arkaplan.jpg"
        acilanresimdzisi[1].src = "Pictures/arkaplan.jpg"
    }
    acilanresimsay = 0;
}

//test deneme