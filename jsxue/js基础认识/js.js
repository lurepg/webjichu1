let index=0
console.log(index);
var keyss={
  indexfu(){
    return ++index
  }
}

// console.log(keyss.indexfu());
// console.log(keyss.indexfu());
window.onload=function(){
	let bat=document.getElementById("app")
	let batom=bat.querySelectorAll("span")
	
	var inputs=batom[1].children[0]
	
	
	batom[0].onclick=function(){
		return inputs.value++
		
	}
	batom[2].onclick=function(){
		if(inputs.value<=0){
			return alert("输入的值必须大于0")
		}
		return inputs.value--
	}
	// 计算器
	var jsq=document.getElementById("jsq")
	var jsq1=jsq.querySelectorAll("span")
	console.log(jsq1);
	let myjsq=jsq1[0].children[0]
	// console.log(myjsq);
	// myjsq.split("+")
	let myjia=/\+/i
	let jia=myjsq.value.replace(myjia,",+,")
		// console.log(jia);
	let myjian=/\-/i
	// jia=myjsq.value.replace(myjian,",-,")
		// console.log(jian);
	let mycen=/\*/i
	// jia=myjsq.value.replace(mycen,",*,")
		// console.log(cen);
	let mycu=/÷/i
	jia=myjsq.value.replace(mycu,",/,").replace(mycen,",*,").replace(myjian,",-,").replace(myjia,",+,")
	
		console.log(jia);
		let spls=jia.split(",")
		let sum1=spls[0]
		let jias
		for (var i = 0; i < spls.length; i++) {
		
			sum1+=spls[i]
			
			// if(i%3){
			// 	console.log(spls[i]);
			// }
		}
		console.log(sum1+"ii");
	// console.log(sp);
	// let myjian=/\-/i
	// sp=myjsq.value.replace(myjian,"-")
	// let mychen=/\*/i
	// sp=myjsq.value.replace(myjian,"*")
	// console.log(sp);
	jsq1[1].onclick=function(){
		let jia=myjsq.value.split("+")
		var sum=parseInt(jia[0])
		for (var i = 1; i < jia.length; i++) {
			sum+=parseInt(jia[i])
		}
		console.log(sum);
		// return jsq1[2].children[0].value=Number(jia[0])+Number(jia[1])
	}
	
}
