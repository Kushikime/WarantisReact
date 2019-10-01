import React from 'react';
import './CreateDeposit.module.scss';


function Footer() {

    return (
        <div class="main" >
             <span class="title">Создание депозита</span>
             <div class="block">
                 <ul class="blockNav">
                     <li class="active"><span>1</span>Выбор депозита и кошелька</li>
                     <li><span>2</span>Регистрация</li>
                     <li><span>3</span>Оплата вклада</li>
                     <li><span>4</span>Подтверждение оплаты</li>
                 </ul>
                 
                 <div class="blockAttr">
                     <div class="left">
                         <span class="title">Тариф инвестирования</span>
                         <input type="text" name="tariff"/>
                         <span class="lowText">Прибыль в сутки от 0.4% до 0.5%</span>
                     </div>
                     <div class="middle">
                         <div class="sum">
                            <span class="title">Введите сумму</span>
                             <input type="text" name="sum"/>
                         </div>
                         <div class="currency">
                            <span class="title">Валюта</span>
                             <input type="text" name="currency"/>
                         </div>
                     </div>
                     <div class="right">
                         <span class="title">Введите счет для получения дохода</span>
                         <input type="text" name="accountNumber"/>
                         <span class="lowText">Например, sWS3sdswSD32223323</span>
                     </div>
                 </div>
                 
                 <div class="blockText">
                     <span class="warningText">Введите кошелёк и сумму верно!</span>
                     <span class="lowText">Ежедневно на ваш баланс будет отправляться сумма от 0.4 до 0.5%</span>
                     <button>Далее</button>
                 </div>
             </div>
        </div>
    );
}
export default Footer;
