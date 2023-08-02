'use client'

import Image from 'next/image'
import { useState } from 'react'
import { mylog_data } from './groupset'

export default function Video() {
   const [showContent, setShowContent] = useState(false)
   const [isShowContents, setIsShowContents] = useState<number[]>([])
   const [buttonImage, setButtonImage] = useState('/downbutton.png')

   const [popupMovie, setPopupMovie] = useState<string | null>(null)
   const [digestImage, setDigestImage] = useState<string | null>(null)

   const handlePopupCopy = () => {
      if (popupMovie) {
         navigator.clipboard.writeText(popupMovie)
            .then(() => alert('動画のリンクをコピーしました'))
            .catch((error) => alert('動画のリンクのコピーに失敗しました'));
      }
   }

   const handleButtonClick = (index: number) => {
      setShowContent(!showContent)
      const tmp = [...isShowContents]

      if (isShowContents.includes(index)) {
         const indexToRemove = tmp.indexOf(index);
         tmp.splice(indexToRemove, 1);
      } else {
         tmp.push(index);
      }

      setIsShowContents(tmp);

      setButtonImage(showContent ? '/downbutton.png' : '/upbutton.png')
   }

   const handleMovieButtonClick = (movie: string) => {
      setPopupMovie(movie);
   }

   const handlePopupClose = () => {
      setPopupMovie(null);
   }

   const handleDigestButtonClick = (digest: string) => {
      setDigestImage(digest);
   };


   return (
      <div>
          <div className='m-6 w-[340px] h-[184px] border-2 border-backgray text-[30px] text-center'>
            {digestImage ? (
               <Image src={digestImage} alt="Digest" width={340} height={184} style={{ objectFit: 'cover' }} />
            ) : (
               '動画'
            )}
         </div>
         <div className="border-2 text-backgray"></div>
         <div className='mt-2 overflow-y-scroll h-[440px]'>
            {mylog_data.map((data, index) => (
               <div key={index}>
                  <div className={`ml-4 mt-2 w-[340px] h-[34px] bg-backgray flex flex-row${index in isShowContents ? ' border-b border-border_line rounded-t' : ' border-b-0 rounded'}`}>
                     <div className='ml-2 text-border_line font-AnekGujarati font-extrabold text-[15px]'>{data.GroupName}</div>
                     <div>
                        <button id={`toggleButton${index}`} className="button" onClick={() => handleButtonClick(index)} title="もっと表示">
                           <Image src={buttonImage} alt="Button" id={`buttonImage${index}`} width={10} height={10} className='ml-2' />
                        </button>
                     </div>
                  </div>
                  {isShowContents.includes(index) && (
                     <div className='ml-4 w-[340px] h-[190px] bg-backgray rounded-b relative overflow-hidden'>
                        <div className='mt-3 mx-2 overflow-y-auto h-[165px]'>
                           <div className='flex flex-col space-y-2 mb-1.5' >
                              {data.date.map((date, key) => (
                                 <div key={key} className='px-2 flex flex-row w-[304px] h-[33px] border border-border_line justify-between'>
                                    <div className='text-border_line font-extrabold'>
                                       {date}
                                    </div>
                                    <div className='flex flex-row space-x-2'>
                                       <button
                                          title={'movie play'}
                                          onClick={() => handleDigestButtonClick(data.digest[key])}
                                       >
                                          <Image
                                             src='/movieplay.png'
                                             alt='play'
                                             width={27}
                                             height={27} 
                                          />
                                       </button>
                                       <button
                                          onClick={() => handleMovieButtonClick(data.movie[key])}
                                          title={'Show movie: ${data.movie[key]}'}
                                       >
                                          <Image
                                             src='/icon_link.png'
                                             alt='move'
                                             width={27}
                                             height={27}
                                          />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            ))}
         </div>
         {popupMovie && (
            <div className='fixed inset-0 flex items-center justify-center'>
               <div className='w-[200px] h-[100px] bg-white border-2 border-border_line relative rounded-md'>
                  <button onClick={handlePopupClose} className='absolute px-2 right-0 text-border_line text-xl'>× </button>
                  <div className='text-center my-6 flex flex-col space-y-2'>
                     <div className='text-border_line '>動画のリンクをコピー</div>
                     <div className='mx-2 rounded-md text-backgray bg-backblue' onClick={handlePopupCopy} style={{ cursor: 'pointer' }}>
                        {popupMovie}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   )



}