import React from 'react';
import styles from  './Partnership.module.scss';
import Footer from "../Footer/Footer";

function Partnership() {

    return (
        <div class={styles.partnershipWrapper}>
            <div class={styles.topBlock}>
                <div class={styles.topNav}>
                    <a href="/" id={styles.logoLink}><img src={ require('../images/logo.svg') } alt="logo" class="logo"/></a>

                    <ul class={styles.nav}>
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

                    <div class={styles.autorization}>
                        <a href="#" id={styles.login}>Войти</a>
                        <a href="#" id={styles.register}>Зарегистрироваться</a>
                    </div>
                </div>
            </div>
            
            <div class={styles.firstBlock}>
                <span class={styles.title}>Партнерская программа </span>
                
                <div class={styles.row}>
                    <div class={styles.left}>
                        <span class={styles.lowText}>КРАТКО</span>
                        <span class={styles.mainText}>О Реферальной системе</span>
                        <span class={styles.text}>Суть проекта компания которая зарабатывает на торговле криптовалютой с помощью самообучающихся роботов. Данные роботы торгуют по индивидуальному алгоритму под название liken logic. Данный алгоритм это индивидуальная разработка нашей команды которая базируется на принципах сравнения всех имеющихся торговых стратегий, выявлении самой прибыльной для данной ситуации на рынке. </span>
                    </div>
                    <div class={styles.middle}>
                        <img src={ require('../images/ps1.png') } alt="image"/>
                    </div>
                    <div class={styles.right}>
                        <span class={styles.mainText}>
                            ПАРТНЕРСКАЯ ПРОГРАММА – ЭТО КРУТО! ДЕЛИСЬ <span>ИНФОРМАЦИЕЙ О WARANTIS И ПОЛУЧАЙ ВОЗНАГРАЖДЕНИЯ КАЖДЫЙ ДЕНЬ!</span>
                        </span>
                        <span class={styles.text}>Начинай строить свою команду сегодня! Приглашай друзей и получай мгновеную прибыль.</span>
                    </div>
                </div>
                
                <div class={styles.progressBar}>
                    <div>
                        <span class={styles.title}>Заработок не используя партнерскую программу</span>
                        <span class={styles.text}>Использование стандартного тарифа без приглашений</span>
                    </div>
                    <div>
                        <span class={styles.title}>Заработок, используя  партнерскую программу</span>
                        <span class={styles.text}>Использование максимального тарифа и приглашений в партнерской программе</span>
                    </div>
                </div>
                
            <div class={styles.referal}>
                <div class={styles.top}>
                    <span class={styles.title}>Реферальный<br/> <span>бонус</span></span>
                    <span class={styles.text}>Получайте комиссионные от инвестиций прямых партнеров, которые зарегистрировались 
по вашей ссылке, а так же комиссионные  от ваших непрямых <br/> партнеров со 2–го по 10–тый уровень</span>
                </div>
                <div class={styles.bottom}>
                    
                </div>
            </div>
            
            <div class={styles.agent}>
                <div class={styles.top}>
                    <span class={styles.title}>Агентский <br/> <span>бонус</span></span>
                    <span class={styles.text}>Появление новых средств коммуникаций позволило расширить число тех, кто зарабатывает на партнерских программах, превратив их в прибыльный способ получения пассивного дохода. <br/> <br/>Поэтому, как и большинство инвесторов, вы можете использовать партнерскую программу Big Bitcoin Bank в качестве хорошей дополнительной прибыли помимо дохода с инвестиций. Собрав активную команду, ваша прибыль начнет расти в геометрической прогрессии. Заработать двадцать тысяч долларов за 2 – 3 месяца не составит особого труда.</span>
                </div>
                <div class={styles.bottom}>
                   <div class={styles.topBar}>
                       <span class={styles.state}>СТАТУС</span>
                       <span class={styles.profit}>ПРИБЫЛЬ</span>
                       <span class={styles.terms}>УСЛОВИЯ</span>
                   </div>
                    <ul>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr1</span>
                            <span class={styles.percentage}>3%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr2</span>
                            <span class={styles.percentage}>5%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr3</span>
                            <span class={styles.percentage}>7%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr4</span>
                            <span class={styles.percentage}>8.5%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr5</span>
                            <span class={styles.percentage}>10%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr6</span>
                            <span class={styles.percentage}>11%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr7</span>
                            <span class={styles.percentage}>12%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr8</span>
                            <span class={styles.percentage}>13%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr9</span>
                            <span class={styles.percentage}>14%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                        <li>
                            <div class={styles.profImg}></div>
                            <span class={styles.stateName}>wr10</span>
                            <span class={styles.percentage}>15%</span>
                            <div class={styles.terms}>
                                <span class={styles.title}>3 лично приглашенных</span>
                                <span class={styles.lowText}>3 инвестора в команде</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class={styles.premia}>
                <div class={styles.left}>
                    <span class={styles.title}>ЕДИНОРАЗОВАЯ <br/><span>ПРЕМИЯ</span></span>
                    <span class={styles.text}>Получайте комиссионные от инвестиций 
                        прямых партнеров, которые зарегистрировались 
                        по вашей ссылке, а так же комиссионные 
                        от ваших непрямых 
                        партнеров со 2–го по 10–тый уровень <br/><br/>
                        Получайте комиссионные от инвестиций 
                        прямых партнеров, которые зарегистрировались 
                        по вашей ссылке, а так же комиссионные 
                        от ваших непрямых 
                        партнеров со 2–го по 10–тый уровень
                    </span>
                </div>
                <img src={ require('../images/ps2.png') } alt="image"/>
                <div class={styles.sillyCircle}></div>
            </div>
            
            
            
            
            <div class={styles.bottomPB}>
                <div class={styles.top}>
                    <div>
                        <span class={styles.title}>Личная рекомендация</span>
                        <span class={styles.text}>Самым эффективным методом является личная рекомендация. Вы можете рекомендовать проект своим друзьям и знакомым – просто расскажите о своем заработке в Warantis, как вам удается зарабатывать на инвестициях в криптоторговлю и поделитесь своей партнерской ссылкой.</span>
                    </div>
                    <div>
                        <span class={styles.title}>E-mail рассылка</span>
                        <span class={styles.text}>разошлите письма своим друзьям, знакомым. Чем объемнее будет ваша реклама и чем больше будет привлечено ресурсов, тем значительнее будет ваше вознаграждение от участия в этой партнерской программе.</span>
                    </div>
                </div>
                <div class={styles.bottom}>
                    <div>
                        <span class={styles.title}>Социальные сети <br/>и тематические форумы</span>
                        <span class={styles.text}>Расскажите  о нас на своих личных страницах в соц. сетях и разместите свою партнерскую ссылку. Если вы посещаете тематические форумы – поделитесь партнерской ссылкой с другими посетителями.</span>
                    </div>
                    <div>
                        <span class={styles.title}>Собственный ресурс</span>
                        <span class={styles.text}>если у вас есть собственный сайт, блог, видео канал и пр., то просто разместите наш рекламный банер на своем сайте или напишите статью рекомендацию со своей партнерской ссылкой.</span>
                    </div>
                </div>
            </div>
            </div>
            
            
            
            <div class={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}
export default Partnership;
