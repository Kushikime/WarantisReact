import React from 'react';
import styles from './About.module.scss';
import Footer from "../Footer/Footer";

function About() {
    return (
        <div class={styles.aboutWrapper}>
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
                
                
            <div class={styles.about}>
                <div class={styles.top}>
                    <h1>О НАС</h1>
                    <div class={styles.row}>
                        <div class={styles.left}>
                            <span class={styles.title}>МЫ ПРИВЕТСТВУЕМ ВАС в WARANTIS</span>
                        </div>
                        <div class={styles.middle}>
                            <span class={styles.text}>Ваш ресурс номер один в области инвестиций в торговлю криптовалютой. BIG BITCOIN BANK представляет собой площадку в глобальной сети интернет, которая зарабатывает и аккумулирует средства с помощью торговли криптовалютой на криптовалютных биржах и предоставляет своим пользователям возможность значительно приумножить свой капитал.</span>
                        </div>
                        <div class={styles.right}>
                            <img src={ require('../images/sillyImage.png')} alt="image"/>
                        </div>
                    </div>
                </div>
                <div class={styles.bottom}>
                    <div>
                        <img src={ require('../images/sillyImage.png')} alt="image"/>
                    </div>
                    <div>
                        <span>Как известно, биржевые площадки объединяют вокруг себя трейдеров, то есть людей, которые зарабатывают на разнице курсов виртуальных валют. Эта деятельность считается весьма прибыльной. Недаром биржевая торговля относится к наиболее популярным видам заработка Bitcoin. Столь высокие показатели доходности объясняются значительной волатильностью криптовалюты.

Согласно статистике, стоимость Биткоина с момента его появления на рынке увеличивалась в сотни раз. Это говорит так же о том, что показатели роста стоимости криптовалюты намного выше, чем у традиционных активов. Именно поэтому частные инвесторы и люди по всему миру выбирают инвестиции в торговлю криптовалютой.</span>
                    </div>
                </div>
            </div>
            </div>
            

            <div class={styles.howThatsWork}>
                <span class={styles.lowText}>ПОЗНАКОМТЕСЬ</span>
                <span class={styles.mainText}>Как это работает?</span>
                <div>
                    <div>
                        <div class={styles.imageBlock}><img src={ require('../images/first.png') } alt="image"/></div>
                        <div>
                            <span>Здесь зарабатывает каждый</span>
                            <p>Для того, чтобы получать стабильный доход и увеличивать свой капитал от сферы торговли криптовалютами вам совершенно не обязательно быть профессиональным инвестором и обладать знаниями и опытом в этой области.</p>
                        </div>
                    </div>
                    <div>
                        <div class={styles.imageBlock}><img src={ require('../images/first.png') } alt="image"/></div>
                        <div>
                            <span>Здесь зарабатывает каждый</span>
                            <p>Для того, чтобы получать стабильный доход и увеличивать свой капитал от сферы торговли криптовалютами вам совершенно не обязательно быть профессиональным инвестором и обладать знаниями и опытом в этой области.</p>
                        </div>
                    </div>
                    <div>
                        <div class={styles.imageBlock}><img src={ require('../images/first.png') } alt="image"/></div>
                        <div>
                            <span>Здесь зарабатывает каждый</span>
                            <p>Для того, чтобы получать стабильный доход и увеличивать свой капитал от сферы торговли криптовалютами вам совершенно не обязательно быть профессиональным инвестором и обладать знаниями и опытом в этой области.</p>
                        </div>
                    </div>
                    <div>
                        <div class={styles.imageBlock}><img src={ require('../images/first.png') } alt="image"/></div>
                        <div>
                            <span>Здесь зарабатывает каждый</span>
                            <p>Для того, чтобы получать стабильный доход и увеличивать свой капитал от сферы торговли криптовалютами вам совершенно не обязательно быть профессиональным инвестором и обладать знаниями и опытом в этой области.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class={styles.ourTeam}>
                <span class={styles.lowText}>ПОЗНАКОМТЕСЬ</span>
                <span class={styles.mainText}>Наша команда</span>
                <div class={styles.row}>
                    <div>
                        <img src={ require('../images/sillyImg.png') } alt="image"/>
                        <div>
                            <p class={styles.name}>Имя Фамилия</p>
                            <p class={styles.job}>Директор по развитию</p>
                        </div>
                    </div>
                    <div>
                        <img src={require('../images/sillyImg.png')} alt="image"/>
                        <div>
                            <p class={styles.name}>Имя Фамилия</p>
                            <p class={styles.job}>Директор по развитию</p>
                        </div>
                    </div>
                    <div>
                        <img src={require('../images/sillyImg.png')} alt="image"/>
                        <div>
                            <p class={styles.name}>Имя Фамилия</p>
                            <p class={styles.job}>Директор по развитию</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class={styles.ourGoal}>
                <div>
                    <span class={styles.lowText}>ПОЗНАКОМТЕСЬ</span>
                    <span class={styles.mainText}>Наша главная задача</span>
                    <p>- состоит в том, чтобы предоставить пользователям лучшие инвестиционные решения для скорейшего достижения их финансовых целей, обеспечивая при этом большой спектр поддержки и помощи и привлекая для этого нашу команду специалистов. Мы идем в ногу со временем вместе с вами, развиваемся и зарабатываем в самом перспективном направлении 21 столетия.</p>
                </div>
                <img src={ require('../images/sillyImage2.png')} alt="image"/>
            </div>
            
            <div class={styles.roadMap}>
                <span class={styles.lowText}>ПОЗНАКОМТЕСЬ</span>
                <span class={styles.mainText}>Дорожная карта</span>
                
                <div class={styles.blocks}>
                    <div class={styles.top}>
                        <div>
                            <span class={styles.title}>Разработка инвестиционной 
платформы</span>
                            <span class={styles.low}>Проектирование и разработка инвестиционной платформы.</span>
                            <span class={styles.date}>Сентябрь 2018</span>
                        </div>
                        <div>
                            <span class={styles.title}>Период тестирования</span>
                            <span class={styles.low}>Проектирование и разработка инвестиционной платформы.</span>
                            <span class={styles.date}>Сентябрь 2018</span>
                        </div>
                        <div>
                            <span class={styles.title}>Запуск рекламной
компании</span>
                            <span class={styles.low}>Проектирование и разработка инвестиционной платформы.</span>
                            <span class={styles.date}>Сентябрь 2018</span>
                        </div>
                        <div>
                            <span class={styles.title}>Добавление валют</span>
                            <span class={styles.low}>Проектирование и разработка инвестиционной платформы.</span>
                            <span class={styles.date}>Сентябрь 2018</span>
                        </div>
                        <div>
                            <span class={styles.title}>Запуск своего сервиса обмена валют Groofos Change</span>
                            <span class={styles.low}>Проектирование и разработка инвестиционной платформы.</span>
                            <span class={styles.date}>Сентябрь 2018</span>
                        </div>
                    </div>
                    <div class={styles.bottom}>
                        <div>
                           <span class={styles.date}>Май 2018</span>
                            <span class={styles.title}>Разработка алгоритма liken logic</span>
                            <span class={styles.low}>Разработка индивидуального алгортма liken logic, следуя которому торгуют самообучающие роботы на криптобиржах.</span>
                            
                        </div>
                        <div>
                           <span class={styles.date}>Февраль 2019</span>
                            <span class={styles.title}>Регистрация компании</span>
                            <span class={styles.low}>Регистрация компании, оформление официальных документов</span>
                            
                        </div>
                        <div>
                           <span class={styles.date}>Февраль 2019</span>
                            <span class={styles.title}>Официальный старт работы</span>
                            <span class={styles.low}>Регистрация компании, оформление официальных документов</span>
                            
                        </div>
                        <div>
                           <span class={styles.date}>Февраль 2019</span>
                            <span class={styles.title}>Добавление языков</span>
                            <span class={styles.low}>Регистрация компании, оформление официальных документов</span>
                            
                        </div>
                        <div>
                           <span class={styles.date}>Февраль 2019</span>
                            <span class={styles.title}>Мобильное приложение</span>
                            <span class={styles.low}>Регистрация компании, оформление официальных документов</span>
                            
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
export default About;
