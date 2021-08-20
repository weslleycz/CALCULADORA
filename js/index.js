
function displaynum(n1){
    Calculator.text1.value =  Calculator.text1.value + n1;
}
document.addEventListener("keypress",function(e){
	if(e.key==="9"){
		const btn = document.querySelector("#nine");
		btn.click();
	}
	if(e.key==="8"){
		const btn = document.querySelector("#eight");
		btn.click();
	}
	if(e.key==="7"){
		const btn = document.querySelector("#seven");
		btn.click();
	}
	if(e.key==="6"){
		const btn = document.querySelector("#six");
		btn.click();
	}
	if(e.key==="5"){
		const btn = document.querySelector("#five");
		btn.click();
	}
	if(e.key==="4"){
		const btn = document.querySelector("#four");
		btn.click();
	}
	if(e.key==="3"){
		const btn = document.querySelector("#three");
		btn.click();
	}
	if(e.key==="2"){
		const btn = document.querySelector("#two");
		btn.click();
	}
	if(e.key==="1"){
		const btn = document.querySelector("#one");
		btn.click();
	}
	if(e.key==="0"){
		const btn = document.querySelector("#zero");
		btn.click();
	}
	if(e.key==="Enter"){
		const btn = document.querySelector("#result");
		btn.click();
	}
	if(e.key==="+"){
		const btn = document.querySelector("#plus");
		btn.click();
	}
	if(e.key==="*"){
		const btn = document.querySelector("#multiplication");
		btn.click();
	}
	if(e.key==="."){
		const btn = document.querySelector("#comma");
		btn.click();
	}
	if(e.key==="/"){
		const btn = document.querySelector("#division");
		btn.click();
	}
	if(e.key==="-"){
		const btn = document.querySelector("#any");
		btn.click();
	}
	if(e.key==="c"){
		const btn = document.querySelector("#c");
		btn.click();
	}
});