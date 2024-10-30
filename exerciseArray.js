const btnAdd=document.querySelector('.btnAdd');
const data=document.querySelector('#value');
let array=[];

  btnAdd.addEventListener('click',()=>{
    array.push(data.value); 
    data.value='';
    Swal.fire({
      title: "Added!",
      text: "Value already add to array.",
      icon: "success"
    });
  }) ;

const views=document.querySelector('.btnViews')
const tbody=document.querySelector('.tbody')

views.addEventListener('click',()=>{
  tbody.innerHTML=''
    array.forEach((ele,index)=>{
        tbody.innerHTML+=`
        <tr>
            <td>${index}</td>
            <td>${ele}</td>
        </tr>      
        `;
        
    })
})
const Search=(search)=>{
  const result=array.filter((ele,index)=>{
    return ele==search;
  })
  if(result.length==0){
    Swal.fire({
      title: "Search not found!",
      icon: "error"
    });
  }else{
    Swal.fire({
      title: "Search found!",
      text: "Result i show on table.",
      icon: "success"
    });
  }
  
  result.forEach((ele,index)=>{
    tbody.innerHTML=' ';
    tbody.innerHTML+=`
    <tr>
        <td>${index}</td>
        <td>${ele}</td>
    </tr>      
    `;
  })
}
const btnSearch=document.querySelector('.btnSearch');
btnSearch.addEventListener('click',function(){
  Search(data.value)
})

const deleteArray=(value)=>{
  const  index=array.indexOf(value);
  if(index==-1){
    Swal.fire({
      title: "Search not found!",
      icon: "error"
    });
  }else{
    Swal.fire({
      title: "Delete success",
      icon: "success"
    });
    delete array[index]
  }
}

const btnDelete=document.querySelector('.btnDelete');
btnDelete.addEventListener('click',()=>{
  deleteArray(data.value)
  data.value='';
})


