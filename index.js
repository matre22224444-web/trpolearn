const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
const BoxGlavmenu=[box1=document.getElementById("BoxGlav1"), box2=document.getElementById("BoxGlav2"), box3=document.getElementById("BoxGlav3")]
const BoxTeormenu=[Trbox1=document.getElementById("Box1Teor"), Trbox2=document.getElementById("Box2Teor"),Trbox3=document.getElementById("Box3Teor"),Trbox4=document.getElementById("Box4Teor"), Trbox5=document.getElementById("Box5Teor"),Trbox6=document.getElementById("Box6Teor"),Trbox7=document.getElementById("Box7Teor"),Trbox8=document.getElementById("Box8Teor"),Trbox9=document.getElementById("Box9Teor"),Trbox10=document.getElementById("Box10Teor"),Trbox11=document.getElementById("Box11Teor"),Trbox12=document.getElementById("Box12Teor"), Trbox13=document.getElementById("Box13Teor"),Trbox14=document.getElementById("Box14Teor"),Trbox15=document.getElementById("Box15Teor"),Trbox16=document.getElementById("Box16Teor"),Trbox17=document.getElementById("Box17Teor"),Trbox18=document.getElementById("Box18Teor"),Trbox19=document.getElementById("Box19Teor"),Trbox20=document.getElementById("Box20Teor"),Trbox21=document.getElementById("Box21Teor"),Trbox22=document.getElementById("Box22Teor"),Trbox23=document.getElementById("Box23Teor"),Trbox24=document.getElementById("Box24Teor"),Trbox25=document.getElementById("Box25Teor"),Trbox26=document.getElementById("Box26Teor"),Trbox27=document.getElementById("Box27Teor"),Trbox28=document.getElementById("Box28Teor"),Trbox29=document.getElementById("Box29Teor"),Trbox30=document.getElementById("Box30Teor"),Trbox31=document.getElementById("Box31Teor"),Trbox32=document.getElementById("Box32Teor"),Trbox33=document.getElementById("Box33Teor"),Trbox34=document.getElementById("Box34Teor"),Trbox35=document.getElementById("Box35Teor"),Trbox36=document.getElementById("Box36Teor"),Trbox37=document.getElementById("Box37Teor"),Trbox38=document.getElementById("Box38Teor")]
const BoxTestmenu=[Testbox1=document.getElementById("Box1Test"),Testbox2=document.getElementById("Box2Test"),Testbox3=document.getElementById("Box3Test"),Testbox4=document.getElementById("Box4Test"),Testbox5=document.getElementById("Box5Test"),Testbox6=document.getElementById("Box6Test"),Testbox7=document.getElementById("Box7Test"),Testbox8=document.getElementById("Box8Test"),Testbox9=document.getElementById("Box9Test"),Testbox10=document.getElementById("Box10Test"),Testbox11=document.getElementById("Box11Test"),Testbox12=document.getElementById("Box12Test")]
const BoxGravmenu=[TestGrav1=document.getElementById("Box1Grav"),TestGrav2=document.getElementById("Box2Grav")]
const BoxSostTeor=["Teoria1","Teoria2","Teoria3","Teoria4","Teoria5","Teoria6","Teoria7","Teoria8","Teoria9","Teoria10","Teoria11","Teoria12","Teoria13","Teoria14","Teoria15","Teoria16","Teoria17","Teoria18","Teoria19","Teoria20","Teoria21","Teoria22","Teoria23","Teoria24","Teoria25","Teoria26","Teoria27","Teoria28","Teoria29","Teoria30","Teoria31","Teoria32","Teoria33","Teoria34","Teoria35","Teoria36","Teoria37","Teoria38"]
const BoxSostTest=["Test1","Test2","Test3","Test4","Test5","Test6","Test7","Test8","Test9","Test10","Test11","Test12"]
const BoxTest=[Test1=document.querySelectorAll(".test1"),Test2=document.querySelectorAll(".test2"),Test3=document.querySelectorAll(".test3"),Test4=document.querySelectorAll(".test4"),Test5=document.querySelectorAll(".test5"),Test6=document.querySelectorAll(".test6"),Test7=document.querySelectorAll(".test7"),Test8=document.querySelectorAll(".test8"),Test9=document.querySelectorAll(".test9"),Test10=document.querySelectorAll(".test10"),Test11=document.querySelectorAll(".test11"),Test12=document.querySelectorAll(".test12")]
const BoxDopTeori=[Dop1=document.getElementById("boxosnofinfo1"), Dop2=document.getElementById("boxosnofinfo2"),Dop3=document.getElementById("boxosnofinfo3"),Dop4=document.getElementById("boxosnofinfo4"),Dop5=document.getElementById("boxosnofinfo5"),Dop6=document.getElementById("boxosnofinfo6"),Dop7=document.getElementById("boxosnofinfo7"),Dop8=document.getElementById("boxosnofinfo8"),Dop9=document.getElementById("boxosnofinfo9"),Dop10=document.getElementById("boxosnofinfo10"),Dop11=document.getElementById("boxosnofinfo11"),Dop12=document.getElementById("boxosnofinfo12"),Dop13=document.getElementById("boxosnofinfo13"),Dop14=document.getElementById("boxosnofinfo14"),Dop15=document.getElementById("boxosnofinfo15"),Dop16=document.getElementById("boxosnofinfo16"),Dop17=document.getElementById("boxosnofinfo17"),Dop18=document.getElementById("boxosnofinfo18"),Dop19=document.getElementById("boxosnofinfo19"),Dop20=document.getElementById("boxosnofinfo20"),Dop21=document.getElementById("boxosnofinfo21"),Dop22=document.getElementById("boxosnofinfo22"),Dop23=document.getElementById("boxosnofinfo23"),Dop24=document.getElementById("boxosnofinfo24"),Dop25=document.getElementById("boxosnofinfo25"),Dop26=document.getElementById("boxosnofinfo26"),Dop27=document.getElementById("boxosnofinfo27"),Dop28=document.getElementById("boxosnofinfo28"),Dop29=document.getElementById("boxosnofinfo29"),Dop30=document.getElementById("boxosnofinfo30"),Dop31=document.getElementById("boxosnofinfo31"),Dop32=document.getElementById("boxosnofinfo32"),Dop33=document.getElementById("boxosnofinfo33"),Dop34=document.getElementById("boxosnofinfo34"),Dop35=document.getElementById("boxosnofinfo35"),Dop36=document.getElementById("boxosnofinfo36"),Dop37=document.getElementById("boxosnofinfo37"),Dop38=document.getElementById("boxosnofinfo38")]
const BoxButtonadd=[document.querySelector(".buttonadd1"),document.querySelector(".buttonadd2"),document.querySelector(".buttonadd3"),document.querySelector(".buttonadd4"),document.querySelector(".buttonadd5")]
const BoxTextIdef0=[document.querySelector(".BoxText1"),document.querySelector(".BoxText2"),document.querySelector(".BoxText3"),document.querySelector(".BoxText4"),document.querySelector(".BoxText5")]
const ButtonDopInfo=document.querySelectorAll(".osnofinfo")
const ButtonBack=document.querySelectorAll(".BackButton")
const SVGDOP=document.querySelectorAll(".svgdopinfo")
const pravo=document.getElementById("pr")
const vlevo=document.getElementById("vl")
const center=document.getElementById("cen")
const FON=document.querySelector(".fon")
const DOPimg=document.querySelector(".dopinfoimg")
const Glavmenu=document.querySelectorAll(".glavmenu")
const Teorimenu=document.querySelectorAll(".Teorimenu")
const Testmenu=document.querySelectorAll(".testmenu")
const Gravmenu=document.querySelectorAll(".gravmenu")
const Yprav=document.querySelector(".puntkYprav")
const BoxTer1=document.querySelectorAll(".teoria1")
const BoxTer2=document.querySelectorAll(".teoria2")
const BoxTer3=document.querySelectorAll(".teoria3")
const BoxTer4=document.querySelectorAll(".teoria4")
const BoxTer5=document.querySelectorAll(".teoria5")
const BoxTer6=document.querySelectorAll(".teoria6")
const BoxTer7=document.querySelectorAll(".teoria7")
const BoxTer8=document.querySelectorAll(".teoria8")
const BoxTer9=document.querySelectorAll(".teoria9")
const BoxTer10=document.querySelectorAll(".teoria10")
const BoxTer11=document.querySelectorAll(".teoria11")
const BoxTer12=document.querySelectorAll(".teoria12")
const BoxTer13=document.querySelectorAll(".teoria13")
const BoxTer14=document.querySelectorAll(".teoria14")
const BoxTer15=document.querySelectorAll(".teoria15")
const BoxTer16=document.querySelectorAll(".teoria16")
const Bo7=document.querySelectorAll(".teoria17")
const BoxTer18=document.querySelectorAll(".teoria18")
const BoxTer19=document.querySelectorAll(".teoria19")
const BoxTer20=document.querySelectorAll(".teoria20")
const BoxTer21=document.querySelectorAll(".teoria21")
const BoxTer22=document.querySelectorAll(".teoria22")
const BoxTer23=document.querySelectorAll(".teoria23")
const BoxTer24=document.querySelectorAll(".teoria24")
const BoxTer25=document.querySelectorAll(".teoria25")
const BoxTer26=document.querySelectorAll(".teoria26")
const BoxTer27=document.querySelectorAll(".teoria27")
const BoxTer28=document.querySelectorAll(".teoria28")
const BoxTer29=document.querySelectorAll(".teoria29")
const BoxTer30=document.querySelectorAll(".teoria30")
const BoxTer31=document.querySelectorAll(".teoria31")
const BoxTer32=document.querySelectorAll(".teoria32")
const BoxTer33=document.querySelectorAll(".teoria33")
const BoxTer34=document.querySelectorAll(".teoria34")
const BoxTer35=document.querySelectorAll(".teoria35")
const BoxTer36=document.querySelectorAll(".teoria36")
const BoxTer37=document.querySelectorAll(".teoria37")
const BoxTer38=document.querySelectorAll(".teoria38")
const test1=document.getElementById("Test1")
const test2=document.getElementById("Test2")
const test3=document.getElementById("Test3")
const test4=document.getElementById("Test4")
const test5=document.getElementById("Test5")
const test6=document.getElementById("Test6")
const test7=document.getElementById("Test7")
const test8=document.getElementById("Test8")
const test9=document.getElementById("Test9")
const test10=document.getElementById("Test10")
const test11=document.getElementById("Test11")
const test12=document.getElementById("Test12")
const grafik1=document.getElementById("GrafikIDEF0Contest")
const grafik2=document.querySelector(".UMLDIAGRAM")
const ButtoProvTest=document.querySelectorAll(".Proverkatest")
const ButtonOtprav=document.querySelector(".butOt")
const TextVvod=document.querySelector(".TextVod")
const ResultTest=document.querySelector(".ResultatTes")
let ActiveTest
let rasGlavmenu;
let rasTermenu;
let rasTestmenu;
let rasGravMenu
let ActiveButtonAdd;
//Сохранение состояния сайта
let SostSite = sessionStorage.getItem('SostSite');
window.onload=function(){Sostsite()}
if (!SostSite) {
    SostSite = 'Glavmenu';
    sessionStorage.setItem('SostSite', 'Glavmenu');
}
function Sostsite(){
    for(let i=0;i<BoxDopTeori.length;i++){
        if(BoxDopTeori[i]){
            BoxDopTeori[i].style.display="none"
            BoxDopTeori[i].style.opacity="0"
        }
    }
    rasGlavmenu=1
    rasTermenu=1
    rasTestmenu=1
    rasGravMenu=1
    Glavmenu.forEach(function(item){
        item.style.display = "none";
        item.style.opacity = "0";
    });
    Teorimenu.forEach(function(item){
        item.style.display = "none";
        item.style.opacity = "0";
    });
    Testmenu.forEach(function(item){
        item.style.display = "none";
        item.style.opacity = "0";
    });
    Gravmenu.forEach(function(item){
        item.style.display = "none";
        item.style.opacity = "0";
    });
    for (let i = 1; i <= 38; i++) {
    let elements = document.querySelectorAll(`.teoria${i}`);
    elements.forEach(item => {
        item.style.display = "none";
        item.style.opacity = "0";
    });
}
    for (let i = 1; i <= 12; i++) {
    let element = document.getElementById(`Test${i}`);
    if (element) { 
        element.style.display = "none";
        element.style.opacity = "0";
    }
}
    Yprav.style.display="none"
    if(SostSite==='Glavmenu'){
        Glavmenu.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{Glavmenu.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Yprav.style.display=""
        BoxGlavmenu[0].classList.add("centerRaspolozhenie")
        BoxGlavmenu[1].classList.add("pravoRaspolozhenie")
        Helper.className="Helper HelperOsnov"
        for(let i=0;i<BoxGlavmenu.length;i++){
            if(i>1){
                BoxGlavmenu[i].classList.add("pravoRaspolozhenieOff")
            }
        }
    }
    else if(SostSite==="Teorimenu"){
        Teorimenu.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{Teorimenu.forEach(function(item){item.style.opacity="1"})},600)
         Yprav.style.display=""
         Helper.className="Helper HelperOsnov"
         BoxTeormenu[0].classList.add("centerRaspolozhenie")
         BoxTeormenu[1].classList.add("pravoRaspolozhenie")
         for(let i=0;i<BoxTeormenu.length;i++){
            if(i>1){
                BoxTeormenu[i].classList.add("pravoRaspolozhenieOff")
            }
        }
    }
    else if(SostSite==="Testmenu"){
        Testmenu.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{Testmenu.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Yprav.style.display=""
         Helper.className="Helper HelperOsnov"
         BoxTestmenu[0].classList.add("centerRaspolozhenie")
         BoxTestmenu[1].classList.add("pravoRaspolozhenie")
         for(let i=0;i<BoxTestmenu.length;i++){
            if(i>1){
                BoxTestmenu[i].classList.add("pravoRaspolozhenieOff")
            }
        }
    }
    else if(SostSite==="Gravmenu"){
        Gravmenu.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{Gravmenu.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #2d0d52, #431683, #6b0faf)"
         Yprav.style.display=""
         Helper.className="Helper HelperOsnov"
         BoxGravmenu[0].classList.add("centerRaspolozhenie")
         BoxGravmenu[1].classList.add("pravoRaspolozhenie")
    }
    else if(SostSite==="Teoria1"){
        BoxTer1.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer1.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
        
    }
    else if(SostSite==="Teoria2"){
        BoxTer2.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer2.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria3"){
        BoxTer3.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer3.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria4"){
        BoxTer4.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer4.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria5"){
        BoxTer5.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer5.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
       Helper.className="Helper HelperTer"
    }
     else if(SostSite==="Teoria6"){
        BoxTer6.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer6.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria7"){
        BoxTer7.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer7.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria8"){
        BoxTer8.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer8.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria9"){
        BoxTer9.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer9.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria10"){
        BoxTer10.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer10.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria11"){
        BoxTer11.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer11.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria12"){
        BoxTer12.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer12.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria13"){
        BoxTer13.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer13.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria14"){
        BoxTer14.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer14.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria15"){
        BoxTer15.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer15.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria16"){
        BoxTer16.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer16.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria17"){
        BoxTer17.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer17.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria18"){
        BoxTer18.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer18.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria19"){
        BoxTer19.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer19.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria20"){
        BoxTer20.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer20.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria21"){
        BoxTer21.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer21.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria22"){
        BoxTer22.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer22.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria23"){
        BoxTer23.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer23.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria24"){
        BoxTer24.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer24.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria25"){
        BoxTer25.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer25.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria26"){
        BoxTer26.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer26.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria27"){
        BoxTer27.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer27.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria28"){
        BoxTer28.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer28.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria29"){
        BoxTer29.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer29.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria30"){
        BoxTer30.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer30.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria31"){
        BoxTer31.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer31.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria32"){
        BoxTer32.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer32.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria33"){
        BoxTer33.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer33.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria34"){
        BoxTer34.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer34.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria35"){
        BoxTer35.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer35.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria36"){
        BoxTer36.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer36.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria37"){
        BoxTer37.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer37.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Teoria38"){
        BoxTer38.forEach(function(item){item.style.display="block"})
        const time=setTimeout(()=>{BoxTer38.forEach(function(item){item.style.opacity="1"})},600)
        FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
         Helper.className="Helper HelperTer"
        Helper.style.left="2%"
    }
     else if(SostSite==="Test1"){
        test1.style.display="block"
        const time=setTimeout(()=>{test1.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
        Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test2"){
        test2.style.display="block"
        const time=setTimeout(()=>{test2.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test3"){
        test3.style.display="block"
        const time=setTimeout(()=>{test3.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test4"){
        test4.style.display="block"
        const time=setTimeout(()=>{test4.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test5"){
        test5.style.display="block"
        const time=setTimeout(()=>{test5.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test6"){
        test6.style.display="block"
        const time=setTimeout(()=>{test6.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test7"){
        test7.style.display="block"
        const time=setTimeout(()=>{test7.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test8"){
        test8.style.display="block"
        const time=setTimeout(()=>{test8.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test9"){
        test9.style.display="block"
        const time=setTimeout(()=>{test9.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test10"){
        test10.style.display="block"
        const time=setTimeout(()=>{test10.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test11"){
        test11.style.display="block"
        const time=setTimeout(()=>{test11.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Test12"){
        test12.style.display="block"
        const time=setTimeout(()=>{test12.style.opacity="1"},600)
        FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
         Helper.className="Helper HelperTer"
    }
    else if(SostSite==="Grafik1"){
        grafik1.style.display="block"
        const time=setTimeout(()=>{grafik1.style.opacity="1"},600)
        FON.style.background="linear-gradient( #2d0d52, #431683, #6b0faf)"
        Helper.style.left="86%"
        Helper.style.width="10%"
        Helper.style.top="2%"
        eyes.style.top="30%"
    }
    else if(SostSite==="Grafik2"){
        grafik2.style.display="block"
        const time=setTimeout(()=>{grafik2.style.opacity="1"},600)
        FON.style.background="linear-gradient( #2d0d52, #431683, #6b0faf)"
        Helper.style.left="86%"
        Helper.style.width="10%"
        Helper.style.top="2%"
        eyes.style.top="30%"
    }
    else if(SostSite==="Autorise"){
        FON.style.background="linear-gradient(  #1a4d70, #2e6b8f, #3fa3cf)"}

}


pravo.addEventListener('mouseover', function(event) {
    const paths = pravo.querySelectorAll('path');
    paths.forEach(path => {
        path.style.fill = "blue";
        path.style.stroke = "blue";
    });
});
pravo.addEventListener('mouseout', function(event) {
    const paths = pravo.querySelectorAll('path');
    paths.forEach(path => {
        path.style.fill = "#FFFFFF";
        path.style.stroke = "#FFFFFF";
    });
});

center.addEventListener('mouseover', function(event) {
    const paths = center.querySelectorAll('path');
    paths.forEach(path => {
        path.style.fill = "blue";
        path.style.stroke = "blue";
    });
});
center.addEventListener('mouseout', function(event) {
    const paths = center.querySelectorAll('path');
    paths.forEach(path => {
        path.style.fill = "#FFFFFF";
        path.style.stroke = "#FFFFFF";
    });
});

vlevo.addEventListener('mouseover', function(event) {
    const paths = vlevo.querySelectorAll('path');
    paths.forEach(path => {
        path.style.fill = "blue";
        path.style.stroke = "blue";
    });
});
vlevo.addEventListener('mouseout', function(event) {
    const paths = vlevo.querySelectorAll('path');
    paths.forEach(path => {
        path.style.fill = "#FFFFFF";
        path.style.stroke = "#FFFFFF";
    });
});
BoxButtonadd.forEach(function(item){item.addEventListener("click",function(event){
    ActiveButtonAdd=item
    ButtonOtprav.style.display="block"
    TextVvod.style.display="block"
})})
ButtonOtprav.addEventListener("click",function(event){
    for(let i = 0; i < BoxButtonadd.length; i++) {
    if(BoxButtonadd[i] === ActiveButtonAdd) {
        if(TextVvod.value != '') {
            BoxTextIdef0[i].textContent = TextVvod.value
            BoxButtonadd[i].style.display = "none" 
            ButtonOtprav.style.display = "none"
            TextVvod.style.display = "none"
        }
        else {
            BoxButtonadd[i].style.display = "block"
            ButtonOtprav.style.display = "none"
            TextVvod.style.display = "none"
        }
    }
}
    for(let i=0;i<BoxTextIdef0.length;i++){
        if(BoxTextIdef0[i]===ActiveButtonAdd){
            if(TextVvod.value != '') {
            BoxTextIdef0[i].textContent = TextVvod.value
            BoxButtonadd[i].style.display = "none" 
            ButtonOtprav.style.display = "none"
            TextVvod.style.display = "none"
        }
        else {
            BoxTextIdef0[i].textContent = ""
            BoxButtonadd[i].style.display = "block"
            ButtonOtprav.style.display = "none"
            TextVvod.style.display = "none"
        }
        }
    }
})
BoxTextIdef0.forEach(function(item){
    item.addEventListener("click",function(event){
        ActiveButtonAdd=item
        ButtonOtprav.style.display="block"
        TextVvod.style.display="block"
    })
})
ButtonDopInfo.forEach(function(item){item.addEventListener("click",function(event){
    for(let i=0;i<BoxSostTeor.length;i++){
        if(BoxSostTeor[i]===SostSite){
            if(BoxDopTeori[i].style.display===""){
                BoxDopTeori[i].style.display="block"
                const time=setTimeout(()=>{BoxDopTeori[i].style.opacity="1"},100)}
            else if(BoxDopTeori[i].style.display==="block"){
                BoxDopTeori[i].style.opacity="0"
                const time=setTimeout(()=>{BoxDopTeori[i].style.display=""},100)
            }
        }
    }
})})
ButtonBack.forEach(function(item){item.addEventListener("click",function(event){
    for(let i=0;i<BoxSostTeor.length;i++){
        if(SostSite===BoxSostTeor[i]){
            SostSite="Teorimenu"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();
            break;
        }
        else if(SostSite===BoxGlavmenu[i]){
            SostSite="Glavmenu"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();
            break;
        }
    }
})})
const ButtonDeleteIDEF0=document.querySelector(".ElementsRedakt")
ButtonDeleteIDEF0.addEventListener("click",function(event){
    for(let i=0;i<BoxTextIdef0.length;i++){
        if(BoxTextIdef0[i].textContent!=""){
            BoxTextIdef0[i].textContent=""
            BoxButtonadd[i].style.display="block"
        }
    }
})
let i
pravo.addEventListener('click',function(event){
    if (SostSite === "Glavmenu") {
        let center = -1;
        for (let i = 0; i < BoxGlavmenu.length; i++) {
            if (BoxGlavmenu[i].classList.contains("centerRaspolozhenie")) center = i;
        }
        if(center!=BoxGlavmenu.length-1){
            if(center===0){
                BoxGlavmenu[center].classList.replace("centerRaspolozhenie","vlevoRaspolozhenie")
                BoxGlavmenu[center+1].classList.replace("pravoRaspolozhenie","centerRaspolozhenie")
                BoxGlavmenu[center+2].classList.replace("pravoRaspolozhenieOff","pravoRaspolozhenie")
            }
            else if(center>0){
                BoxGlavmenu[center-1].classList.replace("vlevoRaspolozhenie","vlevoRaspolozhenieOff")
                BoxGlavmenu[center].classList.replace("centerRaspolozhenie","vlevoRaspolozhenie")
                BoxGlavmenu[center+1].classList.replace("pravoRaspolozhenie","centerRaspolozhenie")
                if(BoxGlavmenu[center+2]){
                    BoxGlavmenu[center+2].classList.replace("pravoRaspolozhenieOff","pravoRaspolozhenie")
                }
            }
            rasGlavmenu+=1
        }
        if(center===0){
            FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
        }
        else if(center===1){
            FON.style.background="linear-gradient( #2d0d52, #431683, #6b0faf)"
        }
    }
    else if(SostSite==="Teorimenu"){
        let center = -1;
        for (let i = 0; i < BoxTeormenu.length; i++) {
            if (BoxTeormenu[i].classList.contains("centerRaspolozhenie")) center = i;
        }
        if(center!=BoxTeormenu.length-1){
            if(center===0){
                BoxTeormenu[center].classList.replace("centerRaspolozhenie","vlevoRaspolozhenie")
                BoxTeormenu[center+1].classList.replace("pravoRaspolozhenie","centerRaspolozhenie")
                BoxTeormenu[center+2].classList.replace("pravoRaspolozhenieOff","pravoRaspolozhenie")
            }
            else if(center>0){
                BoxTeormenu[center-1].classList.replace("vlevoRaspolozhenie","vlevoRaspolozhenieOff")
                BoxTeormenu[center].classList.replace("centerRaspolozhenie","vlevoRaspolozhenie")
                BoxTeormenu[center+1].classList.replace("pravoRaspolozhenie","centerRaspolozhenie")
                if(BoxTeormenu[center+2]){
                    BoxTeormenu[center+2].classList.replace("pravoRaspolozhenieOff","pravoRaspolozhenie")
                }
            }
            rasTermenu+=1
        }
    }
    else if(SostSite==="Testmenu"){
        let center = -1;
        for (let i = 0; i < BoxTestmenu.length; i++) {
            if (BoxTestmenu[i].classList.contains("centerRaspolozhenie")) center = i;
        }
        if(center!=BoxTestmenu.length-1){
            if(center===0){
                BoxTestmenu[center].classList.replace("centerRaspolozhenie","vlevoRaspolozhenie")
                BoxTestmenu[center+1].classList.replace("pravoRaspolozhenie","centerRaspolozhenie")
                BoxTestmenu[center+2].classList.replace("pravoRaspolozhenieOff","pravoRaspolozhenie")
            }
            else if(center>0){
                BoxTestmenu[center-1].classList.replace("vlevoRaspolozhenie","vlevoRaspolozhenieOff")
                BoxTestmenu[center].classList.replace("centerRaspolozhenie","vlevoRaspolozhenie")
                BoxTestmenu[center+1].classList.replace("pravoRaspolozhenie","centerRaspolozhenie")
                if(BoxTestmenu[center+2]){
                    BoxTestmenu[center+2].classList.replace("pravoRaspolozhenieOff","pravoRaspolozhenie")
                }
            }
            rasTestmenu+=1
        }
    }
    else if(SostSite==="Gravmenu"){
        let center = -1;
        for (let i = 0; i < BoxGravmenu.length; i++) {
            if (BoxGravmenu[i].classList.contains("centerRaspolozhenie")) center = i;
        }
        
        if (center === 0) {
            BoxGravmenu[0].classList.replace("centerRaspolozhenie", "vlevoRaspolozhenie");
            BoxGravmenu[1].classList.replace("pravoRaspolozhenie", "centerRaspolozhenie");
            rasGravMenu = 2;
        }
    }
})

vlevo.addEventListener('click',function(event){
    if(SostSite==="Glavmenu"){
        let center = -1;
        for (let i = 0; i < BoxGlavmenu.length; i++) {
            if (BoxGlavmenu[i].classList.contains("centerRaspolozhenie")) center = i;
        }
        if(center!=0){
            if(center===BoxGlavmenu.length-1){
                BoxGlavmenu[center].classList.replace("centerRaspolozhenie","pravoRaspolozhenie")
                BoxGlavmenu[center-1].classList.replace("vlevoRaspolozhenie","centerRaspolozhenie")
                BoxGlavmenu[center-2].classList.replace("vlevoRaspolozhenieOff","vlevoRaspolozhenie")
            }
            else if(center<BoxGlavmenu.length-1){
                BoxGlavmenu[center+1].classList.replace("pravoRaspolozhenie","pravoRaspolozhenieOff")
                BoxGlavmenu[center].classList.replace("centerRaspolozhenie","pravoRaspolozhenie")
                BoxGlavmenu[center-1].classList.replace("vlevoRaspolozhenie","centerRaspolozhenie")
                if(BoxGlavmenu[center-2]){
                    BoxGlavmenu[center-2].classList.replace("vlevoRaspolozhenieOff","vlevoRaspolozhenie")
                }
            }
        rasGlavmenu-=1
        }
        
        if(center===2){
            FON.style.background="linear-gradient( #0d1f52, #164283, #0f5eaf)"
        }
        else if(center===1){
             FON.style.background="linear-gradient( #1a4d70, #2e6b8f, #3fa3cf)"
        }
    }
    else if(SostSite==="Teorimenu"){
        let center = -1;
        for (let i = 0; i < BoxTeormenu.length; i++) {
            if (BoxTeormenu[i].classList.contains("centerRaspolozhenie")) center = i;
        }
        if(center!=0){
            if(center===BoxTeormenu.length-1){
                BoxTeormenu[center].classList.replace("centerRaspolozhenie","pravoRaspolozhenie")
                BoxTeormenu[center-1].classList.replace("vlevoRaspolozhenie","centerRaspolozhenie")
                BoxTeormenu[center-2].classList.replace("vlevoRaspolozhenieOff","vlevoRaspolozhenie")
            }
            else if(center<BoxTeormenu.length-1){
                BoxTeormenu[center+1].classList.replace("pravoRaspolozhenie","pravoRaspolozhenieOff")
                BoxTeormenu[center].classList.replace("centerRaspolozhenie","pravoRaspolozhenie")
                BoxTeormenu[center-1].classList.replace("vlevoRaspolozhenie","centerRaspolozhenie")
                if(BoxTeormenu[center-2]){
                    BoxTeormenu[center-2].classList.replace("vlevoRaspolozhenieOff","vlevoRaspolozhenie")
                }
            }
            rasTermenu-=1
        }
        
    }
    else if(SostSite==="Testmenu"){
        let center = -1;
        for (let i = 0; i < BoxTestmenu.length; i++) {
            if (BoxTestmenu[i].classList.contains("centerRaspolozhenie")) center = i;
        }
        if(center!=0){
            if(center===BoxTestmenu.length-1){
                BoxTestmenu[center].classList.replace("centerRaspolozhenie","pravoRaspolozhenie")
                BoxTestmenu[center-1].classList.replace("vlevoRaspolozhenie","centerRaspolozhenie")
                BoxTestmenu[center-2].classList.replace("vlevoRaspolozhenieOff","vlevoRaspolozhenie")
            }
            else if(center<BoxTestmenu.length-1){
                BoxTestmenu[center+1].classList.replace("pravoRaspolozhenie","pravoRaspolozhenieOff")
                BoxTestmenu[center].classList.replace("centerRaspolozhenie","pravoRaspolozhenie")
                BoxTestmenu[center-1].classList.replace("vlevoRaspolozhenie","centerRaspolozhenie")
                if(BoxTestmenu[center-2]){
                    BoxTestmenu[center-2].classList.replace("vlevoRaspolozhenieOff","vlevoRaspolozhenie")
                }
            }
            rasTestmenu-=1
        }
    }
    else if(SostSite==="Gravmenu"){
        let center = -1;
        for (let i = 0; i < BoxGravmenu.length; i++) {
            if (BoxGravmenu[i].classList.contains("centerRaspolozhenie")) center = i;
        }
        
        if (center === 1) {
            BoxGravmenu[1].classList.replace("centerRaspolozhenie", "pravoRaspolozhenie");
            BoxGravmenu[0].classList.replace("vlevoRaspolozhenie", "centerRaspolozhenie");
            rasGravMenu = 1;
        }
        
    }
})

center.addEventListener('click',function(event){
    if(SostSite==="Glavmenu"){
        if(rasGlavmenu===1){
            SostSite = 'Teorimenu';
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();
            texthelper.textContent="Здесь вам доступно 38 лекций."
            texthelper.style.opacity="1"
            const time=setTimeout(()=>{texthelper.style.opacity="0"},5000)
            Helper.style.left="3%"
             }
        else if(rasGlavmenu===2){
            SostSite="Testmenu"
             sessionStorage.setItem('SostSite', SostSite)
             Sostsite();}
        else if(rasGlavmenu===3){
            if(!isMobile){
            SostSite="Gravmenu"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
            else if(isMobile){
                texthelper.textContent="Извините, но редактор графиков доступен только для ПК!"
        texthelper.style.opacity="1"
        const time=setTimeout(()=>{texthelper.style.opacity="0"},6000)
            }
        }
    }
    else if(SostSite==="Teorimenu"){
        if(rasTermenu===1){    
            SostSite="Teoria1"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===2){    
            SostSite="Teoria2"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===3){    
            SostSite="Teoria3"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===4){    
            SostSite="Teoria4"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===5){    
            SostSite="Teoria5"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===6){    
            SostSite="Teoria6"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===7){    
            SostSite="Teoria7"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===8){    
            SostSite="Teoria8"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===9){    
            SostSite="Teoria9"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===10){    
            SostSite="Teoria10"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===11){    
            SostSite="Teoria11"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===12){    
            SostSite="Teoria12"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===13){    
            SostSite="Teoria13"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===14){    
            SostSite="Teoria14"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===15){    
            SostSite="Teoria15"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===16){    
            SostSite="Teoria16"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===17){    
            SostSite="Teoria17"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===18){    
            SostSite="Teoria18"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===19){    
            SostSite="Teoria19"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===20){    
            SostSite="Teoria20"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===21){    
            SostSite="Teoria21"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===22){    
            SostSite="Teoria22"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===23){    
            SostSite="Teoria23"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===24){    
            SostSite="Teoria24"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===25){    
            SostSite="Teoria25"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===26){    
            SostSite="Teoria26"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===27){    
            SostSite="Teoria27"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===28){    
            SostSite="Teoria28"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===29){    
            SostSite="Teoria29"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===30){    
            SostSite="Teoria30"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===31){    
            SostSite="Teoria31"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===32){    
            SostSite="Teoria32"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===33){    
            SostSite="Teoria33"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===34){    
            SostSite="Teoria34"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===35){    
            SostSite="Teoria35"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===36){    
            SostSite="Teoria36"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
        else if(rasTermenu===37){    
            SostSite="Teoria37"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
         else if(rasTermenu===38){    
            SostSite="Teoria38"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();}
    }
    else if(SostSite==="Testmenu"){
        if(rasTestmenu===1){    
            SostSite="Test1"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite();
        }
        else if(rasTestmenu===2){
            SostSite="Test2"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===3){
            SostSite="Test3"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===4){
            SostSite="Test4"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===5){
            SostSite="Test5"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===6){
            SostSite="Test6"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===7){
            SostSite="Test7"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===8){
            SostSite="Test8"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===9){
            SostSite="Test9"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===10){
            SostSite="Test10"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===11){
            SostSite="Test11"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
        else if(rasTestmenu===12){
            SostSite="Test12"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
        }
    }
    else if(SostSite==="Gravmenu"){
            if(rasGravMenu===1){
                SostSite="Grafik1"
                sessionStorage.setItem('SostSite', SostSite)
                Sostsite();}
            else if(rasGravMenu===2){
                SostSite="Grafik2"
                sessionStorage.setItem('SostSite', SostSite)
                Sostsite();
            }
    }
})
ButtoProvTest.forEach(function(item) {
    item.addEventListener("click", function(event) {
        console.log("оаоаоао");
        
        for(let i = 0; i < BoxSostTest.length; i++) {
            if(SostSite === BoxSostTest[i]) {
                ActiveTest = BoxTest[i];
            }
        }
        
        
        let vsegoDid = 0;      
        let Pravilno = 0;      
        
        for(let i = 0; i < ActiveTest.length; i++) {
            if(ActiveTest[i].checked) {
                vsegoDid++;      
                if(ActiveTest[i].value === "good") {
                    Pravilno++;
                }
            }
        }
        
        
        if(vsegoDid === 10) {
            if(Pravilno >= 8) {
                ResultTest.textContent = `Ваш результат: ${Pravilno}. Вам доступен следующий тест.`;
                ResultTest.style.display = "block";
                setTimeout(() => { ResultTest.style.opacity = "1"; }, 600);
                
                for(let i = 0; i < ActiveTest.length; i++) {
                    if(ActiveTest[i].checked) {
                        ActiveTest[i].checked = false;
                    }
                }
            } else {
                ResultTest.textContent = `Ваш результат: ${Pravilno}. Повторите теоретический материал и пройдите ещё раз тест.`;
                ResultTest.style.display = "block";
                setTimeout(() => { ResultTest.style.opacity = "1"; }, 600);
                
                for(let i = 0; i < ActiveTest.length; i++) {
                    if(ActiveTest[i].checked) {
                        ActiveTest[i].checked = false;
                    }
                }
            }
        } else {
            ResultTest.textContent = "Дорешайте тест!";
            ResultTest.style.display = "block";
            setTimeout(() => { ResultTest.style.opacity = "1"; }, 600);
        }
        
        setTimeout(() => { ResultTest.style.opacity = "0"; }, 6000);
        setTimeout(() => { ResultTest.style.display = "none"; }, 7000);
    });
});

//РОБОТ ПОМОЩНИК
let Raseyes=1
const Robot=document.querySelector(".Robots")
const Helper=document.querySelector(".Helper")
const eyes=document.querySelector(".eyes")
const texthelper=document.querySelector(".TextRobots")
const Lico=document.querySelector(".Lico")
const time1=setTimeout(()=>{
    if(SostSite==="Glavmenu"){   
        Helper.style.top="15%"
        texthelper.textContent='Добро пожаловать на сайт по изучению учебного предмета "Технология разработки программного обесечения".'
        texthelper.style.opacity="1"
        const time=setTimeout(()=>{
            texthelper.textContent="Нажми на меня,чтобы продолжить."
            Helper.style.top="25%"
        },4000)
        const time1=setTimeout(() => {
            texthelper.style.opacity="0"
        },8001);
}},5)
Robot.addEventListener("click",function(event){
    if(SostSite==="Glavmenu"){
        texthelper.textContent="Выбирете один из пунктов"
        texthelper.style.opacity="1"
        const time=setTimeout(()=>{texthelper.style.opacity="0"},6000)

    }
    if(SostSite==="Testmenu"){
        texthelper.textContent="Выберите тест, который хотите пройти."
        texthelper.style.opacity="1"
        const time=setTimeout(()=>{texthelper.style.opacity="0"},4000)

    }
    if(SostSite==="Gravmenu"){
        texthelper.textContent="Выберите редактор графиков."
        texthelper.style.opacity="1"
        const time=setTimeout(()=>{texthelper.style.opacity="0"},4000)

    }
    else if(SostSite==="Teorimenu"){
        texthelper.textContent="Выберите лекцию, которую хотите прочитать"
        texthelper.style.opacity="1"
        const time=setTimeout(()=>{texthelper.style.opacity="0"},4000)
    }
    else if(SostSite === "Teoria1" || SostSite === "Teoria2" || SostSite === "Teoria3" || SostSite === "Teoria4" || SostSite === "Teoria5" || SostSite === "Teoria6" || SostSite === "Teoria7" || SostSite === "Teoria8" || SostSite === "Teoria9" || SostSite === "Teoria10" || SostSite === "Teoria11" || SostSite === "Teoria12" || SostSite === "Teoria13" || SostSite === "Teoria14" || SostSite === "Teoria15" || SostSite === "Teoria16" || SostSite === "Teoria17" || SostSite === "Teoria18" || SostSite === "Teoria19" || SostSite === "Teoria20" || SostSite === "Teoria21" || SostSite === "Teoria22" || SostSite === "Teoria23" || SostSite === "Teoria24" || SostSite === "Teoria25" || SostSite === "Teoria26" || SostSite === "Teoria27" || SostSite === "Teoria28" || SostSite === "Teoria29" || SostSite === "Teoria30" || SostSite === "Teoria31" || SostSite === "Teoria32" || SostSite === "Teoria33" || SostSite === "Teoria34" || SostSite === "Teoria35" || SostSite === "Teoria36" || SostSite === "Teoria37" || SostSite === "Teoria38" ){
        if(Raseyes===1){
        texthelper.textContent="Нажмите на моё лицо,чтобы выбрать действие."
        texthelper.style.opacity="1"
        const time=setTimeout(()=>{texthelper.style.opacity="0"},4000)}
        else if(Raseyes===2){
            SostSite="Glavmenu"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
            Raseyes=1
            Lico.src="info/EyesOff.svg"
            if(!isMobile){
            eyes.style.width="50%"
            eyes.style.left="25%"
            eyes.style.top="40%"}
            else if(isMobile){
                eyes.style.left="27%"
            eyes.style.top="12%"
            }
        }
        else if(Raseyes===3){
            for(let i=0;i<BoxSostTeor.length;i++){
                if(BoxSostTeor[i]===SostSite){
                    if(BoxDopTeori[i].style.display === "none" || BoxDopTeori[i].style.display === ""){
                        BoxDopTeori[i].style.display="block"
                        const time=setTimeout(()=>{BoxDopTeori[i].style.opacity="1"},100)}
                    else if(BoxDopTeori[i].style.display==="block"){
                        BoxDopTeori[i].style.opacity="0"
                        const time=setTimeout(()=>{BoxDopTeori[i].style.display=""},100)
            }
        }
    }
        }
    }
    else if(SostSite === "Test1" || SostSite === "Test2" || SostSite === "Test3" || SostSite === "Test4" || SostSite === "Test5" || SostSite === "Test6" || SostSite === "Test7" || SostSite === "Test8" || SostSite === "Test9" || SostSite === "Test10" || SostSite === "Test11" || SostSite === "Test12"){
        if(Raseyes===1){
            texthelper.textContent="Нажмите на моё лицо,чтобы выбрать действие."
            texthelper.style.opacity="1"
            const time=setTimeout(()=>{texthelper.style.opacity="0"},4000)
        }
        else if(Raseyes===2){
            SostSite="Glavmenu"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
            Raseyes=1
            location.reload()
        }
        else if(Raseyes===3){
            for(let i = 0; i < BoxSostTest.length; i++) {
            if(SostSite === BoxSostTest[i]) {
                ActiveTest = BoxTest[i];
            }
        }
        
        
        let vsegoDid = 0;      
        let Pravilno = 0;      
        
        for(let i = 0; i < ActiveTest.length; i++) {
            if(ActiveTest[i].checked) {
                vsegoDid++;      
                if(ActiveTest[i].value === "good") {
                    Pravilno++;
                }
            }
        }
        
        
        if(vsegoDid === 10) {
            if(Pravilno >= 8) {
                ResultTest.textContent = `Ваш результат: ${Pravilno}. Вам доступен следующий тест.`;
                ResultTest.style.display = "block";
                setTimeout(() => { ResultTest.style.opacity = "1"; }, 600);
                
                for(let i = 0; i < ActiveTest.length; i++) {
                    if(ActiveTest[i].checked) {
                        ActiveTest[i].checked = false;
                    }
                }
            } else {
                ResultTest.textContent = `Ваш результат: ${Pravilno}. Повторите теоретический материал и пройдите ещё раз тест.`;
                ResultTest.style.display = "block";
                setTimeout(() => { ResultTest.style.opacity = "1"; }, 600);
                
                for(let i = 0; i < ActiveTest.length; i++) {
                    if(ActiveTest[i].checked) {
                        ActiveTest[i].checked = false;
                    }
                }
            }
        } else {
            ResultTest.textContent = "Дорешайте тест!";
            ResultTest.style.display = "block";
            setTimeout(() => { ResultTest.style.opacity = "1"; }, 600);
        }
        
        setTimeout(() => { ResultTest.style.opacity = "0"; }, 6000);
        setTimeout(() => { ResultTest.style.display = "none"; }, 7000);
        }
    }
    else if(SostSite==="Grafik1"){
        if(Raseyes===1){
            texthelper.textContent="Нажмите на моё лицо,чтобы выбрать действие."
            texthelper.style.opacity="1"
            const time=setTimeout(()=>{texthelper.style.opacity="0"},4000)
        }
        else if(Raseyes===2){
            SostSite="Glavmenu"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
            Raseyes=1
            location.reload()
        }
        else if(Raseyes===3){
            texthelper.textContent="Здесь вы можете сделать контекстную диаграмму IDEF0."
            texthelper.style.opacity="1"
            const time=setTimeout(()=>{texthelper.style.opacity="0"},4000)
        }
    }
    else if(SostSite==="Grafik2"){
        if(Raseyes===1){
            texthelper.textContent="Нажмите на моё лицо,чтобы выбрать действие."
            texthelper.style.opacity="1"
            const time=setTimeout(()=>{texthelper.style.opacity="0"},4000)
        }
        else if(Raseyes===2){
            SostSite="Glavmenu"
            sessionStorage.setItem('SostSite', SostSite)
            Sostsite()
            Raseyes=1
            location.reload()
        }
        else if(Raseyes===3){
            texthelper.textContent="Здесь вы можете сделать диаграмму UML любого типа."
            texthelper.style.opacity="1"
            const time=setTimeout(()=>{texthelper.textContent="Чтобы добавить элемент надо нажать на него в панели элементов."},6000)
            const time1=setTimeout(()=>{texthelper.textContent="Чтобы нарисовать линию нужно выбрать начальную и конечную точку линии и тогда она появится."},12000)
            const time2=setTimeout(()=>{texthelper.textContent="Чтобы удалить элемент нажмите на иконку мусорки и нажмите на элемент, который хотите удалить."},18000)
            const time3=setTimeout(()=>{texthelper.style.opacity="0"},24000)
        }
    }
    })
Lico.addEventListener("click",function(event){
    if(!isMobile){
    console.log("Пк")
    event.stopPropagation();
    if(SostSite === "Teoria1" || SostSite === "Teoria2" || SostSite === "Teoria3" || SostSite === "Teoria4" || SostSite === "Teoria5" || SostSite === "Teoria6" || SostSite === "Teoria7" || SostSite === "Teoria8" || SostSite === "Teoria9" || SostSite === "Teoria10" || SostSite === "Teoria11" || SostSite === "Teoria12" || SostSite === "Teoria13" || SostSite === "Teoria14" || SostSite === "Teoria15" || SostSite === "Teoria16" || SostSite === "Teoria17" || SostSite === "Teoria18" || SostSite === "Teoria19" || SostSite === "Teoria20" || SostSite === "Teoria21" || SostSite === "Teoria22" || SostSite === "Teoria23" || SostSite === "Teoria24" || SostSite === "Teoria25" || SostSite === "Teoria26" || SostSite === "Teoria27" || SostSite === "Teoria28" || SostSite === "Teoria29" || SostSite === "Teoria30" || SostSite === "Teoria31" || SostSite === "Teoria32" || SostSite === "Teoria33" || SostSite === "Teoria34" || SostSite === "Teoria35" || SostSite === "Teoria36" || SostSite === "Teoria37" || SostSite === "Teoria38" ){
        if(Raseyes===1){
            Raseyes=2
            Lico.src="info/ButtonBack.svg"
            eyes.style.width="44%"
            eyes.style.top="34%"
        }
        else if(Raseyes===2){
            Raseyes=3
            Lico.src="info/ButtonInfo.svg"
            eyes.style.width="22%"
            eyes.style.left="42%"
            eyes.style.top="33%"
        }
        else if(Raseyes===3){
            Raseyes=1
            Lico.src="info/EyesOff.svg"
            eyes.style.width="50%"
            eyes.style.left="25%"
            eyes.style.top="40%"
        }
    }
    else if(SostSite === "Test1" || SostSite === "Test2" || SostSite === "Test3" || SostSite === "Test4" || SostSite === "Test5" || SostSite === "Test6" || SostSite === "Test7" || SostSite === "Test8" || SostSite === "Test9" || SostSite === "Test10" || SostSite === "Test11" || SostSite === "Test12"){
        if(Raseyes===1){
            Raseyes=2
            Lico.src="info/ButtonBack.svg"
            eyes.style.width="44%"
            eyes.style.top="34%"
        }
        else if(Raseyes===2){
            Raseyes=3
            Lico.src="info/ButtonProf.svg"
            eyes.style.width="25%"
            eyes.style.left="38%"
            eyes.style.top="38%"
        }
        else if(Raseyes===3){
            Raseyes=1
            Lico.src="info/EyesOff.svg"
            eyes.style.width="50%"
            eyes.style.left="25%"
            eyes.style.top="40%"
        }
    }
    else if(SostSite === "Grafik1" ||SostSite === "Grafik2"  ){
        if(Raseyes===1){
            Raseyes=2
            Lico.src="info/ButtonBack.svg"
            eyes.style.width="44%"
            eyes.style.top="24%"
        }
        else if(Raseyes===2){
            Raseyes=3
            Lico.src="info/ButtonInfo.svg"
            eyes.style.width="20%"
            eyes.style.left="41%"
            eyes.style.top="25%"
        }
        else if(Raseyes===3){
            Raseyes=1
            Lico.src="info/EyesOff.svg"
            eyes.style.width="50%"
            eyes.style.left="25%"
            eyes.style.top="30%"
        }
    }}
    else if(isMobile){
        console.log("Мобайл")
        event.stopPropagation();
    if(SostSite === "Teoria1" || SostSite === "Teoria2" || SostSite === "Teoria3" || SostSite === "Teoria4" || SostSite === "Teoria5" || SostSite === "Teoria6" || SostSite === "Teoria7" || SostSite === "Teoria8" || SostSite === "Teoria9" || SostSite === "Teoria10" || SostSite === "Teoria11" || SostSite === "Teoria12" || SostSite === "Teoria13" || SostSite === "Teoria14" || SostSite === "Teoria15" || SostSite === "Teoria16" || SostSite === "Teoria17" || SostSite === "Teoria18" || SostSite === "Teoria19" || SostSite === "Teoria20" || SostSite === "Teoria21" || SostSite === "Teoria22" || SostSite === "Teoria23" || SostSite === "Teoria24" || SostSite === "Teoria25" || SostSite === "Teoria26" || SostSite === "Teoria27" || SostSite === "Teoria28" || SostSite === "Teoria29" || SostSite === "Teoria30" || SostSite === "Teoria31" || SostSite === "Teoria32" || SostSite === "Teoria33" || SostSite === "Teoria34" || SostSite === "Teoria35" || SostSite === "Teoria36" || SostSite === "Teoria37" || SostSite === "Teoria38" ){
        if(Raseyes===1){
            Raseyes=2
            Lico.src="info/ButtonBack.svg"
            eyes.style.width="44%"
            eyes.style.top="10%"
        }
        else if(Raseyes===2){
            Raseyes=3
            Lico.src="info/ButtonInfo.svg"
            eyes.style.width="22%"
            eyes.style.left="42%"
            eyes.style.top="10%"
        }
        else if(Raseyes===3){
            Raseyes=1
            Lico.src="info/EyesOff.svg"
            eyes.style.width="50%"
            eyes.style.left="25%"
            eyes.style.top="12%"
        }
    }
    else if(SostSite === "Test1" || SostSite === "Test2" || SostSite === "Test3" || SostSite === "Test4" || SostSite === "Test5" || SostSite === "Test6" || SostSite === "Test7" || SostSite === "Test8" || SostSite === "Test9" || SostSite === "Test10" || SostSite === "Test11" || SostSite === "Test12"){
        if(Raseyes===1){
            Raseyes=2
            Lico.src="info/ButtonBack.svg"
            eyes.style.width="44%"
            eyes.style.top="10%"
        }
        else if(Raseyes===2){
            Raseyes=3
            Lico.src="info/ButtonProf.svg"
            eyes.style.width="25%"
            eyes.style.left="38%"
            eyes.style.top="10%"
        }
        else if(Raseyes===3){
            Raseyes=1
            Lico.src="info/EyesOff.svg"
            eyes.style.width="50%"
            eyes.style.left="25%"
            eyes.style.top="10%"
        }
    }
    }
})
//Графики UML
let isDragging = false;
let offsetX, offsetY;
let currentElement = null;
let MakeLine=false;
let MakePunktLine=false;
let RasX1=null
let RasY1=null
let RasX2=null
let RasY2=null
let ActiveText=null
let DeleteElement=false

const VvodUml=document.querySelector(".TextVodUml")
const OtpUml=document.querySelector(".butOtUml")

const zona=document.querySelector(".PunktRedacts")

zona.addEventListener("click", function(event) {
    if (MakeLine) {
        const rect = zona.getBoundingClientRect();
        
        if (RasX1 === null) {
            RasX1 = event.clientX - rect.left;
            RasY1 = event.clientY - rect.top;
        } else {
            RasX2 = event.clientX - rect.left;
            RasY2 = event.clientY - rect.top;
            
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.style.position = "absolute";
            svg.style.top = "0";
            svg.style.left = "0";
            svg.style.width = "100%";
            svg.style.height = "100%";
            svg.style.pointerEvents = "none";
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", RasX1);
            line.setAttribute("y1", RasY1);
            line.setAttribute("x2", RasX2);
            line.setAttribute("y2", RasY2);
            line.setAttribute("stroke", "white");
            line.setAttribute("stroke-width", "3");
            line.style.zIndex="100"
            deleeum(line)
            svg.appendChild(line);
            zona.appendChild(svg);
            makeDraggable(line);
            
            RasX1 = null;
            RasY1 = null;
            RasX2 = null;
            RasY2 = null;
            MakeLine=false;
        }
    }
    else if (MakePunktLine) {
        const rect = zona.getBoundingClientRect();
        
        if (RasX1 === null) {
            RasX1 = event.clientX - rect.left;
            RasY1 = event.clientY - rect.top;
        } else {
            RasX2 = event.clientX - rect.left;
            RasY2 = event.clientY - rect.top;
            
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.style.position = "absolute";
            svg.style.top = "0";
            svg.style.left = "0";
            svg.style.width = "100%";
            svg.style.height = "100%";
            svg.style.pointerEvents = "none";
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", RasX1);
            line.setAttribute("y1", RasY1);
            line.setAttribute("x2", RasX2);
            line.setAttribute("y2", RasY2);
            line.setAttribute("stroke", "white");
            line.setAttribute("stroke-width", "3");
            line.setAttribute("stroke-dasharray","10")
            line.style.zIndex="100"
            deleeum(line)
            svg.appendChild(line);
            zona.appendChild(svg);
            makeDraggable(line);
            
            RasX1 = null;
            RasY1 = null;
            RasX2 = null;
            RasY2 = null;
            MakePunktLine=false;
        }
    }
});

const createElipse = document.querySelector(".Elipse"); 
const createGlPram = document.querySelector(".Gladkipram"); 
const createOb = document.querySelector(".Ob"); 
const createKryg = document.querySelector(".Krug"); 
const createEnd = document.querySelector(".End"); 
const createRomb = document.querySelector(".Romb"); 
const createPeopele = document.querySelector(".People ");
const createText = document.querySelector(".TextUml");
const createSmileText = document.querySelector(".TextSmileUml");
const createLine = document.querySelector(".lineUml");
const createPunktLine = document.querySelector(".linePunktUml");
const createNapravlenia = document.querySelector(".Naslwdovanie");
const createAgrecia = document.querySelector(".Agregacia");
const kompo = document.querySelector(".Kompozicia");
const deleeuml = document.querySelector(".deleteuml");

function makeDraggable(element) {
    element.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isDragging = true;
        currentElement = element;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        element.style.position = 'absolute';
        element.style.cursor = 'grabbing';
        element.style.zIndex = 1000;
    });
}
function Povorot(element){
    element.addEventListener('click',function(e){
        if(element.style.transform===''){
        element.style.transform = 'rotate(90deg)';}
        else if(element.style.transform==='rotate(90deg)'){
        element.style.transform = 'rotate(180deg)';}
        else if(element.style.transform==='rotate(180deg)'){
        element.style.transform = 'rotate(270deg)';}
        else if(element.style.transform==='rotate(270deg)'){
        element.style.transform = '';}
    })
}
function deleeum(element){
    element.addEventListener("click",function(e){
        if(DeleteElement!=false){
            element.remove()
            DeleteElement=false
        }
    })
}

createElipse.addEventListener("click", function(event) {
    const Elipsef = document.createElement('div');
    Elipsef.className = 'elipse';
    Elipsef.innerHTML = `
        <div class='Elepseimg'>
        </div>
    `;
    Elipsef.style.position = 'absolute';
    Elipsef.style.cursor = 'grab';
    Elipsef.style.left = '200px';
    Elipsef.style.top = '100px';
    document.body.appendChild(Elipsef);
    deleeum(Elipsef)
    makeDraggable(Elipsef);
});
createPeopele.addEventListener("click", function(event) {
    const People = document.createElement('div');
    People.className = 'elipse';
    People.innerHTML = `
        <img width='100px' src='info/Peopleimg.svg'>
    `;
    People.style.position = 'absolute';
    People.style.cursor = 'grab';
    People.style.left = '200px';
    People.style.top = '100px';
    document.body.appendChild(People);
    deleeum(People)
    makeDraggable(People);
});
createGlPram.addEventListener("click", function(event) {
    const GlP = document.createElement('div');
    GlP.className = 'elipse';
    GlP.innerHTML = `
        <img width='200px' src='info/ImgGladkiPram.webp'>
    `;
    GlP.style.position = 'absolute';
    GlP.style.cursor = 'grab';
    GlP.style.left = '200px';
    GlP.style.top = '100px';
    document.body.appendChild(GlP);
    deleeum(GlP)
    makeDraggable(GlP);
});
createOb.addEventListener("click", function(event) {
    const ob = document.createElement('div');
    ob.className = 'elipse';
    ob.innerHTML = `
        <img width='250px' src='info/Ob.webp'>
    `;
    ob.style.position = 'absolute';
    ob.style.cursor = 'grab';
    ob.style.left = '200px';
    ob.style.top = '100px';
    document.body.appendChild(ob);
    deleeum(ob)
    makeDraggable(ob);
});
deleeuml.addEventListener("click",function(event){
    DeleteElement=true
})
createKryg.addEventListener("click", function(event) {
    const kryg = document.createElement('div');
    kryg.className = 'elipse';
    kryg.innerHTML = `
        <img width='50px' src='info/Krug.webp'>
    `;
    kryg.style.position = 'absolute';
    kryg.style.cursor = 'grab';
    kryg.style.left = '200px';
    kryg.style.top = '100px';
    document.body.appendChild(kryg);
    deleeum(kryg)
    makeDraggable(kryg);
});
createEnd.addEventListener("click", function(event) {
    const end = document.createElement('div');
    end.className = 'elipse';
    end.innerHTML = `
        <img width='50px' src='info/End.svg'>
    `;
    end.style.position = 'absolute';
    end.style.cursor = 'grab';
    end.style.left = '200px';
    end.style.top = '100px';
    document.body.appendChild(end);
    deleeum(end)
    makeDraggable(end);
});
createRomb.addEventListener("click", function(event) {
    const Romb = document.createElement('div');
    Romb.className = 'elipse';
    Romb.innerHTML = `
        <img width='70px' src='info/Romb.svg'>
    `;
    Romb.style.position = 'absolute';
    Romb.style.cursor = 'grab';
    Romb.style.left = '200px';
    Romb.style.top = '100px';
    document.body.appendChild(Romb);
    deleeum(Romb)
    makeDraggable(Romb);
});
createText.addEventListener("click",function(event){
    if(VvodUml.style.display!="block"){
    const Text = document.createElement('div');
    Text.className = 'elipse TextBig';
    VvodUml.style.display="block"
    OtpUml.style.display="block"
    Text.style.position = 'absolute';
    Text.style.cursor = 'grab';
    Text.style.left = '200px';
    Text.style.top = '100px';
    ActiveText=Text
    document.body.appendChild(Text);
    makeDraggable(Text);
    deleeum(Text)}
})
createSmileText.addEventListener("click",function(event){
    if(VvodUml.style.display!="block"){
    const Text = document.createElement('div');
    Text.className = 'elipse SmallBig';
    VvodUml.style.display="block"
    OtpUml.style.display="block"
    Text.style.position = 'absolute';
    Text.style.cursor = 'grab';
    Text.style.left = '200px';
    Text.style.top = '100px';
    ActiveText=Text
    document.body.appendChild(Text);
    deleeum(Text)
    makeDraggable(Text);}
})
createNapravlenia.addEventListener("click",function(event){
    const Trey = document.createElement('div');
    Trey.className = 'elipse';
    Trey.innerHTML = `
        <img width='35px' src='info/Treyglnick.svg'>
    `;
    Trey.style.position = 'absolute';
    Trey.style.cursor = 'grab';
    Trey.style.left = '200px';
    Trey.style.top = '100px';
    document.body.appendChild(Trey);
    Povorot(Trey)
    makeDraggable(Trey);
    deleeum(Trey)
})
createAgrecia.addEventListener("click",function(event){
    const Ag = document.createElement('div');
    Ag.className = 'elipse';
    Ag.innerHTML = `
        <img width='45px' src='info/Agre.svg'>
    `;
    Ag.style.position = 'absolute';
    Ag.style.cursor = 'grab';
    Ag.style.left = '200px';
    Ag.style.top = '100px';
    document.body.appendChild(Ag);
    deleeum(Ag)
    Povorot(Ag)
    makeDraggable(Ag);})
kompo.addEventListener("click",function(event){
    const ko = document.createElement('div');
    ko.className = 'elipse';
    ko.innerHTML = `
        <img width='45px' src='info/Kompo.webp'>
    `;
    ko.style.position = 'absolute';
    ko.style.cursor = 'grab';
    ko.style.left = '200px';
    ko.style.top = '100px';
    document.body.appendChild(ko);
    Povorot(ko)
    deleeum(ko)
    makeDraggable(ko);
})
OtpUml.addEventListener("click",function(event){
    if(VvodUml.value!=""){
        ActiveText.textContent=VvodUml.value 
        VvodUml.style.display="none"
        OtpUml.style.display="none"
    }
    else{
        ActiveText.remove()
        VvodUml.style.display="none"
        OtpUml.style.display="none"
        ActiveText=null
    }
})

createLine.addEventListener("click",function(event){
    if(MakeLine!=true){
        MakeLine=true
        
    }
})
createPunktLine.addEventListener("click",function(event){
    if(MakePunktLine!=true){
        MakePunktLine=true
    }
})
document.addEventListener('mousemove', (e) => {
    if (!isDragging || !currentElement) return;
    
    currentElement.style.left = (e.clientX - offsetX) + 'px';
    currentElement.style.top = (e.clientY - offsetY) + 'px';
});

document.addEventListener('mouseup', () => {
    if (currentElement) {
        currentElement.style.cursor = 'grab';
    }
    isDragging = false;
    currentElement = null;
});
