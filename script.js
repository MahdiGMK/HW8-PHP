function Submit() {
	if (!confirm('آیا از فرستادن پیام مطمئن هستید؟')) {
		return false;
	}
	else {
		const xhttp = new XMLHttpRequest();
		xhttp.onload = function () {
			// alert(this.statusText);
			alert('پیام شما با موفقیت ارسال شد.');
		}

		xhttp.open("POST" , "backend.php");
		xhttp.setRequestHeader("Name" , "Mahdi");
		xhttp.send();

		return true;
	}
}
