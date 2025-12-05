const numA=document.getElementById("numA");
const numB=document.getElementById("numB");
const btn=document.getElementById("clacbtn");
const result=document.getElementById("result");

btn.addEventListener("click",function() {
    const a=Number(numA.value);
    const b=Number(numB.value);

    const sum=a+b;
    
    result.textContent="計算結果"+sum;
});