import { Calculadora } from './app/MethodsCalc.js'


const Container = document.querySelector('#CtnCalculator')
const showOpera = document.querySelector('#Operacion')
const showResult = document.querySelector('#Resultado')
const Calc = new Calculadora(showOpera, showResult)


Container.addEventListener('click', (e)=>{
    if(e.target.tagName == 'INPUT'){        
        const Rol = e.target.dataset.rol         
        Rol == 'Num' || Rol == 'Ope' ? Calc.AddTecla(Rol, e.target.value):
        Rol == 'Res' ? Calc.Reset(true, true, true, true) : 
        Rol == 'Del' ? Calc.Delete() :
        Rol == 'Rsp' ? Calc.Result() : ''
        Calc.showScreen()
    }
})