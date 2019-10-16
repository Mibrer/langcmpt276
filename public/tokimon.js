

function datachange(){
  window.alert("add2");

}

function datadelete(event){
  console.log(event.target.name);
  fetch('http://localhost:5000/tokimon', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'id': event.target.name
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload()
  })

}

function datadisplayone(){
  window.alert("ad555d");

}

function datadisplayall(){
  window.alert("addsfdsfd");

}
