var count=0;
var count2=0;
for(let i = 0;i<=8;i++)
{
    document.querySelectorAll(".sub")[i].addEventListener("click",gm);
}
      function gm(event) 
      {

       if(count==0)
        {
        if(event.target.textContent=="")
        {
            event.target.textContent="x"; 
            count++;
            count2++;
            if(count2>=5)
                {
                    check();  
                }

        }
            
        }
        else{
            if(event.target.textContent=="")
                {
                    event.target.textContent="0"; 
                    count=0;
                    count2++;
                    if(count2>=5)
                    {
                        check();  
                    }
              
                } 
        }
    }
   
function check()
{
    var v1=document.querySelectorAll(".sub")[0].textContent;
    var v2=document.querySelectorAll(".sub")[1].textContent;
    var v3=document.querySelectorAll(".sub")[2].textContent;
    var v4=document.querySelectorAll(".sub")[3].textContent;
    var v5=document.querySelectorAll(".sub")[4].textContent;
    var v6=document.querySelectorAll(".sub")[5].textContent;
    var v7=document.querySelectorAll(".sub")[6].textContent;
    var v8=document.querySelectorAll(".sub")[7].textContent;
    var v9=document.querySelectorAll(".sub")[8].textContent;
if(v1 !="")
{
    if(v1==v2 && v2==v3)
        {
            removelistiner();
            setTimeout(()=>{
                popup(v1);
            },500);
        }
        else  if(v1==v4 && v4==v7)
            {
                removelistiner();
                setTimeout(()=>{
                    popup(v1);
                },500);
       
            }
            else if(v1==v5&& v5==v9)
                {
                    removelistiner();
                    setTimeout(()=>{
                        popup(v1);
                    },500);
           
                }
            }
            if(v3 !="")
            {
                if(v3==v6 && v6==v9)
                    {
                        removelistiner();
                        setTimeout(()=>{
                            popup(v3);
                        },500);
               
                    }
                  
                      else  if(v3==v5 && v5==v7)
                            {
                                removelistiner();
                                setTimeout(()=>{
                                    popup(v3);
                                },500);
                       
                            }
            }
    if(v5 !="")
    {
        if(v4==v5 && v5==v6)
            {
                removelistiner();
                setTimeout(()=>{
                    popup(v5);
                },500);
        
            }
            if(v2==v5 && v5==v8)
                {
                    removelistiner();
                    setTimeout(()=>{
                        popupv5
                    },500);
            
                }
    }
       if(v7!=0)
       {
        if(v7==v8&& v8==v9)
            {
                removelistiner();
                setTimeout(()=>{
                    popup(v7);
                },500);
        
            }
       }
                                                  
}
function removelistiner()
{
    for (let i = 0; i <= 8; i++) {
        document.querySelectorAll(".sub")[i].removeEventListener("click",gm);
        }
}
function popup(prms)
{
    document.querySelector(".select").classList.add("popup");
    document.querySelector(".select1").classList.add("alert");
    var abc = document.querySelector(".massage");
abc.classList.remove("select2");
abc.textContent=prms + "  is Win";
    var abcd = document.querySelector(".btn");
    abcd.classList.remove("select3"); 
}
function remove()
{
    document.querySelector(".select1").classList.remove("alert");
    document.querySelector(".select").classList.remove("popup");
    document.querySelector(".massage").classList.add("select2");
    document.querySelector(".btn").classList.add("select2");
}
document.querySelector(".btn").addEventListener("click",remove);
