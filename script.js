function Submit(){
	if(!confirm('آیا از فرستادن پیام مطمئن هستید؟')){
		return false;
	}
	else{
		alert('پیام شما با موفقیت ارسال شد.');
		return true;
	}
}
