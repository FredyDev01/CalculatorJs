import { OpeCalc } from './Operaciones.js'
 

export class Calculadora{
    constructor(dispProblema, dispSolucion){
        this.showProblema = dispProblema
        this.dispSolucion = dispSolucion,    
        this.Calc = new OpeCalc()     
        this.Num1 = false || ''
        this.Num2 = false || ''
        this.Rsp = false || ''
        this.Oper = false || '' 
    }
    
    
    showScreen(){
        this.showProblema.textContent = (this.Num1 ? this.Num1 : '') + (this.Oper ? ' ' + this.Oper + ' ' : '') + (this.Num2 ? this.Num2 : '') + (this.Rsp ? ' =' : '')
        this.dispSolucion.textContent = this.Rsp ? this.Rsp : this.Num2 ? this.Num2 : this.Num1 ? this.Num1 : '0'
    }


    Result(){
        if(this.Num1 && this.Num2){
            switch(this.Oper){
                case '+':
                    this.Rsp = this.Calc.Sum(this.Num1, this.Num2)
                    break
                case '-':
                    this.Rsp = this.Calc.Res(this.Num1, this.Num2)
                    break
                case 'x':
                    this.Rsp = this.Calc.Mul(this.Num1, this.Num2)
                    break
                case '/':
                    this.Rsp = this.Calc.Div(this.Num1, this.Num2)                
                    break
            }
        }        
    } 
    

    AddTecla(Rol, Value){        
        switch(Rol){
            case 'Num':                
                this.Rsp ? this.Reset(false, false, true, false) : ''
                if(Value != '.' && Value != '0'){                                    
                    !this.Oper ? this.Num1 += Value : this.Num2 += Value
                }else{
                    this.Num1 || this.Num2 ? this.NumberEsp(Value) : ''
                }                                    
                break
            case 'Ope':
                if(Value != 'x²' && Value != '√'){   
                    if(!this.Oper && !this.Num2){
                        this.Oper = Value
                    }else if(this.Num2){
                        this.Result()
                        this.Num1 = this.Rsp
                        this.Oper = Value
                        this.Reset(false, true, true, false)
                    }                                      
                }else{
                    this.Num1 || this.Num2 ? this.OperationEsp(Value) : ''
                }                                 
                break
        }
    }   


    NumberEsp(Num){
        if(Num == '0'){
            this.Num2 ? this.Num2 += Num : this.Num1 ? this.Num1 += Num : ''
        }else{
            this.Num2 ? this.Num2.indexOf('.') == -1 ? this.Num2 += Num : '' : 
            this.Num1 ? this.Num1.indexOf('.') == -1 ? this.Num1 += Num : '' : ''
        }
    }


    OperationEsp(op){
        if(op == 'x²'){            
            if(this.Rsp){
                this.Num1 = this.Calc.Pot(this.Rsp)
                this.Reset(false, true, true, true)
            }else{
                const DevPot = this.Calc.Pot(this.Num2 ? this.Num2 : this.Num1)
                this.Num2 ? this.Num2 = DevPot : this.Num1 = DevPot  
            }
        }else{
            if(this.Rsp){
                this.Num1 = this.Calc.Rai(this.Rsp)
                this.Reset(false, true, true, true)
            }else{
                const DevRai = this.Calc.Rai(this.Num2 ? this.Num2 : this.Num1)
                this.Num2 ? this.Num2 = DevRai : this.Num1 = DevRai
            }
        }
    }    


    Reset(v1, v2, v3, v4){
        v1 ? this.Num1 = false || '' : ''
        v2 ? this.Num2 = false || '' : ''
        v3 ? this.Rsp  = false || '' : ''
        v4 ? this.Oper = false || '' : ''   
    }


    Delete(){
        if(this.Rsp){
            this.Rsp = false || ''
        }
        else if(this.Num2 != ''){
            const Num = this.Num2.substring(0, this.Num2.length - 1)
            !isNaN(parseInt(Num)) ? this.Num2 = Num : this.Num2 = ''
        }
        else if(this.Oper){
            this.Oper = ''
        }
        else if(this.Num1){
            const Num = this.Num1.substring(0, this.Num1.length - 1) 
            !isNaN(parseInt(Num)) ? this.Num1 = Num : this.Num1 = ''
        }
    }
}