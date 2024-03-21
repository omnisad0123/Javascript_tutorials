// const lik=document.getElementsByTagName("a")
let lik=document.querySelectorAll("a")
// lik.setAttribute('href','Newvalue')
for(let i=0;i<lik.length;i++){
    const item=lik[i];
    item.style.backgroundColor="green"
    item.style.color="blue"

}


