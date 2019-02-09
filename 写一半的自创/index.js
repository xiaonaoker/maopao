window.onload=function() {
//从小到大排序，小的放在前面，大的放在后面；
    var z,
        btn=document.getElementById("btn"),
        ipt=document.getElementsByTagName("ipt")[0],
        arr=[];

    var smaller=function(){
        var a=parseFloat(document.getElementsByClassName("ipt")[0].value);
        var c1=0;//作为标记，记住最后的最小值a是第几位的值，0开始
        for(var i=1;i<11;i++){
            var b=parseFloat(document.getElementsByClassName("ipt")[i].value);
            if(b!==""){
                if(a>b){
                    a=b;
                    c1=i;
                }
            }
        }
        arr.push(a);
        alert(a);//i=11，a=最小值
        alert(c1);
        alert(arr);
        arr=[];


    };
    btn.onclick=function(){
        smaller();
    };

    // btn.onclick=function(){
    //     alert("成功");
    //     var ipt1=document.getElementById("ipt1").value,
    //         ipt2=document.getElementById("ipt2").value,
    //         ipt3=document.getElementById("ipt3").value,
    //         ipt4=document.getElementById("ipt4").value,
    //         ipt5=document.getElementById("ipt5").value,
    //         ipt6=document.getElementById("ipt6").value,
    //         ipt7=document.getElementById("ipt7").value,
    //         ipt8=document.getElementById("ipt8").value,
    //         ipt9=document.getElementById("ipt9").value,
    //         ipt10=document.getElementById("ipt10").value,
    //         ipt11=document.getElementById("ipt11").value,
    //         ipt12=document.getElementById("ipt12").value;
    //
    //
    //
    // };
















};


