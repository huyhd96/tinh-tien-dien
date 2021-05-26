function bmi() {
    let wei = document.getElementById('weight').value
    let hei = document.getElementById('height').value / 100
    if (wei == '' || hei == '') {
        alert('Vui lòng nhập dữ liêu')
        return false
    } else {
        let bmi = wei / (hei * hei)
        if (bmi < 18) {
            document.getElementById('result').value = bmi.toFixed(2)
            document.getElementById('comment').value = "Chỉ số BMI ở trên cho thấy bạn bị gầy! "
        } else if (bmi < 25 && bmi >= 18) {
            document.getElementById('result').value = bmi.toFixed(2)
            document.getElementById('comment').value = "Chúc mừng bạn ! Bạn có chỉ số BMI bình thường !"
        } else {
            document.getElementById('result').value = bmi.toFixed(2)
            document.getElementById('comment').value = "Chỉ số BMI ở trên cho thấy bạn bị béo phì"
        }
    }
}

function clearData() {
    document.getElementById('weight').value = ''
    document.getElementById('height').value = '';
    document.getElementById('result').value = ""
    document.getElementById('comment').value = ""
}