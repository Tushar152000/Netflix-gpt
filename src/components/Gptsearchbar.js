import React, { useRef } from 'react'
import lang from './LanguageConstant'
import { useSelector } from 'react-redux'
import openai from './utilis/openAi'

const Gptsearchbar = () => {
    const langkey=useSelector((store)=>store.config.lang)
    const SearchText=useRef(null);


 
    const handleGptSearchClick=async()=>{
        console.log(SearchText.current.value); // Here We are Getting the Search Text as an Reference
        // Now we have to Pass the text annd call api to Search the result 
        const getQuery="Act as a Movie Recomendation System and Suggest Some Movies for the Query:"+SearchText.current.value+
        ". only give me name of 5 movie ,coma separated like the example result given ahead . Example- Gadar,Solay,Tere Naam, Andaaz Apna Apna ,Padoshi";
        const GptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: getQuery }],
            model: 'gpt-3.5-turbo',
          });


    if(!GptResult.choices) {}
    
    // take them to new page
    console.log(GptResult.choices?.choices?.[0]?.messages.content);

    }
    
  return (
    <div className=' pt-[10%]  flex justify-center '>
    
      <form className='p-1 bg-black w-1/2 grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
        <input className='p-4 m-3 col-span-9 rounded-md' type="text"
        ref={SearchText}
        placeholder={lang[langkey].gptsearchplaceholder}
        />
        <button className='bg-red-600 p-1 m-4 rounded-lg text-white col-span-3' onClick={handleGptSearchClick}>{lang[langkey].search}</button>
        
      </form>
    </div>
  )
}

export default Gptsearchbar
