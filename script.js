function Submit() {
	if (!confirm('آیا از فرستادن پیام مطمئن هستید؟')) {
	}
	else 
	{
		const xhttp = new XMLHttpRequest();
		xhttp.onload = function () {
			// alert(this.statusText);
			alert('پیام شما با موفقیت ارسال شد.');
		}
		let name = document.getElementById("name").value;
		let mail = document.getElementById("mail").value;
		let msg = document.getElementById("msg").value;

		xhttp.open("POST" , "backend.php");
		xhttp.setRequestHeader("Name" , name);
		xhttp.setRequestHeader("Mail" , mail);
		xhttp.setRequestHeader("Msg" , msg);
		xhttp.send();
	}
	return false;
}
