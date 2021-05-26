var formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function cal() {
    let newIndex = document.getElementById('newIndex').value
    let oldIdex = document.getElementById('oldIndex').value
    let price = document.getElementById('price').value
    if (newIndex == "" || oldIdex == "" || price == "") {
        alert('Vui lòng nhập giá trị')
    } else {
        result = (newIndex - oldIdex) * price
        document.getElementById('result').value = formatter.format(result)
    }
    console.log('result')
}