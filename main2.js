
    function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else if (btn.value == "C") {
        document.dentaku.display.value = "";
      } else {
        if (btn.value == "×") {
          btn.value = "*";
        } else if (btn.value == "÷") {
          btn.value = "/";
        } 
      let a=document.dentaku.display.value.slice( -1 )
      //演算子が連続した場合
      if(btn.value == "*" || btn.value == "/" || btn.value == "+" || btn.value == "-"){
        if(a == "*" || a == "/" || a == "+" || a == "-"){
          document.dentaku.display.value=document.dentaku.display.value.slice(0,-1)
        }
      }
      let b=document.dentaku.display.value.slice(0,1)
      let c=document.dentaku.display.value.slice(-2)
      
      //0が最初に入力、もしくは演算子の後に入力されていた場合
      if( b == "0" || c == "*0" || c == "/0" || c == "+0" || c == "-0"){
        document.dentaku.display.value=document.dentaku.display.value.slice(0,-1)
      } 
        document.dentaku.display.value += btn.value;
        document.dentaku.multi_btn.value = "×";
        document.dentaku.div_btn.value = "÷";
      }
    }
