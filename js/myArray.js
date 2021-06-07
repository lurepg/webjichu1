/**
 * json 文件夹
 * {
 * 0 手机号验证
 * 1 邮箱验证
 * }
 */

var myArray={
  name:"测试文件",
  myPhone(){
    // 手机格式验证
    let myphone=arguments
    let mpe=/^1[8,3,5,7,9]\d{9}$/
    return mpe.test(myphone[0])
  },
  myEmil(){
    // 邮箱验证
    let mymail=arguments[0]
    let mel=/^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
    return mel.test(mymail)
  },
  myDateTime(){
    // 获取 一个月多少天 7天的日期
    // let mydatetime=arguments[0]
    // let mydate=new Date(mydatetime)
    let mydate=new Date()
    let gfy=mydate.getFullYear() //获取年
    let gm=mydate.getMonth()+1//获取月
    let gmx=mydate.getMonth()+2//获取月
    let gd=new Date(gfy,gm,0).getDate()
    let gdx=new Date(gfy,gmx,0).getDate()
    let jt=new Date().getDate() //获取今天的日期
    
    let dt=[]
   
   
    for (let index = 1; index <= gd; index++) {
      var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
      let gday=arr_week[new Date(gfy+"-"+gm+"-"+index).getDay()]
      console.log("--f",new Date(gfy+"-"+gm+"-"+index).getDay());
     if(index>=jt){
     
      dt.push({
        re:gday+","+`${gfy}-${gm}-${index}`
      })
      
        
     }
      
    }
    for (let index1 = 1; index1 <= gdx; index1++) {
      var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
      let gday=arr_week[new Date(gfy+"-"+gmx+"-"+index1).getDay()]
      dt.push({
        re:gday+","+`${gfy}-${gmx}-${index1}`
      })
    }
  
   
    
    let jsuan=[]
    
    for (const key in dt) {
      if(key<7){
        jsuan[key]=dt[key].re
      }
    }
 
    return {jsuan:jsuan}
  }
}