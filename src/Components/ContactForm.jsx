import React, { useState } from 'react'

function ContactForm() {
  const [isFocusedPhone, setIsFocusedPhone] = useState(false);
    const [isFocusedUser, setIsFocusedUser] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedText, setIsFocusedText] = useState(false);
  
    // Обработчик события фокуса на поле ввода
    // User
  
    const handleFocusUser = () => {
      setIsFocusedUser(true);
    };
    // Обработчик события потери фокуса на поле ввода
    const handleBlurUser = () => {
      setIsFocusedUser(false);
    };
  
    const handleFocusEmail = () => {
      setIsFocusedEmail(true);
    };
    // Обработчик события потери фокуса на поле ввода
    const handleBlurEmail = () => {
      setIsFocusedEmail(false);
    };
  
    // Phone
    const handleFocusPhone = () => {
      setIsFocusedPhone(true);
    };
    // Обработчик события потери фокуса на поле ввода
    const handleBlurPhone = () => {
      setIsFocusedPhone(false);
    };
  
    // Textarea
    const handleFocusText = () => {
      setIsFocusedText(true);
    };
    // Обработчик события потери фокуса на поле ввода
    const handleBlurText = () => {
      setIsFocusedText(false);
    };
  return (
    <>
                    <div className="Contact__container--form">
            <h3>
                <span>Оставить</span> сообщение
              </h3>
              <div className="contactForm">
                <form action="">
                  <ul className="contactForm__categories">
                  <li>
                      <label htmlFor="user">Имя и Фамилия * : </label>
                      <input 
                      type="text" 
                      id="user"
                      required
                      onFocus={handleFocusUser}
                      onBlur={handleBlurUser}
                      className={isFocusedUser ? "focused" : ""}
                      placeholder = 'Анар Гусейнов'
                      />
                    </li>
                  <li>
                      <label htmlFor="email">Электронная почта * : </label>
                      <input 
                      type="email" 
                      id="email"
                      required
                      onFocus={handleFocusEmail}
                      onBlur={handleBlurEmail}
                      className={isFocusedEmail ? "focused" : ""}
                      placeholder = 'avto-103@mail.ru'
                      />
                    </li>
                  <li>
                      <label htmlFor="phone">Телефон * : </label>
                      <input 
                      type="text" 
                      id="phone"
                      required
                      onFocus={handleFocusPhone}
                      onBlur={handleBlurPhone}
                      className={isFocusedPhone ? "focused" : ""}
                      placeholder = '+994506217291'
                      />
                    </li>
                  <li>
                      <label htmlFor="text">Сообщение  : </label>
                      <textarea  
                      placeholder="Сообщение ..." 
                      id="text" 
                      cols="30" 
                      rows="10"
                      onFocus={handleFocusText}
                      onBlur={handleBlurText}
                      className={isFocusedText ? "focused" : ""}
                      ></textarea>
                    </li>

                    <li>
                      <button type="submit">Отправить</button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
    
    </>
  )
}

export default ContactForm