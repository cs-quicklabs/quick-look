import { useState } from 'react';
import DeleteAdditinalLink from './DeleteAdditionalLink';
import EditAdditionalLink from './EditAdditionalLink';

export default function ExistingAdditionalSpotlightLink({ setShowSpotlight,loaderData, mode, setmode}:any) {

const [clickedAdditionalSpotlight, setClickedAdditionalSpotlight] = useState<{ linkText: any; id: any; linkUrl: any; }>({ linkText: '', id: '', linkUrl: '' });

const [showEditAdditional, setShowEditAdditional] = useState(false); 

const toggleEditAdditionalLink = (additionalSpotlight: { linkText: any; id: any; linkUrl: any; }) => {
  setClickedAdditionalSpotlight(prev => prev = additionalSpotlight);
  setShowEditAdditional(!showEditAdditional);
}

const [openDeleteAdditionalLink, setOpenDeleteAdditionalLink] = useState(false);

  return (
    <div className="pl-3 pr-3.5">
      <ul>
        {loaderData?.additionalLinks.map((additionalSpotlight: { linkText: any; id: any; linkUrl: any; }) => (
          <li key={additionalSpotlight.linkText} className="">
            {additionalSpotlight.linkText ?
              <>
              <div className={`flex justify-between ${mode === 'mobile' ? 'flex-col xl:flex-row items-center ml-[24rem] lg:ml-[32rem] xl:ml-[0]' : 'flex-col lg:flex-row'}`}>
                <div className='flex flex-col w-screen'>
                  <div className='flex border-b border-gray-200'>
                  <div className="py-4 flex">
                  
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{additionalSpotlight.linkText}</p>
                    <p className="w-52 text-sm text-gray-500 text-ellipsis overflow-hidden">{`${additionalSpotlight.linkUrl?.slice(0,30)}....`}</p>
                  </div>
                </div>

                <div className={`flex justify-center items-start text-gray-400 mb-2 lg:mb-0   ${mode === 'mobile' ? ' flex-row xl:flex-col ml-[-13rem] lg:ml-[-13rem] xl:ml-[4rem] mt-[5rem]  lg:mt-[5rem] xl:mt-0' : 'flex-row lg:flex-col py-0 lg:py-4 ml-[-13rem] mt-[5rem] lg:ml-[5.2rem] lg:mt-0'}`}>
                  <button
                    data-cy="editExistingAdditionalLink"
                    className="hover:text-indigo-600 text-[14px]"
                    // id={additionalSpotlight.id}
                    onClick={(e: any) => { e.preventDefault(); toggleEditAdditionalLink(additionalSpotlight); }}
                  >
                    Edit
                  </button>
                  
                  <button
                    data-cy="deleteAdditionalLinkButton"
                    onClick={(e: any) => { e.preventDefault(); setOpenDeleteAdditionalLink(true); }}
                    className={`hover:text-red-600 text-[14px] ${mode === 'mobile' ? 'ml-[1.5rem] xl:ml-0' : 'lg:ml-0 ml-3'}`}>
                    Delete
                  </button>
                  {openDeleteAdditionalLink && 
                  <DeleteAdditinalLink openDeleteAdditionalLink={openDeleteAdditionalLink} setOpenDeleteAdditionalLink={setOpenDeleteAdditionalLink} onClose={() => setOpenDeleteAdditionalLink(false)}  />}

                  
                </div>
                  </div>

                  <div>
                  {showEditAdditional && clickedAdditionalSpotlight.id === additionalSpotlight.id && (
                <EditAdditionalLink id={additionalSpotlight.id} clickedAdditionalSpotlight={clickedAdditionalSpotlight} showEditAdditional={showEditAdditional} setShowEditAdditional={setShowEditAdditional} loaderData={loaderData} mode={mode} setmode={setmode} />
              )}

             
                  </div>
                
                
                </div>
                
                
              </div>
              
              </>
              
              : <span></span>}
          </li>
        ))}
        
      </ul>
    </div>
  )
} 