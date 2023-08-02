'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { mylog_Diary } from './mylog_data'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

export default function Timeline() {

   const router = useRouter()


   return (
      <div>
         <div className='overflow-x-hidden overflow-y-auto h-[686px]'>
            <ul>
               {mylog_Diary.map((diary, key) =>
                  //アルバム全体
                  <li
                     key={key}>

                     {/* アルバム上部 */}
                     <div className='relative px-8 pt-2'>
                        <div className='absolute flex flex-col'>
                           <div className='flex flex-row justify-between px-4 py-1'>
                              {/*日付を表示 */}
                              <div className='p-1 text-border_line text-xl font-bold'>
                                 {diary.date}
                              </div>
                              <button
                                 onClick={() => {

                                    //観覧に飛ぶ
                                    router.push(`/app_body/diary/map/today_map`)
                                 }}
                              >
                                 {/* アイコンの表示 */}

                                 <Image
                                    src='/mapmore_icon.png'
                                    alt='more'
                                    width={40}
                                    height={40}
                                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                                 />
                              </button>
                           </div>
                           <div className='w-80 border border-border_line font-extrabold'></div>

                           <div className='mx-5 my-4 overflow-hidden h-[156px]' style={{ maxWidth: '275px' }}>
                              {/* react-slickカルーセルを使用 */}
                              <Slider
                                 infinite={false}
                                 slidesToShow={1}
                                 slidesToScroll={1}
                                 arrows={false}
                                 dots={true} // ドットナビゲーションを有効にします
                                 swipeToSlide={true} // スワイプした際にスライドが切り替わるようにします
                                 verticalSwiping={false} // 横方向にスワイプできるようにします
                              >
                                 {diary.album.map((image, key) => (
                                    <div key={key}>
                                       <Image
                                          src={image}
                                          alt={diary.date}
                                          width={275}
                                          height={156}
                                          style={{ objectFit: 'cover', width: '275px', height: '156px' }}
                                       />
                                    </div>
                                 ))}
                              </Slider>
                           </div>
                        </div>
                        <div className='w-80 h-60 bg-backgray'></div>
                     </div>

                  </li>
               )}
            </ul>

         </div>
      </div>
   )



}