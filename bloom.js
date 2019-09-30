header('Content-type: image/png');
	
	$APIkey = " vNK7r8-ngKqqrs6hwrGG3dbQ";
	$url = "https://api.bloomsky.com/api/skydata";

	$opts = array(
	'http'=>array(
	'method'=>"GET",
	'header'=>"Authorization: ".$APIkey."\r\n"
	)
	);
	$context = stream_context_create($opts);
	$file = curl_get_contents($url, false, $context);
	
	$data = json_decode($file, true);
	
	$imageURL = $data[0]['Data']['ImageURL'];
	
	echo curl_get_contents(  $imageURL );
	
	function curl_get_contents($url){
		$ch = curl_init();
		//curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; rv:19.0) Gecko/20100101 Firefox/19.0");
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	}
