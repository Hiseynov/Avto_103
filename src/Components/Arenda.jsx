import React, { useState } from "react";

function Arenda({setPopopArenda}) {
  //   // Состояние для фокуса на поле ввода
  const [isFocusedUser, setIsFocusedUser] = useState(false);
  const [isFocusedDate, setIsFocusedDate] = useState(false);
  const [isFocusedDiapazon, setIsFocusedDiapazon] = useState(false);
  const [isFocusedPhone, setIsFocusedPhone] = useState(false);
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

// Date
  const handleFocusDate = () => {
    setIsFocusedDate(true);
  };
  // Обработчик события потери фокуса на поле ввода
  const handleBlurDate = () => {
    setIsFocusedDate(false);
  };

  // Diapazon
  const handleFocusDiapazon = () => {
    setIsFocusedDiapazon(true);
  };
  // Обработчик события потери фокуса на поле ввода
  const handleBlurDiapazon = () => {
    setIsFocusedDiapazon(false);
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
      <div className="Arenda">
        {/* {setPopopArenda ? (<>
        <span className="closePopop" onClick={()=>(setPopopArenda(true))}>x</span>
        </>):''} */}
        <div className="Arenda__container">
          <h3>АРЕНДОВАТЬ АВТОМОБИЛЬ</h3>
          <form >
            <div className="formControl">
              {/* <div className="formControl__word">
                <label htmlFor="user">Ваше ФИО</label>
                <span>*</span>
              </div> */}
              <div className="formControl__input">
                <input
                  id="user"
                  type="text"
                  placeholder="Ваше ФИО"
                  required
                  onFocus={handleFocusUser}
                  onBlur={handleBlurUser}
                  className={isFocusedUser ? "focused" : ""}
                />
              </div>
            </div>
            <div className="formControl">
              {/* <div className="formControl__word">
                <label htmlFor="Date">Дата рождения</label>
                <span>*</span>
              </div> */}
              <div className="formControl__input">
                <input
                  id="Date"
                  type="text"
                  placeholder="Дата рождения"
                  required
                  onFocus={handleFocusDate}
                  onBlur={handleBlurDate}
                  className={isFocusedDate ? "focused" : ""}
                />
              </div>
            </div>
            <div className="formControl">
              {/* <div className="formControl__word">
                <label htmlFor="Date">Дата рождения</label>
                <span>*</span>
              </div> */}
              <div className="formControl__input">
                <input
                  id="diapazon"
                  type="text"
                  placeholder="Диапазон аренды"
                  required
                  onFocus={handleFocusDiapazon}
                  onBlur={handleBlurDiapazon}
                  className={isFocusedDiapazon ? "focused" : ""}
                />
              </div>
            </div>
            <div className="formControl">
              {/* <div className="formControl__word">
                <label htmlFor="Date">Дата рождения</label>
                <span>*</span>
              </div> */}
              <div className="formControl__input">
                <input
                  id="Phone"
                  type="text"
                  placeholder="Телефон"
                  required
                  onFocus={handleFocusPhone}
                  onBlur={handleBlurPhone}
                  className={isFocusedPhone ? "focused" : ""}
                />
              </div>
            </div>
            <div className="formControl">
              {/* <div className="formControl__word">
                <label htmlFor="Date">Дата рождения</label>
                <span>*</span>
              </div> */}
              <div className="formControl__input">
                <textarea
                  id="Text"
                  type="text"
                  placeholder="Комментарий к заявке"
                  required
                  onFocus={handleFocusText}
                  onBlur={handleBlurText}
                  className={isFocusedText ? "focused" : ""}
                />
              </div>
            </div>
            <div className="formSubmit">
                <button type="submit">ОТПРАВИТЬ</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Arenda;
// import React, { useState } from 'react';
// // import './Form.css'; // Подключите файл стилей для формы

// const Form = () => {
// //   // Состояние для фокуса на поле ввода
//   const [isFocused, setIsFocused] = useState(false);

//   // Обработчик события фокуса на поле ввода
//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   // Обработчик события потери фокуса на поле ввода
//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <div className="formControl">
//       <div className="formControl__word">
//         <label htmlFor="user">Ваше ФИО</label>
//         <span>*</span>
//       </div>
//       <div className="formControl__input">
//         <input
//           id='user'
//           type="text"
//           placeholder='Ваше ФИО'
//           required
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           className={isFocused ? 'focused' : ''}
//         />
//       </div>
//     </div>
//   );
// };

// export default Form;
