async function getData(amount) {

    await fetch("https://blocksum.org/api/getinfo")
    .then(res => res.json())
    .then(async(data) => {
      netHeight = data.height;
    });

    await fetch('https://swenode.org/api/getinfo')
    .then(res => res.json())
    .then(async(data) => {
        nodeHashrate = data.hashrate;
        nodeHeight = data.height;
        nodeStatus = data.status;
    })

    await fetch('/height.json')
    .then(res => res.json())
    .then(async(data) => {
        bootstraped = data.height;
    })

    document.getElementById('nodeHeight').innerHTML = nodeHeight;
    document.getElementById('netHeight').innerHTML = netHeight;
    document.getElementById('bootstraped').innerHTML = bootstraped;
    
    if (nodeStatus === 'OK') {
    document.getElementById('status').innerHTML = ' ✅'
    } else {
    document.getElementById('status').innerHTML = ' 🛑'

    } 

}

getData()
