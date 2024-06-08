import { useTranslation } from 'react-i18next';

function LanguageSelector() {

  const languages =[
    {
      code:"en",lang:"EN"
    },
    {
      code:"ru",lang:"RU"
    },
    {
      code:"aze",lang:"AZE"
    },
  ]
  const {i18n} = useTranslation();

  const ChangeLanguages = (item)=>{
    i18n.changeLanguage(item)
  } 
  return (
   <>
   {languages.map((item)=>(
    <button className={item.code === i18n.language?'activaTranslate':''} key={item.code} onClick={()=>ChangeLanguages(item.code)}>
    <div className={`flag-icon flag-${item.code}`}></div> {item.lang} </button>

   ))}

   </>
  )
}

export default LanguageSelector