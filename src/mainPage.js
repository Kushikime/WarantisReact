import React from 'react';
import logo from './logo.svg';
import './mainpage.scss';

function Mainpage() {
    
    document.getElementsByTagName('body')[0].style.backgroundImage = "none";
    document.getElementsByTagName('html')[0].style.backgroundImage = "none";
    
    function createDeposit(e){
        e.preventDefault();
        e.stopPropagation();
        let depositWindow = document.getElementsByClassName("main")[0];
        depositWindow.style.top = document.documentElement.scrollTop+"px";
    }
    
    return (
        <div class="topBlock">
            <div class="topNav">
                <img src={ require('./images/logo.svg') } alt="logo" class="logo"/>
                
                <ul class="nav">
                    <a href="about">
                        <li>О нас</li>
                    </a>
                    <a href="investors">
                        <li>Инвесторам</li>
                    </a>
                    <a href="partnership">
                        <li>Партнерская программа</li>
                    </a>
                    <a href="faq">
                        <li>FAQ</li>
                    </a>
                    <a href="news">
                        <li>Новости</li>
                    </a>
                    <a href="blog">
                        <li>Блог</li>
                    </a>
                    <a href="contact">
                        <li>Обратная связь</li>
                    </a>
                </ul>
                
                <div class="autorization">
                    <a href="#" id="login">Войти</a>
                    <a href="#" id="register">Зарегистрироваться</a>
                </div>
            </div>
            
            <div class="sliderSection">
                <div class="leftBlock">
                    <h1>Быть инвестором Warantis - это очень прибыльно.</h1>
                    <span class="lowText">Получи 204% чистой прибыли за год</span>
                    <a href="#"><img src={ require('./images/security.svg') } alt="security"/><span onClick={createDeposit}>ОТКРЫТЬ ДЕПОЗИТ</span></a>
                    <span>Система работающая на искуственном ителекте по торговле на крипторынке. Важно! Трейдинг может нести риски.</span>
                    <img src={ require('./images/comodo.png') } alt="comodo"/>
                </div>
                
                <div class="rightBlock">
                    <div class="topSection">
                        <div class="header">
                            <span class="currency">
                               <img src={ require('./images/bitcoin.png') } alt=""/>
                                Bitcoin
                            </span>
                            
                            <div class="value">
                                <span>10344 $</span>
                                <span>+7%</span>
                            </div>
                        </div>
                        
                        <div class="footerBlock">
                            <span class="description">Будет просто текст который меняется,  нужно добавить его в словарь</span>
                            <span class="lowText">Подпись к тексту</span>
                            <img src={ require('./images/fire.png') } alt="comodo"/>
                        </div>
                    </div>
                    <div class="bottomSection">
                        <div class="leftSection">
                            <span class="currency">
                               <img src={ require('./images/eth.png') } alt=""/>
                                <span>EtherEum</span>
                                
                            </span>
                            <div class="value">
                                <span>10344 $</span>
                                <span>+7%</span>
                            </div>
                        </div>
                        <div class="rightSection">
                            <span class="currency">
                               <img src={ require('./images/litecoin.png') } alt=""/>
                                <span>LITECOIN</span>
                                
                            </span>
                            <div class="value">
                                <span>10344 $</span>
                                <span>+7%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="about">
                <div class="firstBlock">
                    <div class="left">
                        <span class="smallText">КРАТКО</span>
                        <div class="context">О проекте</div>
                        <div class="description">Суть проекта компания которая зарабатывает на торговле криптовалютой с помощью самообучающихся роботов. Данные роботы торгуют по индивидуальному алгоритму под название liken logic. Данный алгоритм это индивидуальная разработка нашей команды которая базируется на принципах сравнения всех имеющихся торговых стратегий, выявлении самой прибыльной для данной ситуации на рынке. </div>
                        <div class="content">
                            <img src={ require('./images/content.png') } alt="download"/>
                            <span>Работает по технологии искуственного интелекта <strong>Warantis Liken Logic</strong></span>
                        </div>
                    </div>
                    
                    <div class="right">
                        <div class="title">Торговый робот на рынке криптовалют по алгоритму Liken Logic</div>
                        <span class="smallText">Успешных сделок более 345 (65%)</span>
                        <div class="rates">
                            <ul>
                                <li><img src={ require('./images/star.png') } alt="star"/></li>
                                <li><img src={ require('./images/star.png') } alt="star"/></li>
                                <li><img src={ require('./images/star.png') } alt="star"/></li>
                                <li><img src={ require('./images/star.png') } alt="star"/></li>
                                <li><img src={ require('./images/starOff.png') } alt="star"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="secondBlock">
                    <div class="left">
                        <ul>
                            <li>
                                <img src={ require('./images/securityPurple.png') } alt="securityIcon"/>
                                <div class="text">
                                    <span class="text"><strong>Официальная компания</strong></span>
                                    <a href="#">Смотреть документы</a>
                                </div>
                            </li>
                            <li>
                                <img src={ require('./images/securityPurple.png') } alt="securityIcon"/>
                                <div class="text">
                                    <span class="text"><strong>Ваши средства застрахованы</strong></span>
                                    <a href="#">Смотреть сумму страхования</a>
                                </div>
                            </li>
                            <li>
                                <img src={ require('./images/securityPurple.png') } alt="securityIcon"/>
                                <div class="text">
                                    <span class="text"><strong>Полная анонимность,</strong> <br/>мы никогда не просим вас о <br/> верификации</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="middle">
                        <span class="title">Торговый робот
доступен<br/> в ЛК Warantis <br/>в вашем депозите</span>
                        <span class="lowText">Откройте депозит и начните торговать с роботом</span>
                        <a href="#" class="getAccess" onClick={createDeposit}>ПОЛУЧИТЬ ДОСТУП </a>
                    </div>
                    
                    <div class="right">
                        <span class="smallText">ПОЛНЫЙ КОНТРОЛЬ</span>
                        <span class="title">Как это работает?</span>
                        <span class="description"><strong>Робот автоматически выбирает стратегию,<br/> и открывает позицию.</strong> После того как стратегия перестает работать, робот закрывает позицию. И процесс подбора стратегии запускается снова. Алгоритм liken logic зарекомендовал себя как один из самых стабильных и прибыльных на рынке на сегодняшний день. Благодарю этому была создана платформа grofoos.com которая позволяет привлекать инвестиции. Данный инструмент позволяет заработать нам и поделиться прибылью с нашими инвесторами.</span>
                    </div>
                </div>
            </div>
        
            <div class="howWeWork">
                <div class="lowText">Познакомтесь</div>
                <div class="title">Как мы работаем?</div>
                <ul>
                    <li>
                        <div>
                            <img src={ require('./images/first.png') } alt="security"/>
                        </div>
                        <span class="text">
                            <strong>Регистрация <br/>в системе</strong> <br/> от 60 секунд
                        </span>
                    </li>
                    <li>
                        <div><img src={ require('./images/second.png') } alt="security"/></div>
                        <span class="text">
                            <strong>Открытие депозита <br/>в системе</strong> <br/> от 60 секунд
                        </span>
                    </li>
                    <li>
                        <div><img src={ require('./images/third.png') } alt="security"/></div>
                        <span class="text">
                            <strong>Подключение средств<br/>к портфелю</strong> <br/> от 60 секунд
                        </span>
                    </li>
                    <li>
                        <div><img src={ require('./images/fourth.png') } alt="security"/></div>
                        <span class="text">
                            <strong>Вывод прибыли</strong> <br/> от 60 секунд
                        </span>
                    </li>
                    <li>
                        <div><img src={ require('./images/fifth.png') } alt="security"/></div>
                        <span class="text">
                            <strong>Создание команды</strong> <br/> от 60 секунд
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Mainpage;
