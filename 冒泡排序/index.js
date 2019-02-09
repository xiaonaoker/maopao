window.onload=function() {
//从小到大排序，小的放在前面，大的放在后面；
    var a,i,ii,
        btn1=document.getElementById("btn1"),
        btn2=document.getElementById("btn2"),
        arr=[],
        rst=document.getElementById("rst");

    var smaller=function(){
        for(ii=0;ii<arr.length-1;ii++){
            for(i=0;i<arr.length-1-ii;i++){
                if(arr[i]>arr[i+1]){
                    a=arr[i];
                    arr[i]=arr[i+1];
                    arr[i+1]=a;
                    a=0;
                }
            }
        }
        // alert(arr);
    };

    btn1.onclick=function(){
        var ipt1=parseFloat(document.getElementById("ipt1").value),
            ipt2=parseFloat(document.getElementById("ipt2").value),
            ipt3=parseFloat(document.getElementById("ipt3").value),
            ipt4=parseFloat(document.getElementById("ipt4").value),
            ipt5=parseFloat(document.getElementById("ipt5").value),
            ipt6=parseFloat(document.getElementById("ipt6").value),
            ipt7=parseFloat(document.getElementById("ipt7").value),
            ipt8=parseFloat(document.getElementById("ipt8").value),
            ipt9=parseFloat(document.getElementById("ipt9").value),
            ipt10=parseFloat(document.getElementById("ipt10").value),
            ipt11=parseFloat(document.getElementById("ipt11").value),
            ipt12=parseFloat(document.getElementById("ipt12").value);
        if(!(ipt1&&ipt2&&ipt3&&ipt4&&ipt5&&ipt6&&ipt7&&ipt8&&ipt9&&ipt10&&ipt11&&ipt12)){
            alert("请完整输入正确数值");
        // }else if((ipt1&&ipt2&&ipt3&&ipt4&&ipt5&&ipt6&&ipt7&&ipt8&&ipt9&&ipt10&&ipt11&&ipt12)||((ipt1||ipt2||ipt3||ipt4||ipt5||ipt6||ipt7||ipt8||ipt9||ipt10||ipt11||ipt12)==0)){
        }else{
            arr.push(ipt1);
            arr.push(ipt2);
            arr.push(ipt3);
            arr.push(ipt4);
            arr.push(ipt5);
            arr.push(ipt6);
            arr.push(ipt7);
            arr.push(ipt8);
            arr.push(ipt9);
            arr.push(ipt10);
            arr.push(ipt11);
            arr.push(ipt12);
            smaller();
            rst.innerHTML=arr.join(",");
            arr=[];
        }
    };

    btn2.onclick=function(){
        rst.innerHTML="";
        var ipt1=document.getElementById("ipt1"),
            ipt2=document.getElementById("ipt2"),
            ipt3=document.getElementById("ipt3"),
            ipt4=document.getElementById("ipt4"),
            ipt5=document.getElementById("ipt5"),
            ipt6=document.getElementById("ipt6"),
            ipt7=document.getElementById("ipt7"),
            ipt8=document.getElementById("ipt8"),
            ipt9=document.getElementById("ipt9"),
            ipt10=document.getElementById("ipt10"),
            ipt11=document.getElementById("ipt11"),
            ipt12=document.getElementById("ipt12");
        ipt1.value="";
        ipt2.value="";
        ipt3.value="";
        ipt4.value="";
        ipt5.value="";
        ipt6.value="";
        ipt7.value="";
        ipt8.value="";
        ipt9.value="";
        ipt10.value="";
        ipt11.value="";
        ipt12.value="";
    }
};