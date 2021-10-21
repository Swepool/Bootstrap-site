fetch('https://swenode.org/api/getinfo')
.then(response => response.json())
.then(data => {
    document.getElementById('height').innerHTML = data.height
})

fetch('https://blocksum.org/api/getinfo')
.then(response => response.json())
.then(data => {
    document.getElementById('blocksum').innerHTML = data.height
})