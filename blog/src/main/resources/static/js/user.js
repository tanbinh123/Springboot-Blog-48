let index = {
		init: function(){
			$('#btn-save').on("click", () => {  //function(){}, ()=>{} this를 바인딩하기 위해서!!
				this.save();
			});
		},
		save: function() {
			let data = {
				userName: $("#userName").val(),
				password: $("#password").val(),
				email: $("#email").val(),				
			};
			
			// ajax 호출시 default가 비동기 호출
			// ajax가 통신을 성공하고 서버가 json을 리턴해주면 잦동으로 자바 오브젝트로 변환해
			$.ajax({
				// 회원가입 수행 요청
				type:"POST",
				url:"/blog/api/user",
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8", // body데이터가 어떤 타입인지(MIME)
				dataType: "json" // 요청을 서버로 해서 응답이 왔을 때 기본적으로 모든 것이 문자열
												// 생긴게 json이라면 =>javascript 객체로 변경
				
			}).done(function(resp){
					alert("회원가입이 완료되었습니다.");
					console.log(resp);
					location.href = "/blog";  // 한줄주석 CRTL+SHIFT+C, 여러줄주석 CRTL+SHIFT+L 
			}).fail(function(error){
				alert(JSON.stringify(error));
			}) // ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert  요청
		} 
}

index.init();