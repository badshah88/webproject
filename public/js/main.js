const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_real_value=document.getElementById('temp_real_value');
const temp_status=document.getElementById('temp_status');
const dataHide=document.querySelector('.middle_layer');

const getinfo=async(event)=>{
    event.preventDefault();
     let cityVal=cityName.value;
    if(cityVal===""){
          city_name.innerHTML=`please write the name before search`;
          dataHide.classList.add('data_hide');
    }else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=01b5746f945dbdfcb36c75f700a8d1ca`;
        const response = await fetch(url);
        const data= await response.json();
        const arrData=[data];
        // console.log(arrData);

        city_name.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_value.innerText=arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main;
        const tempMood=arrData[0].weather[0].main;

        if(tempMood==='Clear'){
            temp_status.innerHTML="<i class='fa-thin fa-moon-stars'></i>";
        }
        else if(tempMood==='Clouds'){
            temp_status.innerHTML="<i class='fa-solid fa-cloud'></i>";
        }
        else if(tempMood==='Rain'){
            temp_status.innerHTML="<i class='fa-solid fa-raindrops'></i>";
        }
        else{
            temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:yellow'></i>";
        }
        dataHide.classList.remove('data_hide');
    
        }catch{
            city_name.innerHTML=`please write the city name properly`;
            dataHide.classList.add('data_hide');

        }

    }
}

{/* <script> */}
       const getCurrentDay=()=>{
        let weekdays=new Array(7);
        weekdays[0]="Sund";
        weekdays[1]="Mon";
        weekdays[2]="Tue";
        weekdays[3]="Wed";
        weekdays[4]="Thur";
        weekdays[5]="Fri";
        weekdays[6]="Sat";

            const newDay=new Date();
            days=weekdays[newDay.getDay()];
            let day=document.getElementById('day');
            day.innerText=days;
       }       
       const getCurrentMonth=()=>{
        let month=new Array(12);
        month[0]="Jan";
        month[1]="Feb";
        month[2]="Mar";
        month[3]="Apr";
        month[4]="May";
        month[5]="Jun";
        month[6]="Jul";
        month[7]="Aug";
        month[8]="Sep";
        month[9]="Oct";
        month[10]="Nov";
        month[11]="Dec";
       
       const currmonth=new Date();
       dat=currmonth.getDate();
       months=month[currmonth.getMonth()];
       let today_data=document.getElementById('today_data');
       
        
      
       today_data.innerText=`${dat}th | ${months}`;
       }
        
        getCurrentMonth();
        getCurrentDay();
     {/* </script> */}



submitBtn.addEventListener('click',getinfo);